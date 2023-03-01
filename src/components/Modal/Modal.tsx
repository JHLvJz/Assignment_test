import * as React from "react";
import * as S from "@/styles/modal/style";
import styled from "styled-components";
import Search from "./Search";
import { TopFont } from "@/styles/index/style";
import { useRecoilState } from "recoil";
import { SelectedTokenState1, WhichSwapSate } from "@/src/atom";
import TokenRecord from "./TokenRecord";

function Modal({ IsModalOpen, close, AlertPreparing }) {
  const [swapIndex, setSwapIndex] = useRecoilState<number>(WhichSwapSate);
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  console.log(token1, "안정해져있니?");

  console.log(swapIndex, "~~제발");
  return (
    <S.ModalContainer IsModalOpen={IsModalOpen}>
      {IsModalOpen ? (
        <>
          <S.ModalBack onClick={close}></S.ModalBack>
          <S.ModalView>
            <Search close={close} swapIndex={swapIndex} />
            <TokenRecord swapIndex={swapIndex} close={close} />
            <S.Footer onClick={AlertPreparing}>토큰 목록 관리</S.Footer>
          </S.ModalView>
        </>
      ) : null}
    </S.ModalContainer>
  );
}

export default Modal;
