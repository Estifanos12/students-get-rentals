/* eslint-disable @next/next/no-img-element */
import { GroupCard, SingleCard } from "@/components/room_mates/card";

import { Preference } from "@/models/preference";
import { connectToDB } from "@/lib/mongoClient";
import { Search } from "@/components/room_mates/search";
import { PageNav } from "@/components/room_mates/page-nav";

import { PipelineStage } from "mongoose";
const LIMIT = 10;

const buildPipeline = (search: string, preference: string[], page: number) => {
  const skip = (page - 1) * LIMIT;

  // Aggregation pipeline to get paginated preferences with a total count
  const pipeline: PipelineStage[] = [
    {
      // Match preferences with the specified type
      $match: {
        preference: { $in: preference },
      },
    },
    {
      // Join with the Student collection based on userId
      $lookup: {
        from: "students", // Collection name for Student
        localField: "userId",
        foreignField: "_id",
        as: "userId", // The new field where joined data will be stored
      },
    },
    {
      // Unwind to flatten the userId array
      $unwind: {
        path: "$userId",
        preserveNullAndEmptyArrays: false, // Remove preferences without matching students
      },
    },
    {
      // Filter based on the search query
      $match: {
        "userId.fullname": { $regex: search, $options: "i" }, // Case-insensitive
      },
    },
  ];

  // Create a copy of the pipeline to calculate the total count
  const countPipeline = [...pipeline, { $count: "totalCount" }];

  // Add pagination to the main pipeline
  pipeline.push(
    {
      $skip: skip,
    },
    {
      $limit: LIMIT,
    }
  );

  return [pipeline, countPipeline];
};

export default async function RoommatesPage({ searchParams }) {
  await connectToDB();
  const preferenceTag = searchParams.preference;
  const search = searchParams.search || "";
  const page = parseInt(searchParams.page) || 1;

  let room_mates;
  let hasPreviousSearch = false;
  let hasNextSearch = false;

  if (preferenceTag === "SINGLE") {
    const [pipeline, countPipeline] = buildPipeline(
      search,
      ["SINGLE", "GROUP"],
      page
    );

    const res = await Promise.all([
      Preference.aggregate(pipeline),
      Preference.aggregate(countPipeline),
    ]);
    room_mates = res[0];
    const count = res[1][0]?.totalCount || 0;

    hasPreviousSearch = page > 1;
    hasNextSearch = count > page * LIMIT;
  }

  if (preferenceTag === "GROUP") {
    const [pipeline, countPipeline] = buildPipeline(search, ["SINGLE"], page);

    const res = await Promise.all([
      Preference.aggregate(pipeline),
      Preference.aggregate(countPipeline),
    ]);
    room_mates = res[0];
    const count = res[1][0]?.totalCount || 0;

    hasPreviousSearch = page > 1;
    hasNextSearch = count > page * LIMIT;
  }

  return (
    <section className="w-full px-3 h-full">
      <div className="border border-x-0 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-3 py-5  flex flex-col-reverse items-start gap-3 md:flex-row  md:items-center justify-end">
          <Search />
        </div>
      </div>
      <div className="bg-light dark:bg-gray-900 min-h-[50vh] ">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-7xl mx-auto py-5 text-foreground font-bold text-xl">
            Avaliable Students
          </h1>
          {search && <p>Search result for: {search}</p>}
          <div className="pt-5 pb-28 flex flex-col gap-3 overflow-hidden">
            {room_mates.length ? (
              room_mates.map((room_mate) => {
                return room_mate.preference === "SINGLE" ? (
                  <SingleCard key={room_mate._id} preference={room_mate} />
                ) : (
                  <GroupCard key={room_mate._id} preference={room_mate} />
                );
              })
            ) : (
              <div className="h-full flex flex-col items-center justify-center gap-4">
                <img
                  src="/no-result.png"
                  alt="Not found icon"
                  className="w-[min(200px,50%)] aspect-square"
                />

                <span className="text-xl font-bold text-foreground">
                  No match found for &quot;{search}&quot;
                </span>
              </div>
            )}
          </div>
        </div>
        <PageNav
          page={page}
          hasNext={hasNextSearch}
          hasPrevious={hasPreviousSearch}
        />
      </div>
    </section>
  );
}
