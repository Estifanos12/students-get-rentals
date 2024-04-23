import nodemailer from "nodemailer";
import {
  compileResetEmailTemplate,
  compileSendOTPEmailTemplate,
} from "./email";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

type emailProps = {
  to: string;
  subject: string;
  text: string;
};

export const sendResetPasswordEmail = async ({
  to,
  subject,
  text,
}: emailProps) => {
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to,
      subject,
      html: compileResetEmailTemplate(text),
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendOTPEmail = async ({ to, subject, text: otp }: emailProps) => {
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to,
      subject,
      html: compileSendOTPEmailTemplate(otp),
    });
  } catch (error) {
    console.error(error);
  }
};
