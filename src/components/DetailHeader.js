import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DetailHeader = ({ icons }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {icons.map((icon) => (
        <IconContainer key={icon.alt} onClick={() => navigate(icon.route)}>
          <Icon src={icon.src} alt={icon.alt} />
          <IconText>{icon.alt}</IconText>
        </IconContainer>
      ))}
    </HeaderContainer>
  );
};

export default DetailHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

const IconText = styled.span`
  font-size: 12px;
  color: #333;
`;
