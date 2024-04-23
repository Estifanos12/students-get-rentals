"use server";

import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";

export const run = async (query) => {
  try {
    await connectToDB();

    const agg = [
      {
        $search: {
          index: "auto_complete",
          autocomplete: { query: query, path: "fullname" },
        },
      },
      { $limit: 20 },
      { $project: { _id: 1, fullname: 1 } },
    ];
    const result = await Student.aggregate(agg);
    return result;
  } catch (e) {
    console.error(e);
  }
};
