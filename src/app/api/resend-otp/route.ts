import { NextResponse } from "next/server";
import { totp } from "otplib";

import { connectToDB } from "@/lib/mongoClient";
import { sendOTPEmail } from "@/lib/nodemailer";
import OTP from "@/models/otp";

export const POST = async (req: Request, res: Response) => {
  const { email } = await req.json();

  connectToDB();
  const user = await OTP.findOne({ email: email.toLowerCase() });
  if (user) {
    if (user.valid === false) {
      await OTP.deleteMany({ email: email.toLowerCase() });

      sendNewOtp(email);
      return NextResponse.json({ message: "Email Sent" }, { status: 200 });
    }
    return NextResponse.json({ message: "OTP Already Sent!" }, { status: 400 });
  }

  sendNewOtp(email);

  return NextResponse.json({ message: "Email Sent" }, { status: 200 });
};

const sendNewOtp = async (email: string) => {
  const secret = process.env.OTP_SECRET;
  totp.options = { digits: 6 };
  const token = totp.generate(secret as string);
  const userOtp = new OTP({
    email: email.toLowerCase(),
    otp: token,
    valid: true,
  });
  await userOtp.save(userOtp);
  await sendOTPEmail({
    to: email,
    subject: "Reset Password",
    text: token,
  });
  return token;
};
