"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export function PageNav({ page, hasNext, hasPrevious }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex items-center justify-center gap-3 max-w-7xl mx-auto py-6 ">
      <Link
        className={cn(
          buttonVariants({ variant: "link" }),
          "p-2 w-max h-max text-foreground bg-[#e7e9eb]  rounded-[50%] dark:bg-gray-800",
          {
            "hocus:bg-primary hocus:text-white dark:hocus:bg-primary dark:hocus:text-white":
              hasPrevious,
            "pointer-events-none cursor-default opacity-50": !hasPrevious,
          }
        )}
        href={pathname + "?" + createQueryString("page", `${page - 1}`)}
      >
        <MdNavigateBefore size={30} />
      </Link>
      <Link
        className={cn(
          buttonVariants({ variant: "link" }),
          "p-2 w-max h-max rounded-[50%] text-foreground bg-[#e7e9eb] dark:bg-gray-800",
          {
            "hocus:bg-primary hocus:text-white dark:hocus:bg-primary dark:hocus:text-white":
              hasNext,
            "pointer-events-none cursor-default opacity-50": !hasNext,
          }
        )}
        href={pathname + "?" + createQueryString("page", `${page + 1}`)}
      >
        <MdNavigateNext size={30} />
      </Link>
    </div>
  );
}
