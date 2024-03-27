import { getQuiz } from "@/lib/getQuiz";
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
  const data = await getQuiz(category);

  return <Quiz quiz={data} />;
};

export default QuizPage;
