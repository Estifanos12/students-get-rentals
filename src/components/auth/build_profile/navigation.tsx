import { useSearchParams, useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import z from "zod";

import { useStep } from "@/context/step_context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProfileSchema } from "@/schema";
import { apiRequest } from "@/services/api/apiRequest";

import { useToast } from "@/components/ui/use-toast";

const Navigation = () => {
  const { step, setStep } = useStep();
  const router = useRouter();
  const form = useFormContext<z.infer<typeof ProfileSchema>>();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const userId = searchParams?.get("id");
  const callback = searchParams?.get("callback");
  const task = searchParams?.get("task");

  async function onSubmit(data) {
    let body;

    if (data.join === "GROUP" || data.join === "FULL_GROUP") {
      body = {
        type: data.join,
        details: {
          group_description: data.group_description,
          no_of_students: data.no_of_students,
          approximate_age: data.aprx_age,
          group_identity: {
            LGBT_friendly: data.LGBT_friendly,
            Pet_friendly: data.Pet_friendly,
            Student_friendly: data.Student_friendly,
            Children_friendly: data.Children_friendly,
            Elderly_friendly: data.Elderly_friendly,
            Disabled_friendly: data.Disabled_friendly,
          },
        },
      };
    }

    if (data.join === "SINGLE") {
      body = {
        type: data.join,
        details: {
          job_title: data.job_title,
          date: data.date,
          address: data.address,
          description: data.description,
          identity: {
            LGBT_friendly: data.LGBT_friendly,
            Pet_friendly: data.Pet_friendly,
            Student_friendly: data.Student_friendly,
            Children_friendly: data.Children_friendly,
            Elderly_friendly: data.Elderly_friendly,
            Disabled_friendly: data.Disabled_friendly,
          },
        },
      };
    }

    if (data.join === "NOT_RENTAL") {
      body = {
        type: data.join,
        details: {},
      };
    }

    try {
      if (callback === "profile" && task === "edit") {
        await apiRequest({
          method: "PUT",
          data: body,
          endpoint: `api/update_preference?id=${userId}`,
        });
        router.replace("/build_your_profile/profile_updated");
      } else {
        await apiRequest({
          method: "POST",
          data: body,
          endpoint: `api/create_preferences?id=${userId}`,
        });
        router.replace("/build_your_profile/profile_build");
      }
    } catch (error) {
      toast({
        title: "Cannot create your profile",
        variant: "destructive",
      });
    }
  }

  const onInvalid = (errors) => console.error(errors);

  async function handleNextStep() {
    if (step === 1) {
      const result = await form.trigger("join", {
        shouldFocus: true,
      });

      if (!result) {
        form.setError("join", {
          message: "You have to select on option to continue",
        });

        return;
      }
      setStep(2);
    }
  }

  function handleBackStep() {
    if (step <= 1) {
      return;
    }
    const currentStep = step;
    setStep(currentStep - 1);
  }

  return (
    <div
      className={cn(
        "container flex items-center justify-between bg-transparent text-foreground py-5",
        { hidden: form.formState.isSubmitSuccessful }
      )}
    >
      <div className={cn("hidden", { block: step === 1 })} />

      <Button
        type="button"
        className={cn("block", { hidden: step === 1 })}
        onClick={handleBackStep}
        variant="outline"
      >
        Go Back
      </Button>

      <Button
        type="button"
        className={cn("block ", {
          hidden: step === 2 || form.getValues("join") === "NOT_RENTAL",
        })}
        onClick={handleNextStep}
      >
        Continue
      </Button>

      <Button
        type="submit"
        className={cn("hidden", {
          block: step === 2 || form.getValues("join") === "NOT_RENTAL",
        })}
        onClick={form.handleSubmit(onSubmit, onInvalid)}
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Submitting" : "Confirm"}
      </Button>
    </div>
  );
};

export default Navigation;
