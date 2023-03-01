import styled from "styled-components";

interface FontProps {
  fontsize: string;
}

interface TokenProps {
  isSelected: boolean;
}

export const Top = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;
export const TopFont = styled.div<FontProps>`
  color: white;
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => (props.fontsize == "12px" ? 350 : 500)};
  padding: 5%;
  cursor: pointer;
`;

export const InputBox = styled.input`
  width: 90%;
  height: 10%;
  background-color: rgb(25, 27, 31);
  border: 1px solid rgb(58, 111, 220);
  border-radius: 10px;
  outline: none;

  padding: 1% 3% 1% 3%;
  color: rgb(180, 186, 206);
`;

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  border-bottom: 2px solid rgb(47, 49, 56);
`;

export const TokenItem = styled.div<TokenProps>`
  width: 100%;
  height: 20%;

  color: white;
  font-size: 15px;
  font-weight: 400;

  display: flex;
  align-items: center;
  padding-left: 5%;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isSelected == true ? "rgb(45, 47, 53)" : "rgb(25, 27, 31)"};

  &:hover {
    background-color: rgb(45, 47, 53);
  }
`;
