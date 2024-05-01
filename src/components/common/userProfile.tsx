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
    error,
  } = useUser(session?.user?.email as string);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:border-primary focus:outline-primary">
          {isLoading || isValidating || error ? (
            <UserProfileSkeleton />
          ) : (
            <InitialsAvatar
              name={user.fullname || "Not Avaliable"}
              profile={user.profile_picture}
            />
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
