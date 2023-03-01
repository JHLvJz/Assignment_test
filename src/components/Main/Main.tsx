import * as React from "react";
import { useEffect, useState } from "react";
import * as S from "@/styles/index/style";
import { AiOutlineSetting, AiOutlineArrowDown } from "react-icons/ai";
import { useRecoilState } from "recoil";
import {
  IsInputBlankState,
  SelectedTokenState1,
  SelectedTokenState2,
} from "@/src/atom";
import axios from "axios";

import Swap from "../Swap/Swap";
import Modal from "../Modal/Modal";

function Main() {
  const [IsInputBlank, SetIsInputBlank] =
    useRecoilState<boolean>(IsInputBlankState);
  const [IsModalOpen, SetModalOpen] = useState<boolean>(false);
  const [token1, setToken1] = useRecoilState<string>(SelectedTokenState1);
  const [token2, setToken2] = useRecoilState<string>(SelectedTokenState2);

  const APIList = {
    ETH: "ethereum",
    USDT: "tether",
    USDC: "usd-coin",
    DAI: "dai",
    AAVE: "aave",
    WBTC: "bitcoin",
    AXS: "axie-infinity",
    COMP: "compound-coin",
    CRV: "curve-dao-token",
    ENS: "ethereum-name-service",
  };

  const dataFetch = async (whichToken) => {
    await axios
      .get(`${process.env.Mesher_API_SERVER_URL}${APIList[whichToken]}`)
      .then(function (res) {
        console.log(
          `${process.env.Mesher_API_SERVER_URL}${APIList[whichToken]}`,
          "~경로확인"
        );
        const { data } = res;
        console.log(data[APIList[whichToken]]["usd"], "데이터");
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    dataFetch(token1);
    dataFetch(token2);
  }, [token1, token2]);

  const OpenModal = (idenfier: number) => {
    SetModalOpen(true);
  };

  const CloseModal = () => {
    SetModalOpen(false);
  };

  const AlertPreparing = () => {
    alert("준비 중입니다.");
  };

  useEffect(() => {}, [IsInputBlank]);

  return (
    <S.Container>
      <S.Top>
        <S.TopFont>스왑</S.TopFont>
        <AiOutlineSetting
          size="21"
          color="white"
          className="icon"
          onClick={AlertPreparing}
        />
      </S.Top>
      <Swap SwapIndex="1" OpenModal={OpenModal} />
      <S.ArrowBox>
        <AiOutlineArrowDown size="18" color="white" className="Arrowicon" />
      </S.ArrowBox>
      <Swap SwapIndex="2" OpenModal={OpenModal} />
      {IsInputBlank ? (
        <S.BlankButton>금액을 입력하세요.</S.BlankButton>
      ) : (
        <S.SwapButton onClick={AlertPreparing}>스왑</S.SwapButton>
      )}
      <Modal
        IsModalOpen={IsModalOpen}
        close={CloseModal}
        AlertPreparing={AlertPreparing}
      />
    </S.Container>
  );
}

export default Main;
