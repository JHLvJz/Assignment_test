import * as React from "react";
import { Container, Button, Top, TopFont, TopIcon } from "@/styles/index/style";
import { AiOutlineSetting } from "react-icons/ai";

import Swap from "./Swap";

function Main() {
  const handleSetting = () => {
    alert("준비 중입니다.");
  };

  return (
    <Container>
      <Top>
        <TopFont>스왑</TopFont>
        <AiOutlineSetting
          size="21"
          color="white"
          className="icon"
          onClick={handleSetting}
        />
      </Top>
      <Swap />
      <Swap />
      <Button>금액을 입력하세요.</Button>
    </Container>
  );
}

export default Main;
