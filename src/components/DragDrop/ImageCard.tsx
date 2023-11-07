import React from "react";

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";

type Props = {
  index: number;
  id: number;
  text: string;
  color: string;
};

function ImageCard({ index, id, text, color }: Props) {
  return (
    <S_Card className="card" bgColor={color}>
      <CardImg
        draggable="false"
        alt="Card image cap"
        src="https://picsum.photos/900/180"
        style={{
          height: 100,
        }}
        top
        width="100%"
      />

      <CardTitle tag="h5">{text}</CardTitle>
    </S_Card>
  );
}

const S_Card = styled(Card)<{ bgColor: string }>`
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  margin-bottom: 1rem;
`;

export default ImageCard;
