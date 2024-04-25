import { NextResponse } from "next/server";
import { redirect, RedirectType } from "next/navigation";

import { connectToDB } from "@/lib/mongoClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import Student from "@/models/student";
import { Preference } from "@/models/preference";

export const GET = async (req: Request, res: Response) => {
  let redirectURL = "/";
  try {
    await connectToDB();

    const session = await getServerSession(authOptions);
    if (session) {
      const { email } = session.user;
      const student = await Student.findOne({ email });
      const pref = await Preference.findOne({ userId: student._id });

      if (!pref) {
        redirectURL = `/build_your_profile?id=${student._id}&callback=provider-login`;
      }
    }
  } catch (err) {
    console.log(err);
  }
  redirect(redirectURL, RedirectType.replace);
};
