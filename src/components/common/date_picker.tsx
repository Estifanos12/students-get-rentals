"use client";

import * as React from "react";
import { format } from "date-fns";
import { FaCalendar } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ form }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !form.watch("data") && "text-muted-foreground"
          )}
        >
          <FaCalendar className="mr-2 h-4 w-4 text-primary" />
          {form.watch("date") ? (
            format(form.watch("date"), "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={form.watch("date")}
          onSelect={(date) => {
            form.setValue("date", date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
