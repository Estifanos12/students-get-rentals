import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroHeader } from "@/config/contents";

export default function HeroHeader() {
  return (
    <div className="min-h-[calc(100vh-72px)] grid place-items-center">
      <section className="lg:max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse md:justify-end gap-4 pb-12 pt-4 px-2 text-center lg:items-center lg:gap-10 lg:py-20">
        <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold lg:text-5xl">
              {heroHeader.header}
            </h1>
            <h2 className="text-lg font-light text-foreground lg:text-2xl">
              {heroHeader.subheader}
            </h2>
            <p className="text-md lg:text-lg font-light text-foreground">
              {heroHeader.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={"/"}
              target="_blank"
              className="shadow-2xl p-3 rounded-md flex items-center gap-2 hover:bg-primary group transition-all duration-500"
            >
              <span className="text-foreground group-hover:text-white transition-colors duration-500">
                Review us on{" "}
              </span>
              <Image
                src="/google.svg"
                width={20}
                height={20}
                alt="Google"
                className="inline"
              />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="shadow-2xl p-3 rounded-md flex items-center gap-2 hover:bg-primary group transition-all duration-500"
            >
              <span className="text-foreground group-hover:text-white transition-colors duration-500">
                Review us on
              </span>
              <Image
                src="/facebook.svg"
                width={20}
                height={20}
                alt="Google"
                className="inline"
              />
            </Link>
          </div>
          <Link
            href="/courses"
            target="_blank"
            className={`w-[10rem] text-white ${cn(
              buttonVariants({ size: "lg" })
            )}`}
          >
            Start learning
          </Link>
        </div>
        {heroHeader.image !== "" ? (
          <div className="flex flex-1 justify-center lg:justify-start ">
            <div className="relative">
              <Image
                src={heroHeader.image}
                width={500}
                height={500}
                alt="Header image"
                // className='shadow-2xl border-transparent rounded-xl '
              />

              <span className="hidden md:block absolute top-0 -right-8 z-[-1] animate-floating">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#2dac5c" />
                </svg>
              </span>
              <span className="hidden md:block absolute -bottom-8 -left-8 z-[-1] animate-floating">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#2dac5c" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#2dac5c" />
                </svg>
              </span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
