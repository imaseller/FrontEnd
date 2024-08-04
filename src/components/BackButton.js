import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>뒤로가기</Button>;
};

export default BackButton;

const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.DarkBrown4};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.DarkBrown5};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.DarkBrown3};
    transform: translateY(0);
  }
`;
