import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme.js';

const ItemCard = ({ image, brand, description }) => {
  return (
    <CardContainer>
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
  width: 150px;
  margin: 10px;
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
