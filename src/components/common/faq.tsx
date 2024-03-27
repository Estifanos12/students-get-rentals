"use clien";

import { faq } from "@/config/contents";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import HeadingText from "./heading-text";

export default function FAQ() {
  return (
    <section className="lg:max-w-5xl mx-auto px-3 space-y-8 py-12 mb-20 lg:py-20">
      {faq.header || faq.subheader ? (
        <HeadingText subtext={faq.subheader} className="text-center">
          {faq.header}
        </HeadingText>
      ) : null}

      <div>
        {faq.faq.map((item, index) => (
          <Accordion key={item.question} type="single">
            <AccordionItem
              value={"item" + (index + 1)}
              className="border-foreground border-b-[0.5px]"
            >
              <AccordionTrigger className="text-lg text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-md text-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
