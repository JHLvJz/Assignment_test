import * as React from "react";
import * as S from "@/styles/modal/search";
import { Middle } from "@/styles/modal/style";

function SearchList() {
  const TokenList: string[] = [
    "ETH",
    "USDT",
    "USDC",
    "DAI",
    "AAVE",
    "WBTC",
    "AXS",
    "COMP",
    "CRV",
    "ENS",
  ];

  return (
    <Middle>
      <S.TokenItem>ETC</S.TokenItem>
      <S.TokenItem>USDC</S.TokenItem>
      <S.TokenItem>USDT</S.TokenItem>
      <S.TokenItem>ETC</S.TokenItem>
      <S.TokenItem>USDC</S.TokenItem>
      <S.TokenItem>USDT</S.TokenItem>
    </Middle>
  );
}

export default SearchList;
