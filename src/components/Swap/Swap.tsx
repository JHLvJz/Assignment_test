import * as React from "react";
import * as S from "@/styles/swap/style";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ValueInput from "./ValueInput";
import Modal from "../Modal/Modal";
import { useRecoilState } from "recoil";
import {
  SelectedTokenState1,
  SelectedTokenState2,
  WhichSwapSate,
} from "@/src/atom";

function Swap({ OpenModal, SwapIndex }) {
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);
  const [swapIndex, setSwapIndex] = useRecoilState<number>(WhichSwapSate);

  return (
    <S.Container>
      <ValueInput />
      <S.TokenButton
        onClick={() => {
          OpenModal();
          setSwapIndex(SwapIndex);
        }}
      >
        {SwapIndex == 1 ? (
          <S.ToggleFont>{token1}</S.ToggleFont>
        ) : (
          <S.ToggleFont>{token2}</S.ToggleFont>
        )}
        <IoIosArrowDown size="21" color="white" className="ArrowIcon" />
      </S.TokenButton>
    </S.Container>
  );
}

export default Swap;
