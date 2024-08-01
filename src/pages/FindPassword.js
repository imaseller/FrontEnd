import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BackButton from '../components/BackButton';
import Button from '../components/Button01';
import InputField from '../components/InputField';
import Theme from '../styles/Theme';

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
`;

const FindIdContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.brown6};
`;
