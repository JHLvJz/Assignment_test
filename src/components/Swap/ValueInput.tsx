import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { IsInputBlankState } from "@/src/atom";
import * as S from "@/styles/swap/style";

function ValueInput() {
  const [text, setText] = useState<string>("");
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text.length > 0) {
      SetIsInputBlank(false);
    } else {
      SetIsInputBlank(true);
    }
  }, [text]);

  return <S.InputBox onChange={onChange} />;
}

export default ValueInput;
