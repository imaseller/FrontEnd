// src/components/Landing/LandingPage5.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LastImg from '../../img/Landing/LastpageBackground.svg';
import Theme from '../../styles/Theme';

const LandingPage5 = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/LandingDetail');
  };

  return (
    <Container bgColor='#FFFDF4' backgroundImage={LastImg}>
      <LandingTitle4>
        현재 <Yellow>N명</Yellow>의 인플루언서들이 <br /> melpik을 신청했어요!
      </LandingTitle4>
      <ButtonWrapper>
        <MelpikStartButton onClick={handleStartClick}>
          melpik 시작하기
        </MelpikStartButton>
      </ButtonWrapper>
      <LandingSubtitle4>
        사전예약 마감까지 <BoldText>N일 00:00</BoldText> 시간 남았어요!
      </LandingSubtitle4>
      <Footer>
        <Line1>
          <FooterItem>
            <FooterLabel>상호</FooterLabel>
            <FooterSpan>멜픽(melpik)</FooterSpan>
          </FooterItem>
          <FooterItem>
            <FooterLabel>대표</FooterLabel>
            <FooterSpan>황유민</FooterSpan>
          </FooterItem>
          <FooterItem>
            <FooterLabel>개인정보책임자</FooterLabel>
            <FooterSpan>장용호</FooterSpan>
          </FooterItem>
        </Line1>
        <FooterItem>
          <FooterLabel>소재지</FooterLabel>
          <FooterSpan>
            서울시 금천구 디지털로9길 41, 1008호 (삼성IT해링턴타워)
          </FooterSpan>
        </FooterItem>
        <FooterItem>
          <FooterLabel>이메일</FooterLabel>
          <FooterSpan>대표메일</FooterSpan>
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default LandingPage5;

// 스타일 컴포넌트 정의
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  padding: 60px 20px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 1000px;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid ${Theme.colors.gray1};
  border-right: 1px solid ${Theme.colors.gray1};
`;

const LandingTitle4 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  /* or 176% */
  text-align: center;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.black};
`;

const Yellow = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 33px;
  margin-bottom: 9px;
`;

const MelpikStartButton = styled.button`
  width: 300px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 30px;
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
`;

const LandingSubtitle4 = styled.h2`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const BoldText = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  text-align: left;
  padding: 28px 0;
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const FooterItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin: 0 28px;
`;

const FooterLabel = styled.label`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  margin-right: 5px;
`;

const FooterSpan = styled.span`
  font-weight: 400;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 10px;
  line-height: 18px;
`;

const Line1 = styled.div`
  display: flex;
  flex-direction: row;
`;
