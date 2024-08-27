import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButtonIcon from '../img/Home/HomeDetail/BackButton.svg';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <IconButton onClick={handleClick}>
        <Icon src={BackButtonIcon} alt='뒤로 가기' />
      </IconButton>
    </Container>
  );
};

export default BackButton;

const Container = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const IconButton = styled.button`
  position: fixed;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  width: calc(100% - 32px);
  max-width: 600px;
  padding-left: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
