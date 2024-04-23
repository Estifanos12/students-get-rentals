import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { useStep } from "@/context/step_context";
import { cn } from "@/lib/utils";
import { JoinForm } from "./how_do_you_join";
import { ProfileForm } from "./profile_form";
import { ProfileSchema } from "@/schema";
import Navigation from "./navigation";

export const FormSection = () => {
  const { step } = useStep();
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
  });

  return (
    <div className="flex flex-col justify-between md:relative ">
      <div className="absolute top-36 w-full px-10 md:static md:mt-16  md:px-20">
        <Form {...form}>
          <form className="">
            <div className={cn("hidden", { block: step === 1 })}>
              <JoinForm />
            </div>

            <div className={cn("hidden", { block: step === 2 })}>
              <ProfileForm />
            </div>
            <div
              className={
                cn("mt-12")
                // "static mt-20"
                // { static: step === 1 },
                // { "relative bottom-0": step === 2 }
              }
            >
              <Form {...form}>
                <Navigation />
              </Form>
            </div>
          </form>
        </Form>
      </div>

      <div className="md:hidden" />
    </div>
  );
};
