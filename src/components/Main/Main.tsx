import * as React from "react";
import { useEffect, useState } from "react";
import * as S from "@/styles/index/style";
import { AiOutlineSetting, AiOutlineArrowDown } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { IsInputBlankState } from "@/src/atom";

import Swap from "../Swap/Swap";
import Modal from "../Modal/Modal";

function Main() {
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);
  const [IsModalOpen, SetModalOpen] = useState<boolean>(false);

  const OpenModal = () => {
    SetModalOpen(true);
    console.log(IsModalOpen, "-~~-");
  };

  const CloseModal = () => {
    SetModalOpen(false);
    console.log("얍 ----");
  };

  const AlertPreparing = () => {
    alert("준비 중입니다.");
  };

  useEffect(() => {}, [IsInputBlank]);

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
      <Swap OpenModal={OpenModal} />
      <S.ArrowBox>
        <AiOutlineArrowDown size="18" color="white" className="Arrowicon" />
      </S.ArrowBox>
      <Swap OpenModal={OpenModal} />
      {IsInputBlank ? (
        <S.BlankButton>금액을 입력하세요.</S.BlankButton>
      ) : (
        <S.SwapButton onClick={AlertPreparing}>스왑</S.SwapButton>
      )}
      <Modal IsModalOpen={IsModalOpen} close={CloseModal} />
    </S.Container>
  );
}

export default Main;
