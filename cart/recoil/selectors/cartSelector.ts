import { selector } from "recoil";
import { cartAtom } from "../atoms/cartAtom";

export const getCartState = selector({
  key: "getCartState",
  get: ({ get }) => {
    const cartState = get(cartAtom);
    return { cartState };
  },
});
