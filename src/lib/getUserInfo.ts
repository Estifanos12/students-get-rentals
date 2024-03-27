import { cache } from "react";
import Student from "@/models/student";
import { connectToDB } from "./mongoClient";

export const getUserInfo = cache(async (email: string) => {
  await connectToDB();
  const item = await Student.findOne({ email });

  if (!item) {
    return { message: "Student not found" };
  }

  return item;
});
