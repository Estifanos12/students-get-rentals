import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Result } from "@/components/profile/result";

export default async function ResultPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/results");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-student-result?email=${session?.user.email}`,
    { cache: "no-store" }
  );

  const result = await response.json();

  return <Result result={result} />;
}
