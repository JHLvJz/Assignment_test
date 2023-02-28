import styled from "styled-components";

export const ModalContainer = styled.div`
  /* top: 50px;
  background-color: rgba(0, 0, 0, 0.6);

  width: 400px;
  height: 400px;

  background-color: red; */

  position: absolute;
  z-index: 20;

  width: 100%;
  height: 400px;
  margin: 0px auto;
  top: 0%;
  left: 0%;

  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

export const ModalBack = styled.div`
  width: 100%;
  height: 400px;

  position: absolute;
  top: 0px;
  left: 0%;

  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 30px 90px;
  background-color: white;
  border-radius: 30px;
  color: #400c7;
`;
