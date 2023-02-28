import * as React from "react";
import { useState } from "react";
import * as S from "@/styles/modal/search";
import { Header, Middle } from "@/styles/modal/style";
import { useRecoilState } from "recoil";
import { SelectedTokenState1, SelectedTokenState2 } from "@/src/atom";

function Search({ close, swapIndex }) {
  const [text, setText] = useState<string>("");
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);
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
  });

  const tokenClick = (e: string) => {
    if (swapIndex == 1) {
      setToken1(e);
    } else {
      setToken2(e);
    }
    close();
  };

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
          <S.TokenItem
            key={index}
            onClick={() => {
              tokenClick(token);
            }}
          >
            {token}
          </S.TokenItem>
        ))}
      </Middle>
    </>
  );
}

export default Search;
