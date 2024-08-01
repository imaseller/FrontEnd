import React, { useState } from 'react';
import styled from 'styled-components';

const AgreementSection = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
  });

  const handleAllChecked = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setIndividualChecks({
      agree1: newValue,
      agree2: newValue,
      agree3: newValue,
    });
  };

  const handleIndividualCheck = (e) => {
    const { id, checked } = e.target;
    setIndividualChecks((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <div>
      <AllAgreeWrapper>
        <Checkbox
          type='checkbox'
          id='agreeAll'
          checked={allChecked}
          onChange={handleAllChecked}
        />
        <Label htmlFor='agreeAll'>전체 동의</Label>
      </AllAgreeWrapper>
      <CheckboxContainer>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id='agree1'
            required
            checked={individualChecks.agree1}
            onChange={handleIndividualCheck}
          />
          <Label htmlFor='agree1'>서비스 이용약관 동의 (필수)</Label>
          <ViewDetails>전체내용 보기</ViewDetails>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id='agree2'
            required
            checked={individualChecks.agree2}
            onChange={handleIndividualCheck}
          />
          <Label htmlFor='agree2'>개인정보수집 동의 (필수)</Label>
          <ViewDetails>전체내용 보기</ViewDetails>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id='agree3'
            checked={individualChecks.agree3}
            onChange={handleIndividualCheck}
          />
          <Label htmlFor='agree3'>이벤트 알림 수신 동의 (선택)</Label>
          <ViewDetails>전체내용 보기</ViewDetails>
        </CheckboxWrapper>
      </CheckboxContainer>
    </div>
  );
};

export default AgreementSection;

const AllAgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

const ViewDetails = styled.span`
  margin-left: auto;
  margin-right: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.pink4};
  cursor: pointer;
`;
