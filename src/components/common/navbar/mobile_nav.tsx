"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { mobile_nav_links } from "@/config/contents";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeSwitch } from "../theme_switch";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const MobileNav = ({ className }: { className?: string }) => {
  const [navShow, setNavShow] = useState(false);
  const { status } = useSession();

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <header className={cn(className)}>
      <div className="p-5 flex items-center justify-between">
        <Link href={"/"} className="text-lg text-foreground">
          Students Get Rentals
        </Link>
        <div className="flex items-center gap-0.5">
          <ThemeSwitch />
          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className="sm:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8 text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] overflow-auto ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            className="mr-8 mt-11 h-8 w-8"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full w-full">
          {mobile_nav_links.map((link) => (
            <div key={link.title} className="px-12 py-4">
              {link.content ? (
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100 text-start">
                    {link.title}
                    <IoIosArrowDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 pt-3">
                    {link.content.map((content) => (
                      <Link
                        key={content.title}
                        href={content.href}
                        onClick={onToggleNav}
                        className="flex items-center gap-2 ml-4"
                      >
                        {content.icon &&
                          content.icon({
                            size: 20,
                            className: "text-primary",
                          })}
                        <span className="text-foreground">{content.title}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : status === "loading" ? null : link.onClick ? (
                status === "authenticated" ? (
                  <Button
                    className="text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100 w-full text-start mt-auto"
                    onClick={() => {
                      onToggleNav();
                      link.onClick?.();
                    }}
                  >
                    {link.title}
                  </Button>
                ) : null
              ) : link.title === "Profile" ? (
                status === "authenticated" ? (
                  <Link
                    href={link.href! || ""}
                    className="text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100 w-full text-start"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ) : null
              ) : (
                <Link
                  href={link.href! || ""}
                  className="text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100 w-full text-start"
                  onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;
