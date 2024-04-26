"use client";

import { usePreference } from "@/services/queries/usePreferences";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export const Group = ({ preference }) => {
  return (
    <div>
      <p className="">
        <strong>Preference type</strong>: Join as a{" "}
        {preference.preference === "GROUP" ? "group" : "full group"}
      </p>
      <p className="">
        <strong>No. of students</strong>: {preference.no_of_students}
      </p>
      <p className="">
        <strong>Approximate age</strong>: {preference.approximate_age}
      </p>
      <p className="">
        <strong>Group description</strong>: {preference.group_description}
      </p>
      <div className="flex items-center gap-2">
        <p className="">
          <strong>Group Identity</strong> :{" "}
        </p>
        <div className="py-2 flex flex-wrap items-center gap-5">
          {Object.keys(preference.group_identity).map((group_identity) =>
            preference.group_identity[group_identity] === true ? (
              <div
                key={group_identity}
                className="outline outline-1 outline-light bg-light dark:bg-gray-800 dark:outline-[0.5px] w-fit p-2 rounded-2xl"
              >
                <span className="text-xs text-muted-foreground font-bold">
                  {group_identity.replace("_", " ")}
                </span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export const Single = ({ preference }) => {
  return (
    <div className="space-y-3">
      <p className="">
        <strong>Preference type</strong>: Joined as a single
      </p>
      <p className="">
        <strong>Job title </strong>: {preference.job_title || "No title"}
      </p>
      <p className="">
        <strong>Moving date</strong>:{" "}
        {new Date(preference.date).toDateString() || "No date"}
      </p>
      <p className="">
        <strong>Address</strong>: {preference.address || "No address"}
      </p>
      <p className="">
        <strong>Description</strong>:{" "}
        {preference.description || "No description"}
      </p>
      <div className="flex items-center gap-2">
        <p className="">
          <strong>Identity</strong> :{" "}
        </p>
        <div className="py-2 flex flex-wrap items-center gap-5">
          {Object.keys(preference.identity).map((identity) =>
            preference.identity[identity] === true ? (
              <div
                key={identity}
                className="outline outline-1 outline-light bg-light dark:bg-gray-800 dark:outline-[0.5px] w-fit p-2 rounded-2xl"
              >
                <span className="text-xs text-muted-foreground font-bold">
                  {identity.replace("_", " ")}
                </span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export const NotRental = () => {
  return (
    <div>
      <p className="">
        <strong>Preference type</strong>: Not looking for rental
      </p>
    </div>
  );
};
export const Preferences = ({ id }) => {
  const { status } = useSession();
  const { data: preference, isLoading, isValidating } = usePreference();

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-foreground font-bold text-lg">Your Preferences</h2>
        <Link
          href={`/build_your_profile?id=${id}&task=edit&callback=profile`}
          target="_blank"
        >
          <Button
            variant={"ghost"}
            className="hover:bg-transparent flex items-center gap-2 group hover:text-primary"
          >
            <FaEdit size={20} className="" /> <span className="">Edit</span>
          </Button>
        </Link>
      </div>
      <div className="mt-7">
        {isLoading || isValidating || status === "loading" ? (
          <div className="w-full h-full grid place-content-center">
            <Image
              src={"/loading.svg"}
              alt="Loading"
              width={50}
              height={50}
              className="animate-spin"
            />
          </div>
        ) : preference ? (
          preference.preference === "SINGLE" ? (
            <Single preference={preference} />
          ) : preference.preference === "NOT_RENTAL" ? (
            <NotRental />
          ) : (
            <Group preference={preference} />
          )
        ) : (
          <div>
            <p>No preference set.</p>
          </div>
        )}
      </div>
    </>
  );
};
