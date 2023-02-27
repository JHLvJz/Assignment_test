import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 500px;
  height: 600px;
  background-color: rgb(36, 35, 41);
`;

export const Container = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-color: rgb(24, 27, 31);
`;

export const Top = styled.div`
  margin: 0px auto;
  width: 90%;
  padding: 8px;
  height: 30px;

  display: flex;
  flex-direction: row;
  position: relative;

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

export const Button = styled.div`
  margin: 0px auto;
  margin-bottom: 10px;
  width: 90%;
  height: 70px;
  border-radius: 20px;
  background-color: blue;

  color: rgb(109, 112, 115);
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 70px;
  text-align: center;
`;
