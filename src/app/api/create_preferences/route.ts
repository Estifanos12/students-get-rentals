import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { Preference } from "@/models/preference";
import { connectToDB } from "@/lib/mongoClient";

export const POST = async (req: Request, res: Response) => {
  try {
    await connectToDB();

    const reqUrl = new URL(req.url);
    const userId = reqUrl.searchParams.get("id");

    if (!userId) {
      return NextResponse.json(
        { message: "User id is required" },
        { status: 400 }
      );
    }

    const { type, details } = await req.json();

    if (!type) {
      return NextResponse.json(
        { message: "Preference type is required" },
        { status: 500 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    const PreferenceTypeModel = Preference.discriminators![type];

    if (!PreferenceTypeModel) {
      return NextResponse.json(
        { message: "Invalid preference type" },
        { status: 400 }
      );
    }

    const preference = new PreferenceTypeModel({
      ...details,
      userId,
    });

    const data = await preference.save();
    return NextResponse.json({
      message: "Preference created successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
