import * as React from "react";
import * as S from "@/styles/swap/style";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ValueInput from "./ValueInput";
import Modal from "../Modal/Modal";
import { useRecoilState } from "recoil";
import { SelectedTokenState } from "@/src/atom";

function Swap({ OpenModal }) {
  const [token, setToken] = useRecoilState<string>(SelectedTokenState);

  return (
    <S.Container>
      <ValueInput />
      <S.TokenButton onClick={OpenModal}>
        <S.ToggleFont>{token}</S.ToggleFont>
        <IoIosArrowDown size="21" color="white" className="ArrowIcon" />
      </S.TokenButton>
    </S.Container>
  );
}

export default Swap;
