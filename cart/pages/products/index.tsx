import { connectDB } from "@/utils/database";
import Product from "../../components/Product";

export default async function Products() {
  const db = (await connectDB).db("sample_mflix");
  const res = await db.collection("movies").find().limit(10).toArray();

  console.log("________res______", res);

  return (
    <div className="flex flex-col gap-8">
      {res.map((v) => (
        <Product {...v} />
      ))}
    </div>
  );
}
