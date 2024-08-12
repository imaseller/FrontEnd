import React from 'react';
import styled from 'styled-components';

const BirthdateSection = () => (
  <BirthdateWrapper>
    <Label>생년월일</Label>
    <BirthdateContainer>
      <Select name='birthYear' id='birthYear' required>
        <option value='' disabled selected>
          년도를 선택하세요
        </option>
        {[...Array(100)].map((_, i) => {
          const year = new Date().getFullYear() - i;
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </Select>
      <Select name='birthMonth' id='birthMonth' required>
        <option value='' disabled selected>
          월을 선택하세요
        </option>
        {[...Array(12)].map((_, i) => {
          const month = i + 1;
          return (
            <option key={month} value={month}>
              {month}
            </option>
          );
        })}
      </Select>
      <Select name='birthDay' id='birthDay' required>
        <option value='' disabled selected>
          일을 선택하세요
        </option>
        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          return (
            <option key={day} value={day}>
              {day}
            </option>
          );
        })}
      </Select>
    </BirthdateContainer>
  </BirthdateWrapper>
);

export default BirthdateSection;

const BirthdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.DarkBrown3};
  margin-bottom: 10px;
  text-align: left;
`;

const BirthdateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  select {
    margin-right: 10px;
    flex: 1;
  }

  select:last-child {
    margin-right: 0;
  }
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
