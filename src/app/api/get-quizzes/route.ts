import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoClient";
import Quiz from "@/models/quiz";

export const GET = async (req: Request) => {
  await connectToDB();

  const reqUrl = new URL(req.url);
  const category = reqUrl.searchParams.get("category");

  try {
    const response = await Quiz.find({ category }).select("-correct_option");
    if (response.length === 0) {
      return NextResponse.json(
        { message: "No quiz found", quiz: [] },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Quiz found",
        quiz: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
