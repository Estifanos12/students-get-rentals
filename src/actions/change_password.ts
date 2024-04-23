"use server";

import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";

export const changePassword = async (data) => {
  try {
    await connectToDB();
    const student = await Student.findById(data.id);
    if (!student) {
      return { status: "error", message: "Student not found" };
    }

    if (data.new_password !== data.confirm_password) {
      return { status: "error", message: "Passwords do not match" };
    }

    const isMatch = await bcrypt.compare(data.old_password, student.password);
    if (!isMatch) {
      return { status: "error", message: "Old password is incorrect" };
    }

    const hashedPassword = await bcrypt.hash(data.new_password, 10);

    await Student.findByIdAndUpdate(data.id, { password: hashedPassword });

    return { status: "success", message: "Password changed successfully" };
  } catch (e) {
    return { status: "error", message: "Something went wrong" };
  }
};
