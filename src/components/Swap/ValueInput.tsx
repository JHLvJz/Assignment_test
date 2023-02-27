import * as React from "react";
import { useState } from "react";
import * as S from "@/styles/swap/style";

function ValueInput() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  return <S.InputBox />;
}

export default ValueInput;
