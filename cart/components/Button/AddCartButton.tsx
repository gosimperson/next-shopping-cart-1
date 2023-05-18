import Button from "./Button";
import { useRecoilState } from "recoil";
import { cartAtom } from "@/recoil/atoms/cartAtom";
import Image from "next/image";

interface Props {
  itemId: string;
}

export default function AddCartButton({ itemId }: Props) {
  const [cartItems, setCartItems] = useRecoilState(cartAtom);

  const isItemIncludeCart = cartItems.includes(itemId);

  const handleDeleteItem = () => {
    setCartItems((prev) => prev.filter((v) => v !== itemId));
  };

  const handleAddItem = () => {
    setCartItems((prev) => [itemId, ...prev]);
  };

  return (
    <>
      {isItemIncludeCart ? (
        <Button onClick={handleDeleteItem}>
          <p>X</p>
        </Button>
      ) : (
        <Button onClick={handleAddItem}>
          <Image
            src={"/icon/cart.svg"}
            alt={"cart icon"}
            width={20}
            height={20}
          />
        </Button>
      )}
    </>
  );
}
