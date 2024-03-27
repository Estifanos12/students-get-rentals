import { QuizOptions } from "./quiz-options";

type QuizContentProps = {
  question: string;
  options: Array<{
    text: string;
    value: string;
  }>;
  answers: string[];
  currentQuestionIndex: number;
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
};
export const QuizContent = ({
  question,
  options,
  currentQuestionIndex,
  answers,
  setAnswers,
}: QuizContentProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-foreground font-bold text-lg">
        {currentQuestionIndex + 1}. {question}
      </h1>
      <QuizOptions
        options={options}
        currentIndex={currentQuestionIndex}
        setAnswers={setAnswers}
        answers={answers}
      />
    </div>
  );
};
