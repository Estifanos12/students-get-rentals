import z from "zod";
import { useFormContext } from "react-hook-form";

import {
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { ProfileSchema } from "@/schema";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/common/date_picker";
import { Textarea } from "@/components/ui/textarea";

const group_identity = [
  "LGBT_friendly",
  "Pet_friendly",
  "Student_friendly",
  "Children_friendly",
  "Elderly_friendly",
  "Disabled_friendly",
];

const GroupForm = ({ form }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="group_description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Group description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Describe your group ..."
                rows={6}
              />
            </FormControl>
            <FormDescription>
              Describe your group, what you are looking for, and what you are
              like
            </FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="no_of_students"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Number of students</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Number of students"
                min={1}
              />
            </FormControl>
            <FormDescription>
              The number of students in your group
            </FormDescription>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="aprx_age"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">
              Approximate age of students
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Approximate age of students"
                min={1}
              />
            </FormControl>
            <FormDescription>
              The approximate age of students in your group
            </FormDescription>

            <FormMessage />
          </FormItem>
        )}
      />

      <div>
        <FormLabel className="text-base">Group Identity</FormLabel>
        <div className="flex flex-col  gap-2 my-2">
          {group_identity.map((identity) => (
            <div key={identity} className="flex items-center gap-2">
              <Checkbox
                id={identity}
                onCheckedChange={(value) => form.setValue(`${identity}`, value)}
              />
              <label htmlFor={identity} className="text-sm">
                {identity.replace("_", " ")}
              </label>
            </div>
          ))}
        </div>

        <FormDescription>
          Select the identities that your group is friendly to
        </FormDescription>
      </div>
    </>
  );
};

const SingleForm = ({ form }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <FormLabel className="text-base">Pick your moving date</FormLabel>
        <DatePicker form={form} />
        <FormDescription>
          Select the date you are planning to move
        </FormDescription>
      </div>
      <FormField
        control={form.control}
        name="job_title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Job title</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Enter your job title ..."
              />
            </FormControl>
            <FormDescription>
              Enter your job title that describe you the most
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Address</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Enter your address ..."
              />
            </FormControl>
            <FormDescription>
              Enter your address where you are currently living
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Describe yourself ..."
                rows={6}
              />
            </FormControl>
            <FormDescription>
              Describe yourself, what you are looking for, and what you are like
            </FormDescription>
          </FormItem>
        )}
      />

      <div>
        <FormLabel className="text-base">Group Identity</FormLabel>
        <div className="flex flex-col  gap-2 my-2">
          {group_identity.map((identity) => (
            <div key={identity} className="flex items-center gap-2">
              <Checkbox
                id={identity}
                onCheckedChange={(value) => form.setValue(`${identity}`, value)}
              />
              <label htmlFor={identity} className="text-sm">
                {identity.replace("_", " ")}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export const ProfileForm = () => {
  const form = useFormContext<z.infer<typeof ProfileSchema>>();

  return (
    <Card className="bg-background dark:bg-gray-800 border-none outline-none">
      <CardHeader>
        <CardTitle className="text-foreground text-lg font-bold">
          Fill your profile
        </CardTitle>
        <CardDescription>
          Fill your profile to help us find the best match for you
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {form.getValues("join") === "GROUP" ? (
          <GroupForm form={form} />
        ) : form.getValues("join") === "SINGLE" ? (
          <SingleForm form={form} />
        ) : form.getValues("join") === "FULL_GROUP" ? (
          <GroupForm form={form} />
        ) : null}
      </CardContent>
    </Card>
  );
};
