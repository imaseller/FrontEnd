import React, { useState } from 'react';
import styled from 'styled-components';

const BirthdateSection = () => {
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');

  const handleYearChange = (e) => {
    setBirthYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setBirthMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setBirthDay(e.target.value);
  };

  return (
    <BirthdateWrapper>
      <Label>생년월일</Label>
      <BirthdateContainer>
        <StyledSelect
          name='birthYear'
          id='birthYear'
          value={birthYear}
          onChange={handleYearChange}
          required
        >
          <option value='' disabled>
            년도를 선택하세요
          </option>
          {[...Array(100)].map((_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <option key={year} value={year}>
                {year}년
              </option>
            );
          })}
        </StyledSelect>
        <StyledSelect
          name='birthMonth'
          id='birthMonth'
          value={birthMonth}
          onChange={handleMonthChange}
          required
        >
          <option value='' disabled>
            월을 선택하세요
          </option>
          {[...Array(12)].map((_, i) => {
            const month = i + 1;
            return (
              <option key={month} value={month}>
                {month}월
              </option>
            );
          })}
        </StyledSelect>
        <StyledSelect
          name='birthDay'
          id='birthDay'
          value={birthDay}
          onChange={handleDayChange}
          required
        >
          <option value='' disabled>
            일을 선택하세요
          </option>
          {[...Array(31)].map((_, i) => {
            const day = i + 1;
            return (
              <option key={day} value={day}>
                {day}일
              </option>
            );
          })}
        </StyledSelect>
      </BirthdateContainer>
    </BirthdateWrapper>
  );
};

export default BirthdateSection;

const BirthdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.DarkBrown3};
  margin-bottom: 12px;
  text-align: left;
  letter-spacing: 1px;
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

const StyledSelect = styled.select`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 14px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  option {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: 10px;
  }
`;

const MenuList = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
  text-align: left;
`;
