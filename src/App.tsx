import React from "react";
import styled from "@emotion/styled";
import { WebDashboard, TitleBar } from "./components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <TitleBar />
      <WebDashboard />
    </AppContainer>
  );
}

export default App;
