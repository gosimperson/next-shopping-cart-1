import Image from "next/image";
import { wrapper } from "./style";
import { useState } from "react";
import Link from "next/link";
import AddCartButton from "../Button/AddCartButton";
import TomatoScore from "../TomatoScore/TomatoScore";
import FlexBox from "../FlexBox/FlexBox";

export default function Product({ _id, poster, title, tomatoes }: any) {
  const [src, setSrc] = useState(poster ? poster : "/img/empty-image.png");

  return (
    <div css={wrapper}>
      <Image
        src={src}
        alt={`${title} poster`}
        width={200}
        height={240}
        placeholder="blur"
        blurDataURL="/img/empty-image.png"
        onError={() => setSrc("/img/empty-image.png")}
      />
      <FlexBox justifyContent="space-between" flexFlow="column" gap={10}>
        <Link href={`/products/${_id}`}>
          <h2>{title}</h2>
        </Link>

        <FlexBox justifyContent="space-between">
          <TomatoScore scoreInfo={tomatoes} />
          <AddCartButton itemId={_id} />
        </FlexBox>
      </FlexBox>
    </div>
  );
}
