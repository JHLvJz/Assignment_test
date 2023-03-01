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
  console.log(keywords, "어디한번 보자~");
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  //얜 계속 렌더링됨 (클릭할 때마다)
  // useEffect(() => {
  //   const result = localStorage.getItem("keywords") || "[]";
  //   console.log(result, "---난 []의존성이야---");
  //   setKeywords(JSON.parse(result));
  // }, []);

  //얜 한 번 추가된 이후 다ㅅ ㅣ클릭했을 때
  useEffect(() => {
    if (keywords?.length === 0) {
      return;
    }
    // localStorage.setItem("keywords", JSON.stringify(keywords));
    const result = localStorage.getItem("keywords") || "[]";
    setKeywords(JSON.parse(result));
    console.log("---난 [keywords]의존성이야---");
  }, [keywords]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };

    setKeywords([newKeyword, ...keywords]);
  };

  /*-- 로컬스토리지 관리 --*/

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
