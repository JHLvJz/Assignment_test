import * as React from "react";
import * as S from "@/styles/swap/style";
import { IoIosArrowDown } from "react-icons/io";

function Swap() {
  return (
    <S.Container>
      <div>야호</div>
      <S.TokenButton>
        <S.ToggleFont>DAI</S.ToggleFont>
        <IoIosArrowDown size="21" color="white" className="ArrowIcon" />
      </S.TokenButton>
    </S.Container>
  );
}

export default Swap;
