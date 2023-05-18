import { GetStaticPaths } from "next";
import { ProductResponse } from "..";
import Image from "next/image";
import { useState } from "react";
import AddCartButton from "@/components/Button/AddCartButton";
import { descWrapper, titleText, wrapper } from "./style";
import TomatoScore from "@/components/TomatoScore/TomatoScore";
import FlexBox from "@/components/FlexBox/FlexBox";

export default function ProductDetail({
  post,
}: Record<"post", ProductResponse>) {
  const { _id, poster, title, tomatoes } = post;
  const [src, setSrc] = useState(poster ? poster : "/img/empty-image.png");

  return (
    <div css={wrapper}>
      <Image
        src={src}
        alt={`${title} poster`}
        width={300}
        height={420}
        placeholder="blur"
        blurDataURL="/img/empty-image.png"
        onError={() => setSrc("/img/empty-image.png")}
      />
      <div css={descWrapper}>
        <h2 css={titleText}>{title}</h2>

        <FlexBox justifyContent="space-between">
          <TomatoScore scoreInfo={tomatoes} />
          <AddCartButton itemId={_id} />
        </FlexBox>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/products`);
  const posts = await res.json();
  const paths = posts.map((post: ProductResponse) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({
  params,
}: Record<"params", { id: string }>) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}
