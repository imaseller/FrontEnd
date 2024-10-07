import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MelpikLogo from '../../img/MelpikLogo.svg';
import LandingBackground from '../../img/Landing/LandingBackground.svg';
import BoxBackgroundImg from '../../img/Landing/BoxBackgroundImg.svg';
import SelectIcon from '../../img/Landing/SelectIcon.svg';
import HeartIcon from '../../img/Landing/HeartIcon.svg';

const LandingPage1 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundImage src={LandingBackground} alt='Landing Background' />
      <Header>
        <Logo src={MelpikLogo} alt='Melpik Logo' />
        <RegisterButton onClick={() => navigate('/')}>
          사전등록하기
        </RegisterButton>
      </Header>
      <MainContent>
        <Title>
          오직 나만의! 나를 위한! <br />
          <HighlightText>패션 브랜드 대여 플랫폼</HighlightText>
        </Title>
        <Box>
          <BoxImage src={BoxBackgroundImg} alt='Landing Background' />
          <ButtonContainer>
            <StartButton onClick={() => navigate('/LandingDetail')}>
              지금 시작하기
            </StartButton>
            <IconContainer>
              <Icon src={SelectIcon} alt='Select Icon' />
              <Icon src={HeartIcon} alt='Heart Icon' />
            </IconContainer>
          </ButtonContainer>
        </Box>
        <Subtitle>아직도 체험단, 기자단하시나요?</Subtitle>
        <Description>
          melpik과 함께 수익과 팔로워 <br />
          모두 GET하는 인플루언서로 성장하세요
        </Description>
      </MainContent>
    </Container>
  );
};

export default LandingPage1;

// 스타일 컴포넌트 정의
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: transparent;
  min-height: 900px;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 405px;
  border-radius: 30px;

  margin-top: 16px;
`;

const BoxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4rem;
`;

const Logo = styled.img`
  width: 5rem;
  height: auto;
`;

const RegisterButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: white;
  }
`;

const MainContent = styled.div`
  text-align: center;
  max-width: 50rem;
`;

const Title = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const HighlightText = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 18px;
`;

const StartButton = styled.button`
  width: 175px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 30px;

  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 17px;

  text-align: center;

  color: #ffffff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Icon = styled.img`
  width: 27px;
  height: 24px;
  margin-left: 10px;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  margin-top: 25px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  margin-top: 11px;
`;
