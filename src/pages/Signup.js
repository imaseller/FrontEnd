import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BackButton from '../components/BackButton';
import Button from '../components/Button01';
import Button02 from '../components/Button02';
import InputField from '../components/InputField.js';
import AgreementSection from '../components/Signup/AgreementSection.js';
import FavoriteBrandsSection from '../components/Signup/FavoriteBrandsSection';
import FavoriteColorSection from '../components/Signup/FavoriteColorSection';
import SizeSelectionSection from '../components/Signup/SizeSelectionSection';
import Theme from '../styles/Theme';

const Signup = () => {
  const [domain, setDomain] = useState('naver.com');
  const [birthYear, setBirthYear] = useState('2000');
  const [gender, setGender] = useState('여성');
  const [selectedGenderButton, setSelectedGenderButton] = useState(null);

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

  return (
    <ThemeProvider theme={Theme}>
      <Header>
        <BackButtonWrapper>
          <BackButton onClick={handleBackClick} />
        </BackButtonWrapper>
        <Title>회원가입</Title>
        <Placeholder />
      </Header>
      <Container>
        <Form>
          <AgreementSection />
          <EmailRow>
            <InputField
              label='계정 (이메일)'
              id='email'
              type='text'
              placeholder='이메일을 입력하세요'
              required
            />
            <AtSymbol>@</AtSymbol>
            <InputField
              label='도메인 선택'
              id='domain'
              as='select'
              value={domain}
              onChange={handleDomainChange}
              required
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
            required
          />
          <InputField
            label='비밀번호 확인'
            id='passwordConfirm'
            type='password'
            placeholder='비밀번호를 한번 더 입력하세요'
            required
          />
          <InputField
            label='닉네임(8글자 이내)'
            id='nickname'
            type='text'
            placeholder='닉네임을 입력하세요'
            required
          />
          <InputField
            label='인스타'
            id='instar'
            type='text'
            placeholder='인스타그램 아이디를 입력하세요'
            required
          />
          <NameAndBirthYearRow>
            <InputField
              label='이름'
              id='name'
              type='text'
              placeholder='이름을 입력하세요'
              required
            />
            <InputField
              label='태어난 해'
              id='birthYear'
              as='select'
              value={birthYear}
              onChange={handleBirthYearChange}
              required
            >
              {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </InputField>
          </NameAndBirthYearRow>

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

          <PhoneRow>
            <PhoneInputWrapper>
              <InputField
                label='본인인증(연락처)'
                id='PhoneNumber'
                type='text'
                placeholder='전화번호를 입력하세요'
                required
                onChange={handlePhoneNumberChange}
              />
              <InlineButton>
                <Button02>인증발송</Button02>
              </InlineButton>
            </PhoneInputWrapper>
          </PhoneRow>

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
  align-items: center;
  padding: 0 27px;
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

const NameAndBirthYearRow = styled.div`
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
`;

const GenderButton = styled.button`
  flex: 1;
  border: ${(props) => (props.isSelected ? '2px solid #f6ae24' : 'none')};
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? '#FFFFFF' : '#EEEEEE')};
  color: ${(props) => (props.selected ? '#000000' : '#999999')};
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

const PhoneRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const InlineButton = styled.div`
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
