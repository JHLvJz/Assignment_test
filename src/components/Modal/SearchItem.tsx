import * as React from "react";
import * as S from "@/styles/modal/search";
import { useRecoilState } from "recoil";
import { SelectedTokenState1, SelectedTokenState2 } from "@/src/atom";

interface SearchItemProp {
  onClick: any;
  swapIndex: string;
  name: string;
}

function SearchItem({ onClick, swapIndex, name }: SearchItemProp) {
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);
  // console.log(swapIndex, "스왑인덱스확인");

  return swapIndex == "1" ? (
    <S.TokenItem onClick={() => onClick(name)} isSelected={name == token1}>
      {name}
    </S.TokenItem>
  ) : (
    <S.TokenItem onClick={() => onClick(name)} isSelected={name == token2}>
      {name}
    </S.TokenItem>
  );
}

export default SearchItem;
