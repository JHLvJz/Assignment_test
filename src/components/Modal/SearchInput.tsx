import * as React from "react";
import { useState } from "react";
import * as S from "@/styles/modal/search";
import { Header } from "@/styles/modal/style";

function SearchInput({ close }) {
  const [text, setText] = useState<string>("");
  //   console.log(`${process.env.Mesher_API_SERVER_URL}jihoo`);

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <Header>
      <S.Top>
        <S.TopFont fontsize="12px">토큰 선택</S.TopFont>
        <S.TopFont fontsize="15px" onClick={close}>
          X
        </S.TopFont>
      </S.Top>
      <S.InputBox onChange={onChange} value={text} />
    </Header>
  );
}

export default SearchInput;
