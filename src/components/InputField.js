import React from 'react';
import styled from 'styled-components';

const InputField = ({ label, id, type, error, ...rest }) => (
  <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    <Input type={type} id={id} {...rest} />
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </InputContainer>
);

export default InputField;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  width: 91%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: ${({ theme }) => theme.colors.pink4};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.pink4};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    padding: 10px;
  }
`;

const ErrorMessage = styled.span`
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 14px;
  margin-top: 5px;
`;
