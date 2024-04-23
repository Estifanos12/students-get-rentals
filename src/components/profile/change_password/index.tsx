"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { TChangePassword } from "@/types";
import { changePasswordSchema } from "@/schema";
import { changePassword } from "@/actions/change_password";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export const ChangePassword = ({ id }) => {
  const form = useForm<TChangePassword>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data) => {
    const response = await changePassword({ ...data, id });
    if (response.status === "error") {
      return toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }

    toast({
      title: "Success",
      description: response.message,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <h2 className="text-foreground font-bold text-lg">
        Change your password
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-7">
        <FormField
          control={form.control}
          name="old_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Old password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your previous password"
                  className="max-w-md"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                If you don&#39;t remember your password, you can reset it in
                <Link href={"/login"} className="hover:underline italic">
                  {" "}
                  login page.
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">New password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your new password"
                  className="max-w-md"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Confirm password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  className="max-w-md"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Changing..." : "Change"}
        </Button>
      </form>
    </Form>
  );
};
