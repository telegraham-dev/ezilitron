import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TitleBarContainer = styled.div`
  -webkit-app-region: drag;
  height: 36px;
  display: inline-flex;
  background-color: #4a4a4a;
  padding: 0;
  width: 100%;
  margin: 0px;
`;

export const Grow = styled.span`
  flex-grow: 1;
`;

export const TitleButtons = styled.span`
  display: inline-flex;
  gap: 2px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Button = styled.button`
  all: unset;
  -webkit-app-region: no-drag;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
    background: #3aadff;
  }
`;

export const MinButton = styled(FontAwesomeIcon)`
  -webkit-app-region: no-drag;
  font-size: 1.1em;
`;
export const MaxButton = styled(FontAwesomeIcon)`
  -webkit-app-region: no-drag;
  font-size: 1.2em;
`;
export const CloseButton = styled(FontAwesomeIcon)`
  -webkit-app-region: no-drag;
  color: #fc5130;
  font-size: 1.2em;
`;
