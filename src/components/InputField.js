import React from 'react';
import styled from 'styled-components';
import Button02 from '../components/Button02';

const InputField = React.forwardRef(
  ({ label, id, type, error, buttonLabel, onButtonClick, ...rest }, ref) => (
    <InputContainer>
      <Label htmlFor={id}>
        {label.split('(')[0]}
        {label.includes('(') && (
          <GrayText>{`(${label.split('(')[1]}`}</GrayText>
        )}
      </Label>
      <InputWrapper>
        <Input type={type} id={id} ref={ref} {...rest} />
        {buttonLabel && (
          <StyledButton onClick={onButtonClick}>{buttonLabel}</StyledButton>
        )}
      </InputWrapper>
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 4px;
  height: 57px;
  overflow: hidden;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 0 11px;
  border: none;
  flex: 1;
  height: 100%;
`;

const StyledButton = styled(Button02)`
  border-left: 1px solid ${({ theme }) => theme.colors.gray1};
`;

const ErrorMessage = styled.span`
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 14px;
  margin-top: 5px;
`;
