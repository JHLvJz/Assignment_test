import { atom } from "recoil";

export const IsInputBlankState = atom<boolean>({
  key: "IsInputBlankState",
  default: true,
});

export const SelectedTokenState = atom<string>({
  key: "SelectedTokenState",
  default: "",
});
