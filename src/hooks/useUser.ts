"use client";

import { useContext } from "react";

import { UserContext, UserContextType } from "@/context/user_context";

export const useUser = () => {
  const context = useContext<UserContextType>(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
