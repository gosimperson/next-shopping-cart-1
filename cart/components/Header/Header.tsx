import Link from "next/link";
import { circle, wrapper, headerText, cartCountText } from "./style";
import { useRecoilValue } from "recoil";
import { cartAtom } from "@/recoil/atoms/cartAtom";
import FlexBox from "../FlexBox/FlexBox";

export default function Header() {
  const cartItems = useRecoilValue(cartAtom);

  return (
    <header css={wrapper}>
      <Link href={"/products"}>
        <h1 css={headerText}>MOVIE TOMATOES SHOP</h1>
      </Link>
      <Link href={"/cart"}>
        <FlexBox alignItems="center" gap={10}>
          장바구니
          <div css={circle}>
            <span css={cartCountText}>{cartItems.length}</span>
          </div>
        </FlexBox>
      </Link>
    </header>
  );
}
