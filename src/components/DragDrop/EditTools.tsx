import React from "react";
import styled from "styled-components";

type Props = {
  className: string;
};

function EditTools({ className }: Props) {
  return <S_Tool className={className}>@</S_Tool>;
}

const S_Tool = styled.div`
  width: 30px;
  height: 30px;
  background-color: #bcf7bc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 0px;
  position: absolute;
  cursor: grab;
`;
export default EditTools;
