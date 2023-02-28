import { atom } from "recoil";

export const IsInputBlankState = atom<boolean>({
  key: "IsInputBlankState",
  default: true,
});

export const SelectedTokenState1 = atom<string>({
  key: "SelectedTokenState1",
  default: "DAI",
});

export const SelectedTokenState2 = atom<string>({
  key: "SelectedTokenState2",
  default: "USDC",
});

export const WhichSwapSate = atom<number>({
  key: "WhichSwapState",
  default: undefined,
});
