"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { toast } from "../ui/use-toast";

type FooterProps = {
  link: string;
  linkLabel: string;
  className: string;
};

export const Footer = ({ link, linkLabel, className }: FooterProps) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async (provider: string) => {
    try {
      setLoading(true);
      await signIn(provider, {
        callbackUrl: "/",
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className={cn(className)}>
      <div className="my-3">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-background dark:bg-gray-900 px-2 text-foreground">
              Or Continue With
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full shadow-md bg-white dark:bg-gray-800 dark:hover:bg-gray-800 text-white"
          variant="outline"
          onClick={() => handleLogin("google")}
          disabled={loading}
        >
          {loading ? "Loading..." : <FcGoogle className="h-5 w-5" />}
        </Button>
      </div>

      <div className="my-5 text-center w-full">
        <Link href={link} className="hover:underline">
          {linkLabel}
        </Link>
      </div>
    </div>
  );
};
