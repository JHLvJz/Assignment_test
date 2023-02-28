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
  z-index: 5;
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
  width: 60%;
  height: 420px;
  background-color: rgb(25, 27, 31);
  border-radius: 10px;
  color: black;

  position: relative;
  z-index: 10;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Middle = styled.div`
  width: 100%;
  height: 65%;
  background-color: red;
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  background-color: beige;
`;
