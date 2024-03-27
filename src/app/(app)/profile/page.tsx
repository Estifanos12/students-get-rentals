import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { getUserInfo } from "@/lib/getUserInfo";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Profile } from "@/components/profile/profile";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const userData = await getUserInfo(session?.user.email);

  return (
    <div>
      <Profile data={userData} />
    </div>
  );
}
