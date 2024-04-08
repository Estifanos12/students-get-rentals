import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

import { Button } from "../ui/button";
import { Tooltip } from "./tooltip";

export const Logout = () => {
  const pathname = usePathname();
  return (
    <Tooltip text={"Logout"}>
      <Button
        onClick={() => signOut({ callbackUrl: pathname as string })}
        className="text-white"
      >
        <MdLogout className="h-4 w-4 hidden md:block" />
        <span className="md:hidden">Logout</span>
      </Button>
    </Tooltip>
  );
};
