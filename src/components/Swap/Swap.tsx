import * as React from "react";
import * as S from "@/styles/swap/style";
import { IoIosArrowDown } from "react-icons/io";
import ValueInput from "./ValueInput";

function Swap() {
  return (
    <S.Container>
      <ValueInput />
      <S.TokenButton>
        <S.ToggleFont>USTD</S.ToggleFont>
        <IoIosArrowDown size="21" color="white" className="ArrowIcon" />
      </S.TokenButton>
    </S.Container>
  );
}

export default Swap;
