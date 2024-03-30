import { NextResponse } from "next/server";

import Student from "@/models/student";
import { connectToDB } from "@/lib/mongoClient";
import { m } from "framer-motion";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectToDB();

    const reqUrl = new URL(req.url);
    const email = reqUrl.searchParams.get("email");
    const student = await Student.findOne({ email });
    if (!student) {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while fetching student" },
      { status: 500 }
    );
  }
};
