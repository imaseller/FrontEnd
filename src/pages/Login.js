// Login.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const Login = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <LogoContainer>
          <Logo>SELLER</Logo>
        </LogoContainer>
        <LoginContainer>
          <LoginForm>
            <Title>Login</Title>
            <InputContainer>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' />
            </InputContainer>
            <InputContainer>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' />
            </InputContainer>
            <LoginButton>Login</LoginButton>
          </LoginForm>
        </LoginContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  background-size: cover;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

const Logo = styled.h1`
  ${({ theme }) => theme.fonts.mainTitle};
  color: ${({ theme }) => theme.colors.pink4};
`;

const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: ${({ theme }) => theme.colors.pink4};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.pink4};
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink4};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink5};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.pink3};
    transform: translateY(0);
  }
`;
