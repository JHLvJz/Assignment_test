import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 500px;
  height: 600px;
  background-color: rgb(36, 35, 41);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 20px;
  background-color: rgb(24, 27, 31);
`;

export const Top = styled.div`
  margin: 0px auto;
  width: 90%;
  height: 30px;
  top: 5px;
  padding: 5px;

  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 5;

  .icon {
    position: absolute;
    right: 3%;
  }
`;

export const TopFont = styled.div`
  width: 10%;
  position: absolute;
  left: 3%;

  color: white;
  font-weight: 400;
  font-size: 1rem;
`;

export const TopIcon = styled.div`
  position: absolute;
  left: 5%;
`;

export const BlankButton = styled.div`
  margin: 0px auto;
  margin-top: 10px;
  width: 90%;
  height: 70px;
  border-radius: 20px;
  background-color: rgb(34, 36, 41);

  color: rgb(109, 112, 115);
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 70px;
  text-align: center;
`;

export const SwapButton = styled.div`
  margin: 0px auto;
  margin-top: 10px;
  width: 90%;
  height: 70px;
  border-radius: 20px;
  background-color: rgb(58, 112, 221);

  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 70px;
  text-align: center;
  position: relative;
  z-index: 5;
`;

export const ArrowBox = styled.div`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);

  border: 5px solid rgb(24, 27, 31);
  border-radius: 10px;
  background-color: rgb(34, 36, 41);
  width: 25px;
  height: 25px;
  z-index: 10;

  .Arrowicon {
    position: absolute;
    padding: 0.2rem;
  }
`;
