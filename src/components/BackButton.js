import React from 'react';
import styled from 'styled-components';
import BackButtonIcon from '../img/Home/HomeDetail/BackButton.svg';

const BackButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <Icon src={BackButtonIcon} alt='뒤로 가기' />
    </IconButton>
  );
};

export default BackButton;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
