"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import StepContextProvider from "@/context/step_context";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider defaultTheme="light" attribute="class">
      {children}
    </NextThemeProvider>
  );
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export const StepProvider = ({ children }: { children: ReactNode }) => {
  return <StepContextProvider>{children}</StepContextProvider>;
};
