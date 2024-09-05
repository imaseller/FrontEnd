import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignup } from '../../hooks/ValidationYup';
import BackButton from '../../components/BackButton';
import InputField from '../../components/InputField';
import AgreementSection from '../../components/inventory/AgreementSection';
import Theme from '../../styles/Theme';
import BottomBar from '../../components/Signup/BottomBar';

const ContemporarySettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignup),
    mode: 'all',
  });

  const [productCount, setProductCount] = useState('상품 6개');
  const [exposureFrequency, setExposureFrequency] = useState('월 2회');

  const handleBackClick = () => {
    window.history.back();
  };

  const onSubmit = (data) => {
    console.log('Form Data: ', data);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header>
          <BackButton onClick={handleBackClick} />
          <Title>컨템포러리 설정</Title>
          <Placeholder />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AgreementSection />

          {/* 기본정보 Section */}
          <Row>
            <InputField
              label='기본정보'
              id='height'
              as='select'
              error={errors.height}
              {...register('height')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='160'>160 cm</option>
              <option value='165'>165 cm</option>
              <option value='170'>170 cm</option>
              <option value='175'>175 cm</option>
            </InputField>
            <InputField
              label=''
              id='size'
              as='select'
              error={errors.size}
              {...register('size')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='S'>S</option>
              <option value='M'>M</option>
              <option value='L'>L</option>
            </InputField>
          </Row>

          {/* 착용스펙 Section */}
          <Row>
            <InputField
              label='착용스펙 상세입력'
              id='dress'
              as='select'
              error={errors.dress}
              {...register('dress')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='원피스'>원피스</option>
              <option value='2'>1</option>
              <option value='2'>2</option>
            </InputField>
            <InputField
              label=''
              id='top'
              as='select'
              error={errors.top}
              {...register('top')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='상의'>상의</option>
              <option value='1'>1</option>
            </InputField>
            <InputField
              label=''
              id='bottom'
              as='select'
              error={errors.bottom}
              {...register('bottom')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='하의'>하의</option>
              <option value='1'>1</option>
            </InputField>
          </Row>

          {/* 선호 브랜드 선택 */}
          <Row>
            <InputField
              label='선호 브랜드 선택(최대 3가지)'
              id='brand'
              type='text'
              placeholder='브랜드 3가지를 선택하세요'
              error={errors.brand}
              {...register('brand')}
              required
              maxLength={20}
              buttonLabel='선택하기'
              onInvalid={(e) => e.preventDefault()}
            />
          </Row>

          {/* 상품 노출수 설정 Section */}
          <Row>
            <InputField
              label='상품 노출수 설정'
              id='product'
              as='select'
              value={productCount}
              onChange={(e) => setProductCount(e.target.value)}
              error={errors.productCount}
              {...register('productCount')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='상품 6개'>상품 6개</option>
              <option value='상품 12개'>상품 12개</option>
            </InputField>

            <InputField
              label='노출기간 설정'
              id='exposureFrequency'
              as='select'
              value={exposureFrequency}
              onChange={(e) => setExposureFrequency(e.target.value)}
              error={errors.exposureFrequency}
              {...register('exposureFrequency')}
              required
              onInvalid={(e) => e.preventDefault()}
            >
              <option value='월 1회'>월 1회</option>
              <option value='월 2회'>월 2회</option>
              onInvalid={(e) => e.preventDefault()}
            </InputField>
          </Row>

          <BlackContainer />
          <BottomBar buttonText='설정완료' />
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default ContemporarySettings;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
  border: 1px solid ${Theme.colors.gray1};
`;

const Placeholder = styled.div`
  width: 24px;
  padding: 0 37px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 105px;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const BlackContainer = styled.div`
  margin-bottom: 100px;
`;
