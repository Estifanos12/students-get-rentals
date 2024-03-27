"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "./scroll-animation-wrapper";
import HeadingText from "@/components/common/heading-text";
import { offer } from "@/config/contents";
import { Card, CardTitle } from "../ui/card";

export default function Offer() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section
      className="lg:max-w-7xl mx-auto px-3 space-y-8 py-12 lg:py-20"
      id="offer"
    >
      {offer.header || offer.subheader ? (
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <HeadingText subtext={offer.subheader} className="text-center">
              {offer.header}
            </HeadingText>
          </motion.div>
        </ScrollAnimationWrapper>
      ) : null}

      <ScrollAnimationWrapper>
        <motion.div className="mt-16" variants={scrollAnimation}>
          <div className="flex flex-wrap items-center">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
              <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20">
                <Image
                  src="/basic-house-cleaning.webp"
                  className="w-full h-full"
                  width={500}
                  height={500}
                  alt="Offer image"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="px-6 py-12 text-center text-white md:px-12">
                      <h3 className="mb-6 text-2xl font-bold uppercase">
                        {offer.heroContent.text}
                      </h3>
                      <p className="text-white">
                        {offer.heroContent.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </div>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
              {offer.content.map((item, index) => (
                <>
                  <div className="mb-12 flex">
                    <div className="shrink-0">
                      <div className="rounded-md bg-white  dark:bg-gray-800 p-4 shadow-lg ">
                        {item.icon({
                          className: "h-6 w-6 text-gray-800 dark:text-white",
                        })}
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="mb-1 font-bold">{item.text}</p>
                      <p className="text-neutral-500 dark:text-neutral-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
}
