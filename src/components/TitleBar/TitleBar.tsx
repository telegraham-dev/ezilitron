import React from "react";
import {
  Button,
  TitleBarContainer,
  Grow,
  TitleButtons,
  MinButton,
  MaxButton,
  CloseButton,
} from "./TitleBar.styles";
import {
  faWindowMinimize,
  faWindowMaximize,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

export const TitleBar: React.FC = () => {
  return (
    <TitleBarContainer>
      <Grow />
      <TitleButtons>
        <Button>
          <MinButton icon={faWindowMinimize} />
        </Button>
        <Button>
          <MaxButton icon={faWindowMaximize} />
        </Button>
        <Button>
          <CloseButton icon={faTimesCircle} />
        </Button>
      </TitleButtons>
    </TitleBarContainer>
  );
};
