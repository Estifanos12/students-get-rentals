"use server";

import { extensions } from "@/components/profile/text-editor";
import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";

import { generateHTML } from "@tiptap/html";

export async function updateBio(email, bio) {
  try {
    await connectToDB();
    const student = await Student.findOneAndUpdate({ email }, { bio });
    return { success: true, message: "Bio updated successfully" };
  } catch (error) {
    return { success: false, message: "Error updating bio" };
  }
}
