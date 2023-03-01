import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  IsInputBlankState,
  ongoingTextState,
  SelectedTokenState1,
  SelectedTokenState2,
} from "@/src/atom";
import * as S from "@/styles/swap/style";
import { intControl, floatControl } from "@/utils";
import getUsdInfo from "@/api";
import axios from "axios";

function ValueInput({ swapIndex, calculated }) {
  const [ongoingText, setOngoingText] =
    useRecoilState<string>(ongoingTextState);
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);
  const [isWriting, SetisWriting] = useState<boolean>(false);
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);

  const onChange = (e) => {
    const { value } = e.target;

    //입력값 형식에 맞게 필터링
    let FilteredInput = value.replace(/[^0-9, ^.]/g, "");
    if (FilteredInput.includes(".")) {
      const { periodIndex, numberAmount } = floatControl(value);
      if (FilteredInput.slice(periodIndex + 1).length > 10) return;
      console.log(numberAmount, "~~~~");
    } else {
      intControl(value);
    }
    setOngoingText(FilteredInput);
  };

  const onFocus = (e) => {
    SetisWriting(true);
  };

  const onBlur = (e) => {
    SetisWriting(false);
  };

  //입력값 바뀔 때마다 업데이트
  useEffect(() => {
    if (ongoingText == "0.0") {
      SetIsInputBlank(true);
    } else {
      SetIsInputBlank(false);
    }
  }, [ongoingText]);

  //활성화되어있는 입력창 구분
  if (isWriting == true) {
    return (
      <S.InputBox
        onChange={onChange}
        value={ongoingText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  } else {
    return (
      <S.InputBox
        onChange={onChange}
        value={calculated ? calculated : "0.0"}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
}

export default ValueInput;
