"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { cta } from "@/config/contents";
import { Button } from "../ui/button";
import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "./scroll-animation-wrapper";

export default function CTA() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.section
        className="lg:max-w-6xl mx-auto px-3 space-y-8 py-12 lg:py-20 "
        variants={scrollAnimation}
      >
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-green-700 to-[#22c55e] flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-3xl text-white font-semibold mb-5 lg:mb-2">
              {cta.header}
            </h2>
            <p className="text-lg text-indigo-100">{cta.description}</p>
          </div>
          <Link href={cta.button.link}>
            <Button className="flex items-center gap-2 p-6 rounded-full bg-white text-black hover:text-black hover:bg-white hover:scale-x-105 transition-all duration-300">
              <span>{cta.button.text}</span>
              <FaArrowRight width="19" height="14" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </ScrollAnimationWrapper>
  );
}
