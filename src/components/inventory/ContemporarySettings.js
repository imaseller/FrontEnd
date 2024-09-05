import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import BottomBar from '../../components/Signup/BottomBar';

const ContemporarySettings = () => {
  const [height, setHeight] = useState('');
  const [size, setSize] = useState('');
  const [dressType, setDressType] = useState('');
  const [topSize, setTopSize] = useState('');
  const [bottomSize, setBottomSize] = useState('');
  const [brand, setBrand] = useState([]);
  const [exposure, setExposure] = useState(6);
  const [frequency, setFrequency] = useState(2);

  return (
    <SettingsContainer>
      <Title>컨템포러리 설정</Title>
      <Form>
        <Section>
          <Label>키 (cm)</Label>
          <Input
            type='number'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Section>

        <Section>
          <Label>사이즈 (ks)</Label>
          <Input
            type='text'
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </Section>

        <Section>
          <Label>원피스</Label>
          <Select
            value={dressType}
            onChange={(e) => setDressType(e.target.value)}
          >
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
          </Select>
        </Section>

        <Section>
          <Label>상의</Label>
          <Select value={topSize} onChange={(e) => setTopSize(e.target.value)}>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
          </Select>
        </Section>

        <Section>
          <Label>하의</Label>
          <Select
            value={bottomSize}
            onChange={(e) => setBottomSize(e.target.value)}
          >
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
          </Select>
        </Section>

        <Section>
          <Label>브랜드 선택 (최대 3가지)</Label>
          <Input
            type='text'
            placeholder='브랜드 3가지를 선택하세요'
            value={brand.join(', ')}
            onChange={(e) => setBrand(e.target.value.split(','))}
          />
        </Section>

        <Section>
          <Label>상품 노출수</Label>
          <Select
            value={exposure}
            onChange={(e) => setExposure(e.target.value)}
          >
            <option value={6}>6개</option>
            <option value={8}>8개</option>
          </Select>
        </Section>

        <Section>
          <Label>노출기간</Label>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value={2}>월 2회</option>
            <option value={4}>월 4회</option>
          </Select>
        </Section>

        <BottomBar buttonText='설정 완료' />
      </Form>
    </SettingsContainer>
  );
};

export default ContemporarySettings;

const SettingsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
  border: 1px solid ${Theme.colors.gray1};
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #f0a500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
