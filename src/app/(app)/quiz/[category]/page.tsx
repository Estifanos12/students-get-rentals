// import { getQuiz } from "@/lib/getQuiz";
import { Quiz } from "@/components/quiz/quiz";

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
    `${process.env.NEXT_PUBLIC_BASE_URL}api/get-quizzes/${category}`,
    { cache: "no-store" }
  );
  const data = await response.json();

  return <Quiz quiz={data.quiz} />;
};

export default QuizPage;
