import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import Theme from '../styles/Theme.js';
import ExIMG1 from '../img/Home/ExIMG1.svg';
import ExIMG2 from '../img/Home/ExIMG2.svg';
import ExIMG3 from '../img/Home/ExIMG3.svg';

const ItemDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [ExIMG1, ExIMG2, ExIMG3];

  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    let startX = e.clientX;

    const handleMouseMove = (e) => {
      const moveX = e.clientX - startX;
      if (Math.abs(moveX) > 50) {
        // Arbitrary value to trigger swipe
        if (moveX > 0) {
          handleSwipeRight();
        } else {
          handleSwipeLeft();
        }
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, []);

  const item = {
    image: images[currentImageIndex],
    brand: 'SANDRO',
    description: '언발 플레어 미니 원피스',
    originalPrice: 760000,
    discountPrice: 608000,
    discountPercent: 20,
  };

  return (
    <DetailContainer>
      <Header>
        <BackButton>&lt;</BackButton>
        <CartButton>
          <CartIcon src='/path/to/cart-icon.svg' alt='Cart' />
        </CartButton>
      </Header>
      <ImageWrapper>
        <ImageContainer {...handlers} onMouseDown={handleMouseDown}>
          <Image src={item.image} alt={item.brand} />
        </ImageContainer>
        <IndicatorContainer>
          {images.map((_, index) => (
            <Indicator key={index} active={index === currentImageIndex} />
          ))}
        </IndicatorContainer>
      </ImageWrapper>
      <InfoContainer>
        <CategoryText>패션 &gt; 브랜드 &gt; {item.brand}</CategoryText>
        <BrandText>{item.brand}</BrandText>
        <DescriptionText>{item.description}</DescriptionText>
        <PriceContainer>
          <OriginalPrice>{item.originalPrice.toLocaleString()}원</OriginalPrice>
          <Discount>
            <DiscountPercent>{item.discountPercent}%</DiscountPercent>
            <DiscountPrice>
              {item.discountPrice.toLocaleString()}원
            </DiscountPrice>
          </Discount>
        </PriceContainer>
        <PaymentMethodContainer>
          <PaymentMethod>결제방식 (선택)</PaymentMethod>
          <InstallmentOptions>
            <Option>NOW</Option>
            <Option>6</Option>
            <Option active>12</Option>
            <Option>18</Option>
            <Option>24</Option>
            <Option>36</Option>
          </InstallmentOptions>
        </PaymentMethodContainer>
        <OrderButton>제품 주문하기</OrderButton>
      </InfoContainer>
    </DetailContainer>
  );
};

export default ItemDetail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  background-color: ${Theme.colors.gray0};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  cursor: grab; /* Indicates draggable area */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
`;

const IndicatorContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 10;
`;

const Indicator = styled.div`
  width: 14px;
  height: 14px;
  margin: 0 4px;
  background-color: ${(props) =>
    props.active ? Theme.colors.yellow : Theme.colors.gray1};
  border-radius: 50%;
`;

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

const PaymentMethodContainer = styled.div`
  margin-bottom: 16px;
`;

const PaymentMethod = styled.p`
  font-size: 14px;
  color: ${Theme.colors.gray2};
  margin-bottom: 8px;
`;

const InstallmentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Option = styled.button`
  background-color: ${(props) =>
    props.active ? Theme.colors.yellow : Theme.colors.gray3};
  border: none;
  border-radius: 4px;
  padding: 12px;
  color: ${Theme.colors.black};
  font-size: 14px;
  cursor: pointer;
  margin: 4px;
  width: 40px;
  height: 40px;
  text-align: center;

  &:hover {
    background-color: ${Theme.colors.yellow};
  }
`;

const OrderButton = styled.button`
  background-color: ${Theme.colors.yellow};
  border: none;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  color: ${Theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
