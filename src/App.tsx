import * as React from "react";
import { RecoilRoot } from "recoil";
import { Wrapper } from "../styles/index/style";
import Main from "./components/Main/Main";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Main />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;
