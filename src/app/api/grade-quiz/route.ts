import { connectToDB } from "@/lib/mongoClient";
import Quiz from "@/models/quiz";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  await connectToDB();
  const { answers, email, category } = await req.json();
  var totalScore = 0;

  try {
    const student = await Student.findOne({ email });
    if (student) {
      try {
        const quizes = await Quiz.find({ category }).select("correct_option");
        quizes.forEach((quiz, index) => {
          if (quiz.correct_option === answers[index]) {
            totalScore += 1;
          }
        });

        const updatedStudentResults = student.results.map((result: any) => {
          if (result.category === category) {
            result.scores.push(totalScore);
            result.best_score = Math.max(...result.scores);
            result.worst_score = Math.min(...result.scores);
            result.average_score =
              result.scores.reduce((a: number, b: number) => a + b, 0) /
              result.scores.length;
            result.no_of_trails += 1;
          }
          return result;
        });

        student.results = updatedStudentResults;

        try {
          student.markModified("results");
          const response = await student.save();
          console.log(response);
        } catch (error) {
          return NextResponse.json({ message: error }, { status: 500 });
        }
        return NextResponse.json(
          {
            message: "Successfully Graded!",
            student_score: totalScore,
          },
          { status: 200 }
        );
      } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 });
      }
    } else {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
