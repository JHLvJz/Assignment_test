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
    const { value } = e.target;
    let FilteredInput = value.replace(/[^0-9, ^.]/g, "");

    setText(FilteredInput);
  };

  useEffect(() => {
    if (text.length > 0) {
      SetIsInputBlank(false);
    } else {
      SetIsInputBlank(true);
      setText("0.0");
    }
  }, [text]);

  return (
    <div>
      <S.InputBox onChange={onChange} value={text} />
    </div>
  );
}

export default ValueInput;
