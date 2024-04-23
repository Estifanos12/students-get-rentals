import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { Preference } from "@/models/preference";
import { connectToDB } from "@/lib/mongoClient";

export const DELETE = async (req: Request) => {
  try {
    await connectToDB();
    const reqUrl = new URL(req.url);
    const id = reqUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Id and Type is required" },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    const data = await Preference.findOneAndDelete({
      _id: id,
    });

    if (!data) {
      return NextResponse.json(
        { message: "Preference not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Preference deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
