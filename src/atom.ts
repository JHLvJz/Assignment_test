import { atom } from "recoil";

export const IsInputBlankState = atom<boolean>({
  key: "IsInputBlankState",
  default: true,
});
