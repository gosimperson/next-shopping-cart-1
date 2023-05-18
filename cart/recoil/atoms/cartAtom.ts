import { atom } from "recoil";

export const cartAtom = atom<string[]>({
  key: "cartAtom",
  default: [],
});
