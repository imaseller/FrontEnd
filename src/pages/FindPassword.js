import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BackButton from '../components/BackButton';
import Button from '../components/Button01';
import InputField from '../components/InputField';
import Theme from '../styles/Theme';
import backgroundImage from '../img/background02.jpg';
const FindPassword = () => {
  const handleFindAccount = () => {};

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <BackButton />
        <FindIdContainer>
          <Title>계정 찾기</Title>
          <InputField label='계정(이메일)' id='email' type='text' />
          <InputField label='닉네임' id='nickname' type='text' />
          <Button onClick={handleFindAccount}>계정 찾기</Button>
        </FindIdContainer>
      </Container>
    </ThemeProvider>
  );
};

export default FindPassword;

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
`;

const FindIdContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.PinkBrown3};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  width: 100%;
  opacity: 0.95;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;
