import { useStep } from "@/context/step_context";
import { cn } from "@/lib/utils";

export const StepIndicator = ({ id }: { id: number }) => {
  const { step } = useStep();
  return (
    <>
      <button
        className={cn(
          "size-10 cursor-default rounded-full  bg-transparent font-semibold text-white",
          { "bg-primary text-white ": step === id }
        )}
      >
        {id}
      </button>
    </>
  );
};
