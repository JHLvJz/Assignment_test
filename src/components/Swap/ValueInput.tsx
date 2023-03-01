import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  IsInputBlankState,
  SelectedTokenState1,
  SelectedTokenState2,
} from "@/src/atom";
import * as S from "@/styles/swap/style";
import { intControl, floatControl } from "@/utils";
import getUsdInfo from "@/api";
import axios from "axios";

function ValueInput({ swapIndex, onChangeAmount }) {
  const [text, setText] = useState<string>("");
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);
  const [isWriting, SetisWriting] = useState<boolean>(false);
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);
  const [usd1, setUsd1] = useState(0);
  const [usd2, setUsd2] = useState(0);

  const onChange = (e) => {
    const { value } = e.target;

    /*--입력값 필터링--*/
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

  const dataFetch = async (tokenType) => {
    const { path, tokenKey } = getUsdInfo(tokenType);
    await axios
      .get(path)
      .then(function (res) {
        const { data } = res;
        let temp = data[tokenKey]["usd"];
        tokenType == "token1" ? setUsd1(temp) : setUsd2(temp);

        console.log(data[tokenKey]["usd"], "제~~~~~~~#####발");
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    dataFetch(token1);
    dataFetch(token2);
  }, [token1, token2]);

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
