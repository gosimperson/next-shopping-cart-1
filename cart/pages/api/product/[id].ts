import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface IndexS {
  [key: string]: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  try {
    const db = (await connectDB).db("sample_mflix");
    const result = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(id) });

    res.status(200).json(result);
  } catch (err) {
    console.log("_____err_____", err);
  }
}
