import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectToDB } from "@/lib/mongoClient";
import { Preference } from "@/models/preference";

export const PUT = async (req: Request, res: Response) => {
  try {
    await connectToDB();
    const reqUrl = new URL(req.url);
    const id = reqUrl.searchParams.get("id");

    const { type, details } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    const preference = await Preference.findOneAndDelete({ userId: id });

    if (!preference) {
      return NextResponse.json(
        { message: "Preference not found" },
        { status: 400 }
      );
    }

    const PreferenceTypeModel = Preference.discriminators![type];

    const updatedPreference = new PreferenceTypeModel({
      ...details,
      userId: preference.userId,
    });

    const data = await updatedPreference.save();

    return NextResponse.json({
      message: "Preference updated successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
