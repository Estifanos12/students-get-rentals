"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "./scroll-animation-wrapper";
import HeadingText from "@/components/common/heading-text";
import { services } from "@/config/contents";
import { Card, CardTitle } from "../ui/card";

export default function Services() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section
      className="lg:max-w-7xl mx-auto px-3 space-y-8 py-12 lg:py-20"
      id="services"
    >
      {services.header || services.subheader ? (
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <HeadingText subtext={services.subheader} className="text-center">
              {services.header}
            </HeadingText>
          </motion.div>
        </ScrollAnimationWrapper>
      ) : null}

      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={scrollAnimation}
        >
          {services.content.map((service) => (
            <div key={service.text}>
              <Link href={service.link as string} target="_blank">
                <Card className="p-10 flex flex-col justify-center items-center gap-5 bg-background dark:bg-gray-800 outline-none border-none group hover:bg-primary dark:hover:bg-primary cursor-pointer transition-colors duration-500 h-full">
                  <div>
                    {service.icon({
                      size: 50,
                      className:
                        "text-primary group-hover:text-white transition-colors duration-500",
                    })}
                  </div>
                  <CardTitle className="text-foreground text-lg  group-hover:text-white font-normal transition-colors duration-500">
                    {service.text}
                  </CardTitle>
                </Card>
              </Link>
            </div>
          ))}
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
}
