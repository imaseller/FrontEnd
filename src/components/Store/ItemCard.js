import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Theme from '../../styles/Theme.js';
import ImgAdd from '../../img/Store/ImgAdd.svg';

const ItemCard = ({ id, image, brand, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${id}`);
  };

  return (
    <CardContainer onClick={handleClick}>
      <ImageWrapper>
        <Image src={image} alt={brand} />
        <AddButton src={ImgAdd} alt='Add' />
      </ImageWrapper>
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
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 270px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddButton = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 999;
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
