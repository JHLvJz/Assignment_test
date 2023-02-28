import * as React from "react";
import * as S from "@/styles/modal/style";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { TopFont } from "@/styles/index/style";
import SearchList from "./SearchList";

function Modal({ IsModalOpen, close, AlertPreparing }) {
  return (
    <S.ModalContainer IsModalOpen={IsModalOpen}>
      {IsModalOpen ? (
        <>
          <S.ModalBack onClick={close}></S.ModalBack>
          <S.ModalView>
            <SearchInput close={close} />
            <SearchList />
            <S.Footer onClick={AlertPreparing}>토큰 목록 관리</S.Footer>
          </S.ModalView>
        </>
      ) : null}
    </S.ModalContainer>
  );
}

export default Modal;
