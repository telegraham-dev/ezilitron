import React from "react";
import {
  TitleBarContainer,
  Grow,
  TitleButtons,
  MinButton,
  MaxButton,
  CloseButton,
} from "./TitleBar.styles";

export const TitleBar: React.FC = () => {
  return (
    <TitleBarContainer>
      <div>Ezilitron</div>
      <Grow />
      <TitleButtons>
        <MinButton>-</MinButton>
        <MaxButton>+</MaxButton>
        <CloseButton>x</CloseButton>
      </TitleButtons>
    </TitleBarContainer>
  );
};
