"use client";

import Link from "next/link";
import Image from "next/image";

import { contact } from "@/config/contents";
import HeadingText from "./heading-text";
import { ContactForm } from "./contact-form";
import { Tooltip } from "./tooltip";

export default function Contact() {
  return (
    <section id="contacts">
      <div className="container px-3 lg:max-w-7xl space-y-8 py-16 text-center lg:py-20">
        {contact.header || contact.subheader ? (
          <HeadingText subtext={contact.subheader}>
            {contact.header}
          </HeadingText>
        ) : null}

        <div className="flex flex-col md:flex-row gap-10 mt-5">
          <div className="flex-[3] flex flex-col text-foreground">
            <p className="text-lg text-start ">{contact.description}</p>

            <div className="flex flex-col gap-7 mt-7">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  {contact.call.icon({
                    size: 18,
                    className: "text-primary",
                  })}
                  <h3 className="font-semibold text-primary text-lg">
                    {contact.call.title}
                  </h3>
                </div>

                <div className="ml-7 text-sm">
                  <p className="opacity-90 text-start">
                    {contact.call.phone_number}
                  </p>
                  <p>{contact.call.email}</p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  {contact.business_hour.icon({
                    size: 18,
                    className: "text-primary",
                  })}
                  <h3 className="font-semibold text-primary text-lg">
                    {contact.business_hour.title}
                  </h3>
                </div>
                <div className="ml-7">
                  <p className="opacity-90 text-start text-sm">
                    {contact.business_hour.date}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  {contact.address.icon({
                    size: 18,
                    className: "text-primary",
                  })}
                  <h3 className="font-semibold text-primary text-lg">
                    {contact.address.title}
                  </h3>
                </div>
                <div className="ml-7 text-sm">
                  <p className="text-start">{contact.address.street}</p>
                  <p>{contact.address.country}</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-3">
                {contact.socials.map((social) => (
                  <Link href={social.link} key={social.name} target="_blank">
                    <Tooltip text={social.name}>
                      <Image
                        src={social.iconUrl}
                        alt={social.name}
                        width={30}
                        height={30}
                      />
                    </Tooltip>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
