import { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SessionProvider, StepProvider, ThemeProvider } from "./providers";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Students Get Rentals",
  description: "platform for students to get rentals",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} flex flex-col min-h-screen  bg-background dark:bg-gray-900 text-primary  p-0 m-0`}
      >
        <SessionProvider>
          <ThemeProvider>
            <StepProvider>{children}</StepProvider>
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
