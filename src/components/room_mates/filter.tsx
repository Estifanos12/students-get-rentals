"use client";

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

const filters = [
  {
    name: "LGBTQ+ Friendly",
    id: "lgbt_friendly",
  },
  {
    name: "Pet Friendly",
    id: "pet_friendly",
  },
  {
    name: "Student Friendly",
    id: "student_friendly",
  },
  {
    name: "Children Friendly",
    id: "children_friendly",
  },
  {
    name: "Elderly Friendly",
    id: "elderly_friendly",
  },
  {
    name: "Disabled Friendly",
    id: "disabled_friendly",
  },
];

export function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ">
      <Popover onOpenChange={(value) => setIsOpen(value)}>
        <PopoverTrigger asChild className="">
          <Button className="w-max flex items-center gap-3" variant={"outline"}>
            <span>Filters</span>
            <MdKeyboardArrowDown
              className={cn("w-4 h-4", {
                "transform rotate-180": isOpen,
                "transform rotate-0": !isOpen,
              })}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" absolute -left-12 w-80 md:w-[600px] dark:bg-gray-800">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Gender Identity</h4>
              <p className="text-sm text-muted-foreground">
                Filter based on your prefered gender identity.
              </p>

              <div className="py-4 space-y-3">
                {filters.map((filter) => (
                  <div className="flex items-center gap-2" key={filter.id}>
                    <Checkbox id={filter.id} />
                    <Label htmlFor={filter.id}>{filter.name}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
