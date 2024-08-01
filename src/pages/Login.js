import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../components/Button01';
import InputField from '../components/InputField';
import backgroundImage from '../img/background01.svg';
import Theme from '../styles/Theme';

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleFindIdClick = () => {
    navigate('/findid');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <LoginContainer>
          <LoginForm>
            <Title>IM SELLER</Title>
            <InputField label='계정(이메일)' id='email' type='email' />
            <InputField label='비밀번호' id='password' type='password' />
            <Button>로그인</Button>
          </LoginForm>
          <ExtraLinks>
            <Link onClick={handleSignupClick}>회원가입</Link>
            <Separator>|</Separator>
            <Link onClick={handleFindIdClick}>아이디 찾기</Link>
            <Separator>|</Separator>
            <Link href='#'>비밀번호 찾기</Link>
          </ExtraLinks>
          <BrowseLink href='#'>회원가입 없이 둘러보기</BrowseLink>
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
`;

const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brown1};
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
  color: ${({ theme }) => theme.colors.brown6};
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
