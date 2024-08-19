import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoginButton from '../components/Button01';
import Button00 from '../components/Button00';
import InputField from '../components/InputField';
import backgroundImage from '../img/background02.jpg';
import Theme from '../styles/Theme';
import { LoginPost } from '../api/auth/LoginPost';

const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email('유효한 이메일 주소를 입력하세요')
    .required('이메일은 필수 입력 사항입니다'),
  password: yup
    .string()
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
    .required('비밀번호는 필수 입력 사항입니다'),
});

const Login = () => {
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

  const handleLoginClick = async (data) => {
    try {
      const response = await LoginPost(data.email, data.password);
      console.log('로그인 성공:', response);
      // 로그인 성공 시 홈으로 이동
      navigate('/home');
    } catch (error) {
      console.error('로그인 실패:', error);
      setModalMessage('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBrowseWithoutSignupClick = () => {
    navigate('/home');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Button00Wrapper>
          <Button00 onClick={() => navigate('/admin/auth/login')}>
            관리자 페이지
          </Button00>
        </Button00Wrapper>
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit(handleLoginClick)}>
            <Title>IM A SELLER</Title>
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
          <ExtraLinks>
            <Link onClick={() => navigate('/signup')}>회원가입</Link>
            <Separator>|</Separator>
            <Link onClick={() => navigate('/findid')}>아이디 찾기</Link>
            <Separator>|</Separator>
            <Link onClick={() => navigate('/findPassword')}>비밀번호 찾기</Link>
          </ExtraLinks>
          <BrowseLink onClick={handleBrowseWithoutSignupClick}>
            회원가입 없이 둘러보기
          </BrowseLink>
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

const ExtraLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
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
  margin: 0 5px;
`;

const BrowseLink = styled.a`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.DarkBrown3};
  text-decoration: none;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
