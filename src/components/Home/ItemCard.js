import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Theme from '../../styles/Theme.js';

const ItemCard = ({ id, image, brand, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${id}`);
  };

  return (
    <CardContainer onClick={handleClick}>
      <Image src={image} alt={brand} />
      <Brand>{brand}</Brand>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default ItemCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  cursor: pointer;
  margin: 6px;
  &:first-child {
    margin-left: 0;
  }
`;

const Image = styled.img`
  width: 140px;
  height: 210px;
  border-radius: 4px;
`;

const Brand = styled.h3`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 5px;
  font-size: 12px;
  ${Theme.fonts.default3}
  color: ${Theme.colors.gray2};
`;
