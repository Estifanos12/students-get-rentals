"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ContactFormSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";

export const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="p-7 dark:bg-transparent border-none outline outline-[1px] outline-primary">
      <CardTitle className="mb-4 text-lg md:text-xl text-foreground">
        Get in touch.
      </CardTitle>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full gap-7"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start">
                <FormLabel className="text-md">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start">
                <FormLabel className="text-md">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start">
                <FormLabel className="text-md">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    {...field}
                    minLength={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5">
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
};
