import * as React from "react";
import { useState } from "react";
import * as S from "@/styles/modal/search";
import { Header, Middle } from "@/styles/modal/style";

function Search({ close }) {
  const [text, setText] = useState<string>("");
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  //   console.log(`${process.env.Mesher_API_SERVER_URL}jihoo`);

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

  const filterResult = TokenList.filter((p) => {
    return p.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    console.log("검색필터 잘 되나?");
  });

  return (
    <>
      <Header>
        <S.Top>
          <S.TopFont fontsize="12px">토큰 선택</S.TopFont>
          <S.TopFont fontsize="15px" onClick={close}>
            X
          </S.TopFont>
        </S.Top>
        <S.InputBox
          onChange={onChange}
          type="text"
          value={text}
          placeholder="이름 검색 또는 주소 붙여넣기"
        />
      </Header>
      <Middle>
        {filterResult.map((token, index) => (
          <S.TokenItem key={index}>{token}</S.TokenItem>
        ))}
      </Middle>
    </>
  );
}

export default Search;
