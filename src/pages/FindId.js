// FindId.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BackButton from '../components/BackButton';
import Button from '../components/Button01';
import InputField from '../components/InputField';
import BirthdateSection from '../components/Signup/BirthdateSection';
import Theme from '../styles/Theme';
import backgroundImage from '../img/background02.jpg';

const FindId = () => {
  const handleFindAccount = () => {};

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <BackButtonWrapper>
          <BackButton />
        </BackButtonWrapper>
        <FindIdContainer>
          <Title>계정 찾기</Title>
          <InputField label='닉네임' id='nickname' type='text' />
          <BirthdateSection />
          <Button onClick={handleFindAccount}>계정 찾기</Button>
        </FindIdContainer>
      </Container>
    </ThemeProvider>
  );
};

export default FindId;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 600px;
  margin: 0 auto;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
`;

const FindIdContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.PinkBrown3};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  max-height: 450px;
  width: 100%;
  opacity: 0.95;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 15px; /* 마진 조정 */
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;
