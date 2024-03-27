import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const avatar = createAvatar(initials, {
    seed: session.user.email,
    size: 40,
    radius: 50,
    backgroundColor: ["#43a047"],
  });

  const svg = avatar.toDataUriSync();

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button>
            {<Image src={svg} alt="Profile" width={40} height={40} />}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute -right-5 w-52 text-md dark:bg-gray-800 outline-none border-none">
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
