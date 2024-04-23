import { connectToDB } from "@/lib/mongoClient";
import StudentModel from "@/models/student";

export default async function Student({ params }) {
  await connectToDB();
  const result = await StudentModel.findOne({
    _id: params.id,
  });

  return <div>{JSON.stringify(result)}</div>;
}
