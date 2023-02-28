import * as React from "react";
import * as S from "@/styles/modal/style";
import styled from "styled-components";
import Search from "./Search";
import { TopFont } from "@/styles/index/style";
import { useRecoilState } from "recoil";
import { WhichSwapSate } from "@/src/atom";

function Modal({ IsModalOpen, close, AlertPreparing }) {
  const [swapIndex, setSwapIndex] = useRecoilState<number>(WhichSwapSate);

  console.log(swapIndex, "~~제발");
  return (
    <S.ModalContainer IsModalOpen={IsModalOpen}>
      {IsModalOpen ? (
        <>
          <S.ModalBack onClick={close}></S.ModalBack>
          <S.ModalView>
            <Search close={close} swapIndex={swapIndex} />
            <S.Footer onClick={AlertPreparing}>토큰 목록 관리</S.Footer>
          </S.ModalView>
        </>
      ) : null}
    </S.ModalContainer>
  );
}

export default Modal;
