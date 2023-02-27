import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0px auto;
  margin-bottom: 10px;
  width: 90%;
  height: 90px;
  border-radius: 20px;
  background-color: rgb(34, 36, 41);
`;

export const TokenButton = styled.div`
  min-width: 14%;
  height: 35px;
  padding: 0.1rem 0.1rem 0.1rem 0.7rem;

  position: absolute;
  top: 18%;
  right: 3%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;

  border-radius: 20px;
  background-color: rgba(45, 47, 52);

  cursor: pointer;

  .ArrowIcon {
    padding: 7px 2px 7px 2px;
  }
`;

export const ToggleFont = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  line-height: 35px;
`;

export const InputBox = styled.input`
  position: absolute;
  top: 15%;
  left: 4%;
  width: 70%;
  height: 45px;
  font-size: 1.5rem;
  background-color: rgb(34, 36, 41);
  border: none;
  outline: none;
  cursor: pointer;

  color: rgb(180, 186, 206);
`;
