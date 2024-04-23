import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { Preference } from "@/models/preference";
import { connectToDB } from "@/lib/mongoClient";

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    const reqUrl = new URL(req.url);
    const id = reqUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    const data = await Preference.findOne({
      userId: id,
    });

    if (!data) {
      return NextResponse.json(
        { message: "Preference not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
