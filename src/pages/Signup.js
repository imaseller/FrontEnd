import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BackButton from '../components/BackButton';
import Button from '../components/Button01';
import InputField from '../components/InputField.js';
import AgreementSection from '../components/Signup/AgreementSection.js';
import BirthdateSection from '../components/Signup/BirthdateSection';
import FavoriteBrandsSection from '../components/Signup/FavoriteBrandsSection';
import FavoriteColorSection from '../components/Signup/FavoriteColorSection';
import SizeSelectionSection from '../components/Signup/SizeSelectionSection';
import Theme from '../styles/Theme';
const Signup = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BackButton />
      <Container>
        <Title>회원가입</Title>
        <Form>
          <AgreementSection />
          <InputField
            label='계정(이메일)'
            id='email'
            type='email'
            placeholder='이메일을 입력하세요'
            required
          />
          <InputField
            label='닉네임'
            id='nickname'
            type='text'
            placeholder='닉네임을 입력하세요'
            required
          />
          <InputField
            label='비밀번호'
            id='password'
            type='password'
            placeholder='비밀번호를 입력하세요'
            required
          />
          <InputField
            label='비밀번호 확인'
            id='passwordConfirm'
            type='password'
            placeholder='비밀번호를 한번 더 입력하세요'
            required
          />
          <BirthdateSection />
          <FavoriteColorSection />
          <FavoriteBrandsSection />
          <SizeSelectionSection />
          <Button type='submit'>회원가입</Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;

const Container = styled.div`
  max-width: 50vw;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
