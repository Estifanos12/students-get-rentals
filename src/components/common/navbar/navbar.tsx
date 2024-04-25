"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeSwitch } from "../theme_switch";
import { UserProfile } from "../userProfile";
import { SignIn } from "../signIn";
import { nav_requirements } from "@/config/contents";
import { UserProfileSkeleton } from "@/components/skeleton/user-profile-skeleton";
// import { nav_services } from "@/config/contents";

export function NavigationBar({ className }: { className?: string }) {
  const { status } = useSession();

  return (
    <header
      className={cn(
        "w-full lg:max-w-7xl mx-auto flex items-center justify-between px-6 ",
        className
      )}
    >
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={110}
          height={110}
          alt="Student Get Rentals"
          className=""
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md text-foreground bg-transparent dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:active:bg-gray-800">
              Requirements
            </NavigationMenuTrigger>
            <NavigationMenuContent className="dark:bg-gray-800 outline-none border-none">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {nav_requirements.map((requirement) => (
                  <ListItem
                    key={requirement.title}
                    title={requirement.title}
                    href={requirement.href}
                    className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md text-md transition-colors duration-500"
                  >
                    {requirement.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md text-foreground bg-transparent dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:active:bg-gray-800">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="dark:bg-gray-800 outline-none border-none">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {nav_services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                    icon={service.icon}
                    className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md text-md transition-colors duration-500"
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem>
            <Link href="/#contacts" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md text-foreground bg-transparent dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:active:bg-gray-800"
                )}
              >
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-1">
        <ThemeSwitch />
        {status === "loading" ? (
          <UserProfileSkeleton />
        ) : status === "authenticated" ? (
          <UserProfile />
        ) : (
          <SignIn />
        )}
      </div>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, icon, ...props }: any, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href!}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
              className
            )}
            {...props}
          >
            <div className="text-sm font-semibold leading-none flex items-center gap-2">
              {icon &&
                icon({
                  size: 25,
                  className:
                    "text-primary group-hover:text-white transition-colors duration-500",
                })}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-white transition-colors duration-500">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
