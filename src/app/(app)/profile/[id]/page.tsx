import { Profile } from "@/components/profile/users_profile/profile";
import { connectToDB } from "@/lib/mongoClient";
import Student from "@/models/student";

export default async function UserProfile({ params }) {
  await connectToDB();

  const userData = await Student.findById(params.id);

  return (
    <div>
      <Profile data={userData} />
    </div>
  );
}
