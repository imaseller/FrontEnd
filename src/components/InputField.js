import React from 'react';
import styled from 'styled-components';

const InputField = React.forwardRef(
  ({ label, id, type, error, ...rest }, ref) => (
    <InputContainer>
      <Label htmlFor={id}>
        {label.split('(')[0]}
        {label.includes('(') && (
          <GrayText>{`(${label.split('(')[1]}`}</GrayText>
        )}
      </Label>
      <Input type={type} id={id} ref={ref} {...rest} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
);

InputField.displayName = 'InputField';

export default InputField;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
`;

const GrayText = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
`;

const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 4px;
  padding: 0 11px;
  height: 57px;
`;

const ErrorMessage = styled.span`
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 14px;
  margin-top: 5px;
`;
