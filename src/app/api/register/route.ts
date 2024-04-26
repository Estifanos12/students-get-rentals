import { NextResponse } from "next/server";
import bcrpyt from "bcrypt";
import { totp } from "otplib";

import { connectToDB } from "@/lib/mongoClient";
import { createUserSchema } from "@/schema";
import Student from "@/models/student";
import OTP from "@/models/otp";
import { CreateStudentBody } from "@/types";
import { sendOTPEmail } from "@/lib/nodemailer";

export const POST = async (req: Request, res: Response) => {
  totp.options = { digits: 6 };
  const secret = process.env.OTP_SECRET;
  const token = totp.generate(secret as string);
  const reqUrl = new URL(req.url);
  const is_verified = reqUrl.searchParams.get("verified") === "true" || false;

  try {
    await connectToDB();

    const requestBody: CreateStudentBody = await req.json();
    const { success } = createUserSchema.safeParse(requestBody);
    if (!success) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const studentExists = await Student.findOne({
      email: requestBody.email,
    });

    if (studentExists) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrpyt.hash(requestBody.password, 10);

    const requestBodyHased = {
      ...requestBody,
      password: hashedPassword,
      email: requestBody.email.toLowerCase(),
      bio: "",
    };

    const student = new Student(requestBodyHased);
    await student.save(student);

    if (!is_verified) {
      const userOtp = new OTP({
        email: requestBody.email.toLowerCase(),
        otp: token,
        valid: true,
      });

      await userOtp.save(userOtp);
      await sendOTPEmail({
        to: requestBody.email,
        subject: "Email Verification",
        text: token,
      });
    }

    return NextResponse.json(
      { user: student, message: "Student created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating student: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    ); // Remove the argument from the function call
  }
};
