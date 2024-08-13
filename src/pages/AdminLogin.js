import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../hooks/ValidationYup';
import LoginButton from '../components/Button01';
import Button00 from '../components/Button00';
import InputField from '../components/InputField';
import backgroundImage from '../img/background02.jpg';
import Theme from '../styles/Theme';
import { AdminLoginPost } from '../api/auth/AdminLoginPost.js';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    navigate('/main');
  };

  const onSubmit = async (data) => {
    const callbackFunctions = {
      navigateSuccess: handleLoginClick,
      navigateError: (errorMessage) => {
        setModalMessage('로그인에 실패했습니다. \n' + errorMessage);
        setIsModalOpen(true);
      },
    };

    try {
      await AdminLoginPost(data, callbackFunctions);
    } catch (error) {
      console.error(error);
      setModalMessage('로그인에 실패했습니다.');
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Button00Wrapper>
          <Button00 onClick={handleBackClick}>뒤로가기</Button00>
        </Button00Wrapper>
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Title>Admin</Title>
            <Controller
              control={control}
              name='email'
              render={({ field }) => (
                <InputField
                  label='계정(이메일)'
                  id='email'
                  type='email'
                  error={errors.email}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <InputField
                  label='비밀번호'
                  id='password'
                  type='password'
                  error={errors.password}
                  {...field}
                />
              )}
            />
            <LoginButton type='submit'>로그인</LoginButton>
          </LoginForm>
        </LoginContainer>
        {isModalOpen && (
          <Modal>
            <p>{modalMessage}</p>
            <button onClick={handleModalClose}>확인</button>
          </Modal>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default AdminLogin;

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
  max-width: 600px;
  margin: 0 auto;
`;

const Button00Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
`;

const LoginContainer = styled.div`
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.mainTitle};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
