import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { IsInputBlankState } from "@/src/atom";
import * as S from "@/styles/swap/style";
import { intControl, floatControl } from "@/utils";

function ValueInput({ swapIndex, onChangeAmount }) {
  const [text, setText] = useState<string>("");
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);
  const [isWriting, SetisWriting] = useState<boolean>(false);

  const onChange = (e) => {
    const { value } = e.target;
    let FilteredInput = value.replace(/[^0-9, ^.]/g, "");

    if (FilteredInput.includes(".")) {
      const { periodIndex, numberAmount } = floatControl(value);
      if (FilteredInput.slice(periodIndex + 1).length > 10) return;
      console.log(numberAmount, "~~~~");
    } else {
      intControl(value);
    }

    setText(FilteredInput);
  };

  const onKeyUp = (e) => {
    const { value } = e.target;
  };

  const onFocus = (e) => {
    SetisWriting(true);
  };

  const onBlur = (e) => {
    SetisWriting(false);
    console.log("꺼졌어");
  };

  useEffect(() => {
    if (text.length > 0) {
      SetIsInputBlank(false);
    } else {
      SetIsInputBlank(true);
    }
  }, [text]);

  if (isWriting == true) {
    return (
      <S.InputBox
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={text}
        placeholder="0.0"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  } else {
    return (
      <S.InputBox
        onKeyUp={onKeyUp}
        onChange={onChange}
        value="지후"
        placeholder="0.0"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
}

export default ValueInput;
