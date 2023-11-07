import React from "react";
import styled from "styled-components";
import { JsxChild, JsxElement } from "typescript";

type Props = {
  children: React.ReactNode;
};
function Sidebar({ children }: Props) {
  return <S_Sidebar>{children}</S_Sidebar>;
}

const S_Sidebar = styled.div`
  height: 100%;
  overflow: scroll;
  width: 240px;
  background-color: yellow;
  position: absolute;
  top: 0;
  right: 0;
`;

export default Sidebar;
