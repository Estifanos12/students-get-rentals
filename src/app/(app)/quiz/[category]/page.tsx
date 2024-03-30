import { Quiz } from "@/components/quiz/quiz";
import { connectToDB } from "@/lib/mongoClient";
import QuizModel from "@/models/quiz";

type QuizPageProps = {
  params: {
    category: string;
  };
  searchParams: {
    params: string;
  };
};

const QuizPage = async ({ params: { category } }: QuizPageProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/get-quizzes?category=${category}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  console.log(data);

  if (data.quiz.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center text-foreground">
        <h1 className="text-xl">
          Sorry, We cannot find quiz with provided category.
        </h1>
      </div>
    );
  }

  return <Quiz quiz={data.quiz} />;
};

export default QuizPage;
