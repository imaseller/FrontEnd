import React from 'react';
import styled from 'styled-components';
import braceletImage from '../img/Bracelet Image.svg';
import logo from '../logo.svg';

const Login = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={braceletImage} alt='Bracelet' />
      </ImageContainer>
      <LoginContainer>
        <LogoContainer>
          <img src={logo} alt='Safelet' />
        </LogoContainer>
        <LoginForm>
          <h2>Login</h2>
          <InputContainer>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </InputContainer>
          <InputContainer>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
          </InputContainer>
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #ff6f61;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e65b55;
  }
`;
