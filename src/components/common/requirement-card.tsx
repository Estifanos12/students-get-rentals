import Link from "next/link";
import Image from "next/image";

import HeadingText from "@/components/common/heading-text";
import { requirements } from "@/config/contents";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Aos from "@/lib/aos";

export default function Requirements() {
  return (
    <>
      <section id="requirements">
        <div className="container px-3 lg:max-w-7xl space-y-8 py-12 text-center lg:py-20">
          {requirements.header || requirements.subheader ? (
            <>
              <HeadingText subtext={requirements.subheader}>
                {requirements.header}
              </HeadingText>
            </>
          ) : null}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 relative">
            {requirements.content.map((cards) => {
              return (
                <Card
                  key={cards.text}
                  className="flex cursor-pointer flex-grow h-full flex-col items-center justify-between gap-4 pb-3 bg-background dark:bg-gray-800 shadow-lg dark:shadow-none dark:hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#20b256,0_0_10px_#20b256,0_0_20px_#20b256] transition-shadow duration-300  border-transparent overflow-hidden"
                >
                  <div className="flex relative w-full h-[15rem]">
                    <Image
                      src={cards?.image}
                      alt={cards.text}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="space-y-2 px-5 mt-3">
                    <CardTitle className="text-lg">{cards.text}</CardTitle>
                    <CardDescription className="text-md">
                      {cards.subtext}
                    </CardDescription>
                    <CardDescription className="py-3 text-start text-md">
                      {cards.description}
                    </CardDescription>
                    <CardFooter className="flex justify-end pt-3">
                      <Link href={cards.link || "/"} target="_blank">
                        <Button className="text-white">More details</Button>
                      </Link>
                    </CardFooter>
                  </div>
                </Card>
              );
            })}

            <span className="hidden lg:block absolute -top-10 -left-10 z-[-1] animate-floating">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50"
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
            <span className="hidden lg:block absolute -bottom-10 -right-10 z-[-1] animate-floating">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50"
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
      </section>
    </>
  );
}
