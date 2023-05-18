import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

interface IndexS {
  [key: string]: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IndexS>
) {
  try {
    const db = (await connectDB).db("sample_mflix");
    const result = await db.collection("movies").find().limit(10).toArray();
    res.status(200).json(result);
  } catch (err) {
    console.log("_____err_____", err);
  }
}
