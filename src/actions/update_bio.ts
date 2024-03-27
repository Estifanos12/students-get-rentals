"use server";

import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";

export async function updateBio(email, bio) {
  try {
    await connectToDB();
    const student = await Student.findOneAndUpdate({ email }, { bio });
    return { success: true, message: "Bio updated successfully" };
  } catch (error) {
    return { success: false, message: "Error updating bio" };
  }
}
