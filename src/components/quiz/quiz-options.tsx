import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import classnames from "classnames";

type QuizOptionsProps = {
  options: Array<{
    text: string;
    value: string;
  }>;
  currentIndex: number;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
};

export const QuizOptions = ({
  options,
  currentIndex,
  answers,
  setAnswers,
}: QuizOptionsProps) => {
  return (
    <RadioGroup
      onValueChange={(value) => {
        setAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[currentIndex] = value;
          return newAnswers;
        });
      }}
    >
      {options.map((option, index) => (
        <label
          key={option.text + index}
          className={classnames(
            "flex items-center space-x-2 outline outline-1 outline-primary p-3 rounded-md text-foreground cursor-pointer",
            {
              "bg-primary text-white":
                answers[currentIndex] !== ""
                  ? answers[currentIndex].at(0) === option.value
                  : false,
            }
          )}
        >
          <RadioGroupItem
            id={option.value}
            value={option.value + " " + currentIndex}
            checked={
              answers[currentIndex] !== ""
                ? answers[currentIndex].at(0) === option.value
                : false
            }
            className={"text-white"}
          />
          <label htmlFor={option.value} className="">
            {option.text}
          </label>
        </label>
      ))}
    </RadioGroup>
  );
};
