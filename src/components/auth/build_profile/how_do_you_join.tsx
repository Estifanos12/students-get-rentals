import z from "zod";
import { useFormContext } from "react-hook-form";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { ProfileSchema } from "@/schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export const JoinForm = () => {
  const form = useFormContext<z.infer<typeof ProfileSchema>>();

  return (
    <Card className="bg-background dark:bg-gray-800 border-none outline-none">
      <CardHeader>
        <CardTitle className="text-foreground text-lg font-bold">
          How do you wanna join us ?
        </CardTitle>
        <CardDescription>
          Choose the option that best describes how you want to join us
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <RadioGroup
          onValueChange={(value) => {
            form.setValue("join", value);
          }}
        >
          <label>
            <RadioGroupItem
              value="GROUP"
              checked={form.watch("join") === "GROUP"}
              className="hidden"
            />

            <div
              className={cn(
                "hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 ",
                {
                  "border-primary": form.watch("join") === "GROUP",
                }
              )}
            >
              <span className="font-medium text-foreground text-lg">
                I am looking for other roomies to fill out my group ?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={cn("w-9 h-9 text-primary invisible", {
                  visible: form.watch("join") === "GROUP",
                })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </label>

          <label>
            <RadioGroupItem
              value="SINGLE"
              checked={form.watch("join") === "SINGLE"}
              className="hidden"
            />

            <div
              className={cn(
                "hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 ",
                {
                  "border-primary": form.watch("join") === "SINGLE",
                }
              )}
            >
              <span className="font-medium text-foreground text-lg">
                I am single, I looking to form a group with other roomies or
                other single roomie.
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={cn("w-9 h-9 text-primary invisible", {
                  visible: form.watch("join") === "SINGLE",
                })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </label>

          <label>
            <RadioGroupItem
              value="FULL_GROUP"
              checked={form.watch("join") === "FULL_GROUP"}
              className="hidden"
            />

            <div
              className={cn(
                "hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 ",
                {
                  "border-primary": form.watch("join") === "FULL_GROUP",
                }
              )}
            >
              <h2 className="font-medium text-foreground text-lg">
                We are a group of roomies all full, we do not want any other.
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={cn("w-9 h-9 text-primary invisible", {
                  visible: form.watch("join") === "FULL_GROUP",
                })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </label>

          <label>
            <RadioGroupItem
              value="NOT_RENTAL"
              checked={form.watch("join") === "NOT_RENTAL"}
              className="hidden"
            />

            <div
              className={cn(
                "hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 ",
                {
                  "border-primary": form.watch("join") === "NOT_RENTAL",
                }
              )}
            >
              <span className="font-medium text-foreground text-lg">
                I am not looking for rental help, I am only here to do the
                courses
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={cn("w-9 h-9 text-primary invisible", {
                  visible: form.watch("join") === "NOT_RENTAL",
                })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </label>
        </RadioGroup>

        {form.formState.errors.join && (
          <div className="pt-6">
            <span className="text-red-500 font-bold ">
              {form.formState.errors.join.message}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
