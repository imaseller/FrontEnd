import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Theme from '../styles/Theme';
import MelpikLogo from '../img/MelpikLogo.svg';

const Landing = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/LandingDetail');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header>
          <Logo src={MelpikLogo} alt='melpik logo' />
          <RegisterButton onClick={() => navigate('/')}>
            사전등록하기
          </RegisterButton>
        </Header>
        <MainContent>
          <Title>
            오직 나만의! 나를 위한! <br /> 패션 브랜드 대여 플랫폼
          </Title>
          <StartButton onClick={handleStartClick}>지금 시작하기</StartButton>
          <Subtitle>아직도 체험단, 기자단하시나요?</Subtitle>
          <Description>
            멜픽으로 수익과 팔로워 모두 가져가는
            <br /> 인플루언서로 성장하세요
          </Description>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 80px;
  height: 35px;
`;

const RegisterButton = styled.button`
  width: 100px;
  height: 35px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 0px;
  text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 39px;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;
`;

const StartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 46px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  text-align: center;
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;

  text-align: center;
`;
