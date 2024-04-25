import Link from "next/link";

import { GroupBadge, SingleBadge } from "@/app/(app)/room_mates/badge";
import { Card } from "../ui/card";
import { FaLocationDot } from "react-icons/fa6";

export const GroupCard = ({ preference }) => {
  return (
    <Link href={`/profile/${preference.userId._id}`}>
      <Card className="flex  min-h-56 w-full md:w-[90%] dark:bg-gray-800">
        <div className="flex-[3] md:flex-[1] h-full">
          <img
            className="object-cover w-full h-full rounded-l-lg"
            src={preference.userId.profile_picture || "/placeholder-img.svg"}
            alt={preference.userId.fullname}
          />
        </div>
        <div className="flex-[4]  border border-y-0 border-r-0 border-l-4 border-primary">
          <div className="p-3">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              {preference.userId.fullname}

              <GroupBadge />
            </h1>
            <p className="text-sm text-muted-foreground  inline-flex line-clamp-2 ">
              {preference.no_of_students}
              &nbsp;
              <strong>
                {parseInt(preference.no_of_students) > 1
                  ? "students"
                  : "student"}
              </strong>
            </p>{" "}
            <span
              className="size-1 rounded-full bg-primary inline-block mx-1"
              aria-label="dot"
              aria-hidden
            ></span>
            <p className="text-sm text-muted-foreground inline-flex line-clamp-2">
              {preference.approximate_age}&nbsp;
              <strong>Approximate age</strong>
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2 pt-3">
              {preference.group_description}
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
      </Card>
    </Link>
  );
};
export const SingleCard = ({ preference }) => {
  return (
    <Link href={`/profile/${preference.userId._id}`}>
      <Card className="relative flex min-h-56 w-full md:w-[90%] dark:bg-gray-800">
        <div className="flex-[3] md:flex-[1] h-full">
          <img
            className="object-cover w-full h-full rounded-l-lg"
            src={preference.userId.profile_picture || "/placeholder-img.svg"}
            alt={preference.userId.fullname}
          />
        </div>
        <div className="flex-[4]  border border-y-0 border-r-0 border-l-4 border-primary">
          <div className="p-3 space-y-1">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              {preference.userId.fullname}
              <SingleBadge />
            </h1>
            <p className="text-sm text-muted-foreground inline-flex items-center gap-1 font-semibold">
              <img src="/job.svg" alt="Job" width={15} height={15} />
              {preference.job_title || "No title"}
            </p>

            <p className="text-sm text-muted-foreground inline-flex items-center gap-1 ml-2 font-semibold">
              <FaLocationDot size={15} className="inline text-primary" />
              {preference.address || "No address"}
            </p>

            <p className="text-sm text-muted-foreground line-clamp-3">
              {preference.description || "No description"}
            </p>

            <p className="text-sm text-muted-foreground pt-3">
              <strong>Moving date</strong>:{" "}
              {new Date(preference.date).toDateString() || "No date"}
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
      </Card>
    </Link>
  );
};
