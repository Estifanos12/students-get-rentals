import { Filters } from "@/components/room_mates/filter";
import { GroupCard, SingleCard } from "@/components/room_mates/card";

import { Preference } from "@/models/preference";
import { connectToDB } from "@/lib/mongoClient";
import { Search } from "@/components/room_mates/search";

export default async function RoommatesPage({ searchParams }) {
  await connectToDB();
  const preferenceTag = searchParams.preference;

  let room_mates;

  if (preferenceTag === "SINGLE") {
    room_mates = await Preference.find({
      preference: ["SINGLE", "GROUP"],
    }).populate("userId");
  }

  if (preferenceTag === "GROUP") {
    room_mates = await Preference.find({
      preference: "SINGLE",
    }).populate("userId");
  }

  return (
    <section className="w-full px-3 h-full">
      <div className="border border-x-0 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-3 py-5  flex flex-col-reverse items-start gap-3 md:flex-row  md:items-center justify-between">
          <Filters />
          <Search />
        </div>
      </div>
      <div className="bg-light dark:bg-gray-900 min-h-[50vh] ">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-7xl mx-auto py-5 text-foreground font-bold text-xl">
            Avaliable Students
          </h1>
          <div className="pt-5 pb-28 flex flex-col gap-3 overflow-hidden">
            {room_mates ? (
              room_mates.map((room_mate) => {
                return room_mate.preference === "SINGLE" ? (
                  <SingleCard key={room_mate._id} preference={room_mate} />
                ) : (
                  <GroupCard key={room_mate._id} preference={room_mate} />
                );
              })
            ) : (
              <div className="text-center text-foreground">
                No room mates found
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
