import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

type ShowQuizResultProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  result: number;
  setResult?: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  quiz: any;
};

export const ShowQuizResult = ({
  quiz,
  open,
  result,
  className,
  setOpen,
}: ShowQuizResultProps) => {
  const router = useRouter();
  return (
    <div className={className}>
      <Dialog
        open={open}
        onOpenChange={(open) => {
          if (!open) {
            router.replace("/profile/results");
          }
        }}
      >
        <DialogContent className={"flex flex-col gap-10"}>
          <DialogHeader>
            <DialogTitle className="text-lg">Quiz Result</DialogTitle>
            <DialogDescription className="text-md">
              Thank you for taking the quiz. You got {result} / {quiz?.length} -{" "}
              {((result / quiz?.length) * 100).toFixed(2)}% correct.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col">
            <div>
              <i className="">
                <strong>*NB. </strong>You will be redirected to result page
                after closing this dialog.
              </i>
            </div>
            <DialogClose asChild>
              <Button type="button" variant={"secondary"}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
