import * as React from "react";
import * as S from "@/styles/modal/search";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { SelectedTokenState1, SelectedTokenState2 } from "@/src/atom";
import { Main, Middle } from "@/styles/modal/style";
import SearchItem from "./SearchItem";

interface KeyInterface {
  id: number;
  text: string;
}

function TokenRecord({ swapIndex, close }) {
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);
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

  //토큰 선택
  const tokenClick = (e: string) => {
    if (swapIndex == 1) {
      setToken1(e);
      handleAddKeyword(e);
      localStorage.setItem(String(Date.now()), e);
    } else {
      setToken2(e);
      handleAddKeyword(e);
      localStorage.setItem(String(Date.now()), e);
    }
    close();
  };

  /*-- 로컬스토리지 관리 --*/
  const [text, setText] = useState<string>("");
  const filterResult = TokenList.filter((p) => {
    return p.toLocaleLowerCase().includes(text.toLocaleLowerCase());
  });

  const [keywords, setKeywords] = useState<KeyInterface[]>([]);
  // console.log(keywords, "확인");
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  // 모달 창 클릭할 때마다 렌더링 (계속 초기화시켜버림)
  // useEffect(() => {
  //   const result = localStorage.getItem("keywords") || "[]";
  //   console.log(result, "---[]의존성---");
  //   setKeywords(JSON.parse(result));
  // }, []);

  // 토큰 선택 이후 다시 추가했을 때 렌더링
  // useEffect(() => {
  //   if (keywords?.length === 0) {
  //     return;
  //   }
  //   // localStorage.setItem("keywords", JSON.stringify(keywords));
  //   const result = localStorage.getItem("keywords") || "[]";
  //   setKeywords(JSON.parse(result));
  //   console.log("---[keywords]의존성---");
  // }, [keywords]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };

    setKeywords([newKeyword, ...keywords]);
  };

  /*-- 로컬스토리지 관리 끝지점 --*/

  return (
    <Main>
      <S.InputBox
        onChange={onChange}
        type="text"
        value={text}
        placeholder="이름 검색 또는 주소 붙여넣기"
      />
      <S.RecordContainer>
        {keywords.length
          ? keywords.map((k) => (
              <div key={k.id}>
                <p>{k.text}</p>
              </div>
            ))
          : null}
      </S.RecordContainer>
      <Middle>
        {filterResult.map((tokenItem, index) => (
          <SearchItem
            onClick={tokenClick}
            key={index}
            swapIndex={swapIndex}
            name={tokenItem}
          />
        ))}
      </Middle>
    </Main>
  );
}

export default TokenRecord;
