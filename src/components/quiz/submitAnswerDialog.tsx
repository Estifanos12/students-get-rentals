import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

type SubmitAnswerDialogProps = {
  loading: boolean;
  onAccept: () => void;
  className?: string;
  modal: boolean;
  showModal: (value: boolean) => void;
};

export const SubmitAnswerDialog = ({
  loading,
  onAccept,
  className,
  modal,
  showModal,
}: SubmitAnswerDialogProps) => {
  return (
    <div className={className}>
      <Dialog open={modal}>
        <DialogTrigger>
          <Button onClick={() => showModal(true)}>Submit</Button>
        </DialogTrigger>
        <DialogContent className={"flex flex-col gap-10"}>
          <DialogHeader>
            <DialogTitle>Are you sure to send your answers ?</DialogTitle>
            <DialogDescription>
              Once you submit your answers, you can not change them.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button disabled={loading} onClick={onAccept}>
              {loading ? "Submitting ... " : "Accept"}
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => showModal(false)}
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
