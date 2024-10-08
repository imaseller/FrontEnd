import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MelpikLogo from '../../img/Landing/MelpikLogo.svg';
import LandingBackground from '../../img/Landing/LandingBackground.svg';
import BoxBackgroundImg from '../../img/Landing/BoxBackgroundImg.svg';
import SelectIcon from '../../img/Landing/SelectIcon.svg';
import HeartIcon from '../../img/Landing/HeartIcon.svg';
import Theme from '../../styles/Theme';

const LandingPage1 = () => {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);

  const handleHeartClick = () => {
    const newHearts = Array.from({ length: 5 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100, // 랜덤한 수평 위치
      size: Math.random() * 20 + 20, // 랜덤한 크기 (20px~40px)
      delay: Math.random() * 500, // 랜덤한 지연 시간 (0ms ~ 500ms)
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 1500); // 1.5초 후 애니메이션 종료
  };

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
              <HeartIconContainer onClick={handleHeartClick}>
                <Icon src={HeartIcon} alt='Heart Icon' />
                {hearts.map((heart) => (
                  <HeartAnimation
                    key={heart.id}
                    left={heart.left}
                    size={heart.size}
                    delay={heart.delay} // 각 하트의 지연 시간
                  >
                    ❤️
                  </HeartAnimation>
                ))}
              </HeartIconContainer>
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

const heartFloat = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-300px) scale(1.5);
    opacity: 0;
  }
`;

const HeartAnimation = styled.div`
  position: absolute;
  font-size: ${(props) => props.size}px;
  animation: ${heartFloat} 1s ease-in-out forwards;
  top: 0;
  left: ${(props) => props.left}%;
  animation-delay: ${(props) => props.delay}ms; /* 지연 시간 적용 */
  pointer-events: none;
`;

const HeartIconContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  max-width: 600px;
  margin-top: 41px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  padding-top: 80px;
  background-color: transparent;
  min-height: 900px;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid ${Theme.colors.gray1};
  border-right: 1px solid ${Theme.colors.gray1};
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

const Logo = styled.img`
  width: 83px;
  height: 35px;
  margin-left: 29px;
`;

const RegisterButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin-right: 29px;
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
  margin-top: 28px;
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
