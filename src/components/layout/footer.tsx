"use client";

import Link from "next/link";
import Image from "next/image";

import { navLinks, socialLinks, terms_and_policy } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="p-4 bg-transparent ">
      <div className="mx-auto max-w-screen-xl">
        <hr className="mb-6 border-foreground opacity-50" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              {/* <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-8"
                width={32}
                height={32}
                alt="Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-foreground">
                Students Get Rentals
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-foreground">
                {navLinks.map((link) => {
                  if (link.path) {
                    return (
                      <li
                        className="mb-4 opacity-70 hover:opacity-100 hover:underline"
                        key={link.route}
                      >
                        <Link href={link.path as string}>{link.route}</Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase ">
                Follow us
              </h2>
              <ul className="text-foreground">
                {socialLinks.map((link) => (
                  <li
                    className="mb-4 opacity-70 hover:opacity-100 hover:underline"
                    key={link.path}
                  >
                    <Link href={link.path as string}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">
                Legal
              </h2>
              <ul className="text-foreground">
                {terms_and_policy.map((link) => (
                  <li
                    className="mb-4 opacity-70 hover:opacity-100 hover:underline"
                    key={link.name}
                  >
                    <Link href={link.path as string}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 opacity-50 sm:mx-auto border-foreground lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-foreground sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Students Get Rentals
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
