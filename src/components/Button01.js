import React from 'react';
import styled from 'styled-components';

const Button01 = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button01;

const StyledButton = styled.button`
  width: 100%;
  min-width: 300px;
  padding: 15px;
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow1};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.yellow2};
    transform: translateY(0);
  }
`;
