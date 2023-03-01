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

  useEffect(() => {
    if (text.length > 0) {
      SetIsInputBlank(false);
    } else {
      SetIsInputBlank(true);
    }
  }, [text]);

  return (
    <div>
      <S.InputBox
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={text}
        placeholder="0.0"
      />
    </div>
  );
}

export default ValueInput;
