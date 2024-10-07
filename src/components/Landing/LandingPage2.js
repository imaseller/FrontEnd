// src/components/Landing/LandingPage2.js
import React from 'react';
import styled from 'styled-components';
import HangerIcon from '../../img/Landing/hangerIcon.svg';
import ZOOCImage from '../../img/Landing/ZoocImg.svg';
import SANDROImage from '../../img/Landing/Sandro.svg';
import ITMICHAImage from '../../img/Landing/ItMichaa.svg';
import Theme from '../../styles/Theme';

const LandingPage2 = () => {
  return (
    <Container bgColor='#FFFDF4'>
      <ScrollIndicator />
      <Hanger src={HangerIcon} alt='Hanger Icon' />
      <LandingTitle1>
        당신의 취향에 꼭 맞는 <br />
        <BrandHighlight>컨템포러리 브랜드들이</BrandHighlight> <br />
        <MelpicHighlight>멜픽과 함께합니다!</MelpicHighlight>
      </LandingTitle1>
      <BrandList>
        {[ZOOCImage, SANDROImage, ITMICHAImage].map((img, idx) => (
          <Brand key={idx}>
            <BrandImage src={img} alt={`brand-${idx}`} />
            <BrandName>{['ZOOC', 'SANDRO', 'it MICHA'][idx]}</BrandName>
          </Brand>
        ))}
      </BrandList>
      <Comment>
        똑똑한 AI가 <br />
        당신도 몰랐던, 당신만의 스타일을 <br />
        매칭해드립니다.
      </Comment>
    </Container>
  );
};

export default LandingPage2;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  min-height: 900px;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid ${Theme.colors.gray1};
  border-right: 1px solid ${Theme.colors.gray1};
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 35px;
  height: 31px;
  margin-top: 35px;
  margin-bottom: 117px;

  &::before {
    content: '↓';
    font-size: 14px;
    color: #767676;
  }
  &::after {
    content: 'scroll';
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #767676;
  }
`;

const Hanger = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 56px;
`;

const LandingTitle1 = styled.h1`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.black};
`;

const BrandHighlight = styled.span`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const MelpicHighlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
`;

const BrandList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 100%;
  height: 250px;
  margin-bottom: 90px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const BrandImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
`;

const BrandName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  color: black;
`;

const Comment = styled.div`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 161px;
`;
