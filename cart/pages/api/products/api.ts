import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

interface IndexS {
  [key: string]: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IndexS>
) {
  const db = (await connectDB).db("sample_mflix");
  const result = await db.collection("movies").find().toArray();
  console.log("______result______", result);
}
