import React from 'react';
import styled from 'styled-components';

export default function CoverB({ data }) {
  const {
    bgColor1,
    img1,
    kicker1,
    kicker2,
    mainTitle1,
    mainTitle2,
    subTitle1,
    subTitle2,
    copyright1,
  } = data;

  return (
    <S_Cover bgColor={bgColor1.value}>
      <S_TextSide>
        <S_LeftGroup>
          <S_SubTitle1 style={subTitle1.style}>{subTitle1.value}</S_SubTitle1>
          <S_Kicker1 style={kicker1.style}>{kicker1.value}</S_Kicker1>
        </S_LeftGroup>
        <S_RightGroup>
          <S_Kicker2 style={kicker2.style}>{kicker2.value}</S_Kicker2>
          <S_SubTitle2 style={subTitle2.style}>{subTitle2.value}</S_SubTitle2>
        </S_RightGroup>
      </S_TextSide>
      <S_ImgSide>
        <S_Title1 style={mainTitle1.style}>{mainTitle1.value}</S_Title1>
        <S_Title2 style={mainTitle2.style}>{mainTitle2.value}</S_Title2>
        <S_Img src={img1.value} />
      </S_ImgSide>
      <S_CopyRight>{copyright1.value}</S_CopyRight>
    </S_Cover>
  );
}

const S_CopyRight = styled.div`
  position: absolute;
  bottom: 10px;
  margin-left: 10px;
  font-size: 1.1rem;
  font-family: 'Rubik Mono One', sans-serif;
`;

const S_LeftGroup = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  width: 70px;
  font-size: 1.3rem;
  line-height: 0.8;
`;

const S_RightGroup = styled.div`
  margin-right: 10px;
  margin-top: 10px;
  max-width: 80px;
  font-size: 1.2rem;
  line-height: 0.9;
`;

const S_SubTitle1 = styled.div``;
const S_SubTitle2 = styled.div``;

const S_Kicker1 = styled.div``;
const S_Kicker2 = styled.div``;

const S_TextSide = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const S_ImgSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const S_Title1 = styled.div`
  position: absolute;
  top: -20px;
  font-size: 6.8rem;
  line-break: break;
`;

const S_Title2 = styled.div`
  position: absolute;
  bottom: -34px;
  left: 21px;
  font-size: 6.8rem;
  margin-left: none;
  line-break: break;
`;

const S_Cover = styled.div`
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  width: 500px;
  height: 700px;
  margin: auto;
`;

const S_Img = styled.img`
  width: 430px;
  height: 430px;
  margin-top: 10px;
`;
