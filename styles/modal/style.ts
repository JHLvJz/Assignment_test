import styled from "styled-components";

interface MyStyledProps {
  IsModalOpen: boolean;
}

export const ModalContainer = styled.div<MyStyledProps>`
  position: absolute;
  z-index: ${(props) => (props.IsModalOpen ? 20 : 1)};

  width: 100%;
  height: 450px;
  margin: 0px auto;
  top: 0%;

  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

export const ModalBack = styled.div`
  width: 100%;
  height: 450px;

  position: absolute;
  top: 0px;
  left: 0%;

  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalView = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 185px 130px;
  background-color: white;
  border-radius: 30px;
  color: black;
`;
