import { ProductResponse } from "@/pages/products";
import Image from "next/image";
import FlexBox from "../FlexBox/FlexBox";

interface Props {
  scoreInfo: ProductResponse["tomatoes"];
}

export default function TomatoScore({ scoreInfo }: Props) {
  return (
    <FlexBox alignItems="center" gap={4}>
      <Image
        src={"/img/tomato.png"}
        alt={"tomato img"}
        width={20}
        height={20}
      />
      <p>x</p>
      <p>{scoreInfo.fresh || 0}</p>
    </FlexBox>
  );
}
