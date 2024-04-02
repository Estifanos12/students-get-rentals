"use client";

import Image from "next/image";

import HeadingText from "@/components/common/heading-text";
import { StickyScroll } from "./stick_container";
import { offer } from "@/config/contents";
import { OfferMobile } from "./offer_mobile";

const content = [
  {
    title:
      "The Queue Quagmire: Students Frustration with Previous Rental Service",
    description:
      "As rental services struggle to keep up with demand, students find themselves embroiled in lengthy queues, leading to widespread dissatisfaction. This frustration isn't just about the wait; it's the feeling of being stuck in a system that seems indifferent to their time and needs. This growing discontent highlights the need for more efficient, student-friendly rental solutions that can alleviate the queue-induced angst and improve the overall rental experience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/student_queue.jpg"
          width={450}
          height={450}
          className="rounded-lg shadow-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title:
      "Rental Revolution: How Our New Services Are Winning Over Students Hearts",
    description:
      "The advent of innovative rental services has sparked a wave of enthusiasm among students, transforming their rental experiences from mundane to marvelous. With features tailored to their preferences and needs, these services are not just meeting but exceeding expectations. Students are now reveling in the convenience, affordability, and variety offered, making the once-dreaded process of renting a joyous occasion. This shift not only reflects the success of customer-centric approaches but also marks a new chapter in how rental services engage with the younger generation.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/happy_student.jpg"
          width={450}
          height={440}
          className="rounded-lg shadow-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Offer() {
  return (
    <section
      className="lg:max-w-7xl mx-auto px-3 space-y-8 py-12 lg:py-20 "
      id="offer"
    >
      {offer.header || offer.subheader ? (
        <HeadingText subtext={offer.subheader} className="text-center">
          {offer.header}
        </HeadingText>
      ) : null}

      <div className="my-16 ">
        <StickyScroll content={content} className="hidden md:flex" />
        <OfferMobile content={content} className="grid md:hidden" />
      </div>
    </section>
  );
}
