import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InitialsAvatar } from "./initials_avatar";

export const UserProfile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/profile");
    },
  });

  if (status === "loading") {
    return null;
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:border-primary focus:outline-primary">
          <button>
            <InitialsAvatar name={session.user.fullname} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute -right-5 w-64 text-md dark:bg-gray-800 outline-none border-none">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary" />
          <Link href="/profile" target="_blank">
            <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md">
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href="/courses" target="_blank">
            <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md">
              My courses
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            onClick={() => signOut()}
            className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
