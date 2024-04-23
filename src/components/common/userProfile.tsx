import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useUser } from "@/hooks/useUser";

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

  const user = useUser();

  if (status === "loading") {
    return null;
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:border-primary focus:outline-primary">
          {user && user.value && user.value.profile_picture ? (
            <div className="w-[45px]  aspect-square overflow-hidden rounded-full p-1 group outline outline-2 outline-slate-300 hover:outline-primary transition-[outline-color] duration-300">
              <img
                src={user.value.profile_picture}
                alt={session.user.fullname}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          ) : (
            <InitialsAvatar name={session.user.fullname || "Not Avaliable"} />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute -right-5 w-64 text-md dark:bg-gray-800 outline-none border-none">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary" />
          <Link href="/profile">
            <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md">
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href="/courses" target="_blank">
            <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md">
              My courses
            </DropdownMenuItem>
          </Link>
          <Link href="/profile/results">
            <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md">
              My results
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
