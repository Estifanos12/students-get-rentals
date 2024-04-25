import { NextResponse } from "next/server";
import { PipelineStage } from "mongoose";

import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectToDB();

    const reqUrl = new URL(req.url);
    const query = reqUrl.searchParams.get("query");
    const preferenceType = reqUrl.searchParams
      .get("preferenceType")
      ?.split(",");

    const limit = parseInt(reqUrl.searchParams.get("limit") || "10");

    if (!query || !preferenceType) {
      return NextResponse.json({ message: "Invalid query" }, { status: 400 });
    }
    // Define the aggregation pipeline
    const pipeline: PipelineStage[] = [
      {
        $search: {
          index: "auto_complete", // Name of the Atlas Search index
          autocomplete: {
            query: query,
            path: "fullname", // Field to perform autocomplete on
          },
        },
      },
      {
        $lookup: {
          from: "preferences", // Collection name for Preference
          localField: "_id", // The key to join on
          foreignField: "userId", // The key in the Preference collection
          as: "preferenceData", // The output field for the joined data
        },
      },
      {
        $unwind: {
          path: "$preferenceData",
          preserveNullAndEmptyArrays: false, // Only keep those with preferences
        },
      },
      {
        $match: {
          "preferenceData.preference": { $in: preferenceType }, // Filter by the specific preference type
        },
      },
      {
        $limit: limit, // Apply the limit
      },
    ];

    // Execute the aggregation pipeline
    const results = await Student.aggregate(pipeline).exec();
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
