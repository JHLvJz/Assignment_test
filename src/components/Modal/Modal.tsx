import * as React from "react";
import * as S from "@/styles/modal/style";
import styled from "styled-components";

function Modal({ IsModalOpen, close }) {
  return (
    <S.ModalContainer IsModalOpen={IsModalOpen}>
      {IsModalOpen ? (
        <S.ModalBack onClick={close}>
          <S.ModalView>
            <button onClick={close}>X</button>
            <div>제발 이해</div>
          </S.ModalView>
        </S.ModalBack>
      ) : null}
    </S.ModalContainer>
  );
}

export default Modal;
