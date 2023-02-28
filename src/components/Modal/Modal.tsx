import * as React from "react";
import * as S from "@/styles/modal/style";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { TopFont } from "@/styles/index/style";

function Modal({ IsModalOpen, close }) {
  return (
    <S.ModalContainer IsModalOpen={IsModalOpen}>
      {IsModalOpen ? (
        <>
          <S.ModalBack onClick={close}></S.ModalBack>
          <S.ModalView>
            <SearchInput close={close} />
            <S.Middle />
            <S.Footer />
          </S.ModalView>
        </>
      ) : null}
    </S.ModalContainer>
  );
}

export default Modal;
