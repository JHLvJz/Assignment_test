import * as React from "react";
import { useEffect, useState } from "react";
import * as S from "@/styles/index/style";
import { AiOutlineSetting, AiOutlineArrowDown } from "react-icons/ai";
import { useRecoilState } from "recoil";
import {
  IsInputBlankState,
  ongoingTextState,
  SelectedTokenState1,
  SelectedTokenState2,
  UsdState1,
  UsdState2,
  WhichSwapState,
} from "@/src/atom";
import axios from "axios";

import Swap from "../Swap/Swap";
import Modal from "../Modal/Modal";
import getUsdInfo from "@/api";
import { rateCalculate } from "@/utils";

function Main() {
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);
  const [IsModalOpen, SetModalOpen] = useState<boolean>(false);
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);
  const [usd1, setUsd1] = useState<number>(0);
  const [usd2, setUsd2] = useState<number>(0);
  const [ongoingText, setOngoingText] = useRecoilState(ongoingTextState);
  const [swapIndex, SetSwapIndex] = useRecoilState(WhichSwapState);

  //데이터 받아오기
  const dataFetch = async (tokenType) => {
    const { path, tokenKey } = getUsdInfo(tokenType);
    await axios
      .get(path)
      .then(function (res) {
        const { data } = res;
        let temp = data[tokenKey]["usd"];
        tokenType == token1 ? setUsd1(temp) : setUsd2(temp);

        // console.log(data[tokenKey]["usd"], "데이터확인");
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  //선택된 토큰에 따라 usd변경
  useEffect(() => {
    dataFetch(token1);
    dataFetch(token2);
  }, [token1, token2]);

  //버튼 활성화 여부 확인
  useEffect(() => {}, [IsInputBlank]);

  //비율 계산
  let result =
    swapIndex == 1
      ? rateCalculate(ongoingText, usd1, usd2)
      : rateCalculate(ongoingText, usd2, usd1);

  const OpenModal = (idenfier: number) => {
    SetModalOpen(true);
  };

  const CloseModal = () => {
    SetModalOpen(false);
  };

  const AlertPreparing = () => {
    alert("준비 중입니다.");
  };

  return (
    <S.Container>
      <S.Top>
        <S.TopFont>스왑</S.TopFont>
        <AiOutlineSetting
          size="21"
          color="white"
          className="icon"
          onClick={AlertPreparing}
        />
      </S.Top>
      <Swap SwapIndex="1" OpenModal={OpenModal} calculated={result} />
      <S.ArrowBox>
        <AiOutlineArrowDown size="18" color="white" className="Arrowicon" />
      </S.ArrowBox>
      <Swap SwapIndex="2" OpenModal={OpenModal} calculated={result} />
      {IsInputBlank ? (
        <S.BlankButton>금액을 입력하세요.</S.BlankButton>
      ) : (
        <S.SwapButton onClick={AlertPreparing}>스왑</S.SwapButton>
      )}
      <Modal
        IsModalOpen={IsModalOpen}
        close={CloseModal}
        AlertPreparing={AlertPreparing}
      />
    </S.Container>
  );
}

export default Main;
