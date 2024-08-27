import React from 'react';
import styled from 'styled-components';

const Button02 = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button02;

const StyledButton = styled.button`
  width: 69px;
  height: 34px;
  background-color: #f6ae24;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  margin-right: 11px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e59c20;
  }

  &:active {
    background-color: #cc8c1c;
  }
`;
