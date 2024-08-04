import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import LoginButton from '../components/Button01';
import BackButton from '../components/BackButton';
import InputField from '../components/InputField';
import backgroundImage from '../img/background02.jpg';
import Theme from '../styles/Theme';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/admin');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Button00Wrapper>
          <BackButton />
        </Button00Wrapper>
        <LoginContainer>
          <LoginForm>
            <Title>Admin</Title>
            <InputField label='계정(이메일)' id='email' type='email' />
            <InputField label='비밀번호' id='password' type='password' />
            <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
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
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Button00Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
`;

const LoginContainer = styled.div`
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.mainTitle};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;

const ExtraLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;
  align-items: center;
`;

const Link = styled.a`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  flex: 1;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.bal};
  margin: 0 10px;
`;

const BrowseLink = styled.a`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
