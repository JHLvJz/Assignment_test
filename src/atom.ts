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

export const UsdState1 = atom<number>({
  key: "UsdState1",
  default: 0,
});

export const UsdState2 = atom<number>({
  key: "UsdState2",
  default: 0,
});

export const WhichSwapState = atom<number>({
  key: "WhichSwapState",
  default: undefined,
});

export const ongoingTextState = atom<string>({
  key: "ongoingTextState",
  default: "0.0",
});
