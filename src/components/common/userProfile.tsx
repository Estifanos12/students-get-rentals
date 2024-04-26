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
import { useUser } from "@/services/queries/useUser";
import { UserProfileSkeleton } from "../skeleton/user-profile-skeleton";

export const UserProfile = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/profile");
    },
  });

  const {
    data: user,
    isLoading,
    isValidating,
  } = useUser(session?.user?.email as string);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:border-primary focus:outline-primary">
          {isLoading || isValidating ? (
            <UserProfileSkeleton />
          ) : user ? (
            <div className="w-[45px]  aspect-square overflow-hidden rounded-full p-1 group outline outline-2 outline-slate-300 hover:outline-primary transition-[outline-color] duration-300">
              <img
                src={user?.profile_picture}
                alt={user?.fullname}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          ) : (
            <InitialsAvatar name={user?.fullname || "Not Avaliable"} />
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
