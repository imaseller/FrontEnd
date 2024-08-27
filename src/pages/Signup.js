import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignup } from '../hooks/ValidationYup';
import BackButton from '../components/BackButton';
import InputField from '../components/InputField';
import AgreementSection from '../components/Signup/AgreementSection';
import Theme from '../styles/Theme';
import BottomBar from '../components/Signup/BottomBar';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignup),
    mode: 'all',
  });

  const [domain, setDomain] = useState('naver.com');
  const [birthYear, setBirthYear] = useState('2000');
  const [gender, setGender] = useState('여성');
  const [selectedGenderButton, setSelectedGenderButton] = useState('여성');
  const [region, setRegion] = useState('서울특별시');
  const [district, setDistrict] = useState('금천구');
  const [melpickAddress, setMelpickAddress] = useState('');

  const handleBackClick = () => {
    window.history.back();
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleBirthYearChange = (e) => {
    setBirthYear(e.target.value);
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
    setSelectedGenderButton(selectedGender);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    e.target.value = value;
  };

  const handleNicknameCheck = () => {
    console.log('닉네임 중복 확인 클릭');
  };

  const handleInstagramCheck = () => {
    console.log('인스타그램 아이디 확인 클릭');
  };

  const handleVerification = () => {
    console.log('본인 인증 클릭');
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleMelpickAddressChange = (e) => {
    setMelpickAddress(e.target.value);
  };

  const handleCheckClick = () => {
    console.log('멜픽 주소 확인:', melpickAddress);
  };

  const onSubmit = (data) => {
    console.log('Form Data: ', data);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header>
          <BackButtonWrapper>
            <BackButton onClick={handleBackClick} />
          </BackButtonWrapper>
          <Title>회원가입</Title>
          <Placeholder />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AgreementSection />

          <EmailRow>
            <InputField
              label='계정 (이메일)'
              id='email'
              type='text'
              placeholder='이메일을 입력하세요'
              error={errors.email}
              {...register('email')}
              required
              maxLength={20}
            />
            <AtSymbol>@</AtSymbol>
            <InputField
              label='도메인 선택'
              id='domain'
              as='select'
              value={domain}
              onChange={handleDomainChange}
              error={errors.domain}
              required
              {...register('domain')}
            >
              <option value='naver.com'>naver.com</option>
              <option value='google.com'>google.com</option>
              <option value='kakao.com'>kakao.com</option>
            </InputField>
          </EmailRow>

          <InputField
            label='비밀번호(숫자, 문자를 조합하여 8자리 이상 입력하세요)'
            id='password'
            type='password'
            placeholder='비밀번호를 입력하세요'
            error={errors.password}
            {...register('password')}
            required
            maxLength={20}
          />

          <InputField
            label='비밀번호 확인'
            id='passwordConfirm'
            type='password'
            placeholder='비밀번호를 한번 더 입력하세요'
            error={errors.passwordConfirm}
            {...register('passwordConfirm')}
            required
            maxLength={20}
          />

          <InputField
            label='닉네임(8글자 이내)'
            id='nickname'
            type='text'
            placeholder='닉네임을 입력하세요'
            error={errors.nickname}
            {...register('nickname')}
            required
            maxLength={8}
            buttonLabel='중복확인'
            onButtonClick={handleNicknameCheck}
          />

          <InputField
            label='인스타'
            id='instar'
            type='text'
            placeholder='인스타그램 아이디를 입력하세요'
            error={errors.instar}
            {...register('instar')}
            required
            maxLength={20}
            buttonLabel='아이디 확인'
            onButtonClick={handleInstagramCheck}
          />

          <RowLabel>
            <InputField
              label='이름'
              id='name'
              type='text'
              placeholder='이름을 입력하세요'
              error={errors.name}
              {...register('name')}
              required
              maxLength={5}
            />
            <InputField
              label='태어난 해'
              id='birthYear'
              as='select'
              value={birthYear}
              onChange={handleBirthYearChange}
              error={errors.birthYear}
              {...register('birthYear')}
              required
            >
              {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </InputField>
          </RowLabel>

          <GenderField>
            <InputFieldLabel>성별</InputFieldLabel>
            <GenderRow>
              <GenderButton
                type='button'
                selected={gender === '여성'}
                onClick={() => handleGenderChange('여성')}
                isSelected={selectedGenderButton === '여성'}
              >
                여성
              </GenderButton>
              <GenderButton
                type='button'
                selected={gender === '남성'}
                onClick={() => handleGenderChange('남성')}
                isSelected={selectedGenderButton === '남성'}
              >
                남성
              </GenderButton>
            </GenderRow>
          </GenderField>

          <InputField
            label='전화번호(11자를 입력하세요)'
            id='phoneNumber'
            type='text'
            placeholder='전화번호를 입력하세요'
            error={errors.phoneNumber}
            {...register('phoneNumber')}
            required
            maxLength={11}
            onInput={handlePhoneNumberChange}
            buttonLabel='본인 인증'
            onButtonClick={handleVerification}
          />

          <RowLabel>
            <InputField
              label='지역'
              id='region'
              as='select'
              value={region}
              onChange={handleRegionChange}
              error={errors.region}
              {...register('region')}
              required
            >
              <option value='서울특별시'>서울특별시</option>
              <option value='경기도'>경기도</option>
            </InputField>

            <InputField
              label='구'
              id='district'
              as='select'
              value={district}
              onChange={handleDistrictChange}
              error={errors.district}
              {...register('district')}
              required
            >
              <option value='강남구'>강남구</option>
              <option value='서초구'>서초구</option>
              <option value='금천구'>금천구</option>
            </InputField>
          </RowLabel>

          <InputField
            label='멜픽 주소설정(영문, 숫자 12글자 이내)'
            id='melpickAddress'
            type='text'
            placeholder='주소를 입력하세요'
            error={errors.melpickAddress}
            {...register('melpickAddress')}
            value={melpickAddress}
            onChange={handleMelpickAddressChange}
            buttonLabel='체크'
            required
            maxLength={12}
            onButtonClick={handleCheckClick}
            prefix='melpick.com/'
          />
          <BlackContainer />
          <BottomBar />
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 105px;
`;

const BackButtonWrapper = styled.div`
  display: flex;
`;

const Placeholder = styled.div`
  width: 24px;
  padding: 0 37px;
`;

const Title = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const EmailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AtSymbol = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const RowLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const GenderField = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InputFieldLabel = styled.label`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
`;

const GenderRow = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const GenderButton = styled.button`
  flex: 1;
  border: ${({ isSelected }) => (isSelected ? '2px solid #f6ae24' : 'none')};
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? '#FFFFFF' : '#EEEEEE')};
  color: ${({ selected }) => (selected ? '#000000' : '#999999')};
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

  &:hover {
    border: 2px solid #f6ae24;
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const BlackContainer = styled.div`
  margin-bottom: 100px;
`;
