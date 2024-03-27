import { NextResponse } from "next/server";
import Joi from "joi";
import bcrpyt from "bcrypt";
import { totp } from "otplib";

import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";
import OTP from "@/models/otp";
import { CreateStudentBody } from "@/types";
import { sendOTPEmail } from "@/lib/nodemailer";

const validationSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  email_verified: Joi.boolean().default(false).optional(),
});

export const POST = async (req: Request, res: Response) => {
  totp.options = { digits: 6 };
  const secret = process.env.NEXT_PUBLIC_OTP_SECRET;
  const token = totp.generate(secret as string);

  try {
    await connectToDB();

    const requestBody: CreateStudentBody = await req.json();
    const { error } = validationSchema.validate(requestBody);
    if (error) {
      return NextResponse.json({ error: error.details }, { status: 400 });
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

    const userOtp = new OTP({
      email: requestBody.email.toLowerCase(),
      otp: token,
      valid: true,
    });

    const hashedPassword = await bcrpyt.hash(requestBody.password, 10);

    const requestBodyHased = {
      ...requestBody,
      password: hashedPassword,
      email: requestBody.email.toLowerCase(),
      bio: "",
    };

    console.log("requestBody: ", {
      ...requestBody,
      password: hashedPassword,
    });

    const student = new Student(requestBodyHased);
    await student.save(student);
    await userOtp.save(userOtp);
    await sendOTPEmail({
      to: requestBody.email,
      subject: "Email Verification",
      text: token,
    });

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
