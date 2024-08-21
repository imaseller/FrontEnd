import React from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';

const ProductInfo = ({ item }) => {
  return (
    <InfoContainer>
      <CategoryText>패션 &gt; 브랜드 &gt; {item.brand}</CategoryText>
      <BrandText>{item.brand}</BrandText>
      <DescriptionText>{item.description}</DescriptionText>
      <PriceContainer>
        <OriginalPrice>{item.originalPrice.toLocaleString()}원</OriginalPrice>
        <Discount>
          <DiscountPercent>{item.discountPercent}%</DiscountPercent>
          <DiscountPrice>{item.discountPrice.toLocaleString()}원</DiscountPrice>
        </Discount>
      </PriceContainer>
    </InfoContainer>
  );
};

export default ProductInfo;

const InfoContainer = styled.div`
  padding: 0 16px;
  width: 100%;
`;

const CategoryText = styled.p`
  font-size: 12px;
  color: ${Theme.colors.gray2};
`;

const BrandText = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

const DescriptionText = styled.p`
  font-size: 16px;
  color: ${Theme.colors.black};
  margin-bottom: 16px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;

const OriginalPrice = styled.span`
  font-size: 14px;
  color: ${Theme.colors.gray1};
  text-decoration: line-through;
  margin-right: 8px;
`;

const Discount = styled.div`
  display: flex;
  align-items: baseline;
`;

const DiscountPercent = styled.span`
  font-size: 14px;
  color: ${Theme.colors.yellow};
  font-weight: bold;
  margin-right: 8px;
`;

const DiscountPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
