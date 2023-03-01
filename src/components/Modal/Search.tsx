import * as React from "react";
import { useState, useEffect } from "react";
import * as S from "@/styles/modal/search";
import { Header } from "@/styles/modal/style";
import { useRecoilState } from "recoil";
import { SelectedTokenState1, SelectedTokenState2 } from "@/src/atom";
import SearchItem from "./SearchItem";
import TokenRecord from "./TokenRecord";

function Search({ close, swapIndex }) {
  //   console.log(`${process.env.Mesher_API_SERVER_URL}jihoo`);

  return (
    <Header>
      <S.Top>
        <S.TopFont fontsize="12px">토큰 선택</S.TopFont>
        <S.TopFont fontsize="15px" onClick={close}>
          X
        </S.TopFont>
      </S.Top>
    </Header>
  );
}

export default Search;
