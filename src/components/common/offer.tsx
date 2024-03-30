"use client";

import Image from "next/image";

import HeadingText from "@/components/common/heading-text";
import { StickyScroll } from "./stick_container";
import { offer } from "@/config/contents";

const content = [
  {
    title: "Enhanced Accessibility and Affordability",
    description:
      "Rental services have made it easier for students to find accommodations that fit their budget and preferences. By offering a wide range of options—from shared apartments to single rooms—these platforms ensure that students can secure housing that doesn't break the bank, thereby reducing the financial burden of higher education.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/affordable.jpg"
          width={450}
          height={450}
          className="rounded-lg shadow-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Increased Mobility and International Opportunities",
    description:
      "For students studying abroad or participating in exchange programs, these rental services have simplified the process of finding accommodations in foreign countries. By offering rooms in multiple cities and countries, these platforms facilitate mobility and open up new educational and cultural experiences for students.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mobility.jpg"
          width={450}
          height={440}
          className="w-[450px] h-[450px] rounded-lg shadow-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Community and Support Services",
    description:
      "Many student room rental services go beyond just providing a place to stay; they foster a sense of community among residents through organized events and social spaces. Additionally, some services offer support in the form of academic resources, mental health counseling, and career guidance, contributing to the overall well-being and success of students.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/community.jpg"
          width={450}
          height={450}
          className="rounded-lg shadow-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Flexibility in Lease Terms",
    description:
      "Traditional rental agreements often locked students into long-term commitments that were not always aligned with their academic calendars. Modern rental services offer more flexible lease terms, allowing students to rent rooms for shorter durations—such as a semester or an academic year—thereby providing accommodations that better suit their transient lifestyles.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/agreement.jpg"
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
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
