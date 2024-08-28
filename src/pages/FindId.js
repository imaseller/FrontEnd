import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaFindId } from '../hooks/ValidationYup';
import styled, { ThemeProvider } from 'styled-components';
import BackButton from '../components/BackButton';
import Button from '../components/Button01';
import InputField from '../components/InputField';
import BirthdateSection from '../components/Signup/BirthdateSection';
import Theme from '../styles/Theme';
// import backgroundImage from '../img/background02.jpg';

const FindId = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaFindId),
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      birthdate: '',
    },
  });

  const handleFindAccount = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <BackButtonWrapper>
          <BackButton />
        </BackButtonWrapper>
        <FindIdContainer>
          <Title>계정 찾기</Title>
          <form onSubmit={handleSubmit(handleFindAccount)}>
            <Controller
              control={control}
              name='nickname'
              render={({ field }) => (
                <InputField
                  label='닉네임'
                  id='nickname'
                  type='text'
                  error={errors.nickname}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name='birthdate'
              render={({ field }) => (
                <BirthdateSection
                  label='생년월일'
                  error={errors.birthdate}
                  {...field}
                />
              )}
            />
            <Button type='submit'>계정 찾기</Button>
          </form>
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
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid ${Theme.colors.gray1};
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
`;

const FindIdContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow4};
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

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;
