import Link from "next/link";

import { GroupBadge, SingleBadge } from "@/app/(app)/room_mates/badge";
import { Card } from "../ui/card";

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
            <p className="text-sm text-muted-foreground line-clamp-2">
              <strong>No. of students</strong>: {preference.no_of_students}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              <strong>Approximate age</strong>: {preference.approximate_age}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              <strong>Group description</strong>: {preference.group_description}
            </p>

            <div className="py-2 flex flex-wrap items-center gap-5">
              {Object.keys(preference.group_identity.toObject()).map(
                (group_identity) =>
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
            <p className="text-sm text-muted-foreground">
              <strong>Job title </strong>: {preference.job_title || "No title"}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Moving date</strong>:{" "}
              {new Date(preference.date).toDateString() || "No date"}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Address</strong>: {preference.address || "No address"}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              <strong>Description</strong>:{" "}
              {preference.description || "No description"}
            </p>

            <div className="py-2 flex flex-wrap items-center gap-5">
              {Object.keys(preference.identity.toObject()).map((identity) =>
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
