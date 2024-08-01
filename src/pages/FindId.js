import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../components/Button01';
import InputField from '../components/InputField';
import BirthdateSection from '../components/Signup/BirthdateSection';
import Theme from '../styles/Theme';

const FindId = () => {
  const handleFindAccount = () => {};

  return (
    <ThemeProvider theme={Theme}>
      <Container>
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
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.brown6};
`;
