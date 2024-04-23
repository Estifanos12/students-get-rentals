"use client";

import { useSession } from "next-auth/react";
import { createContext, useState, useEffect, useCallback } from "react";

export type UserContextType = {
  value: any;
  refetch: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

const UserProvider = ({ children }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  const fetchStudent = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/get-student?email=${
          session!.user.email
        }`
      );

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  }, [session]);

  useEffect(() => {
    if (!session) {
      return;
    }
    fetchStudent();
  }, [session]);

  const refetch = () => {
    fetchStudent();
  };

  return (
    <UserContext.Provider
      value={{
        value: user,
        refetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
