import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/components/profile/profile";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/get-student?email=${session.user.email}`,
    {
      next: {
        tags: ["profile"],
      },
    }
  );

  const userData = await response.json();

  return <Profile data={userData} />;
}
