import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '../styles/Theme.js';
import ExIMG1 from '../img/Home/ExIMG1.svg';
import ExIMG2 from '../img/Home/ExIMG2.svg';
import ExIMG3 from '../img/Home/ExIMG3.svg';
import SizeInfoImageSrc from '../img/Home/HomeDetail/SizeInfo.svg'; // Import your uploaded image as a source

import Header from '../components/Home/HomeDetail/Header.js';
import ImageSlider from '../components/Home/HomeDetail/ImageSlider.js';
import ProductInfo from '../components/Home/HomeDetail/ProductInfo.js';
import PriceTrendChart from '../components/Home/HomeDetail/PriceTrendChart.js';
import ProductOptions from '../components/Home/HomeDetail/ProductOptions.js';
import PaymentMethod from '../components/Home/HomeDetail/PaymentMethod.js';

const HomeDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const images = [ExIMG1, ExIMG2, ExIMG3];

  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    let startX = e.clientX;

    const handleMouseMove = (e) => {
      const moveX = e.clientX - startX;
      if (Math.abs(moveX) > 50) {
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

  const priceHistory = [
    { date: '출고', price: 760000 },
    { date: '05.20', price: 684000 },
    { date: '06.20', price: 608000 },
    { date: '07.20', price: 608000 },
    { date: '현재', price: 608000 },
  ];

  return (
    <DetailContainer>
      <Header />
      <ImageSlider
        images={images}
        currentImageIndex={currentImageIndex}
        handleSwipeLeft={handleSwipeLeft}
        handleSwipeRight={handleSwipeRight}
        handleMouseDown={handleMouseDown}
      />
      <ProductInfo item={item} />
      <PaymentMethod />
      <ProductOptions
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <PriceTrendChart data={priceHistory} />
      <SizeInfoContainer>
        <label>사이즈 정보</label>
        <img src={SizeInfoImageSrc} alt='Size Information' />
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>A</TableHeader>
          <TableHeader>B</TableHeader>
          <TableHeader>C</TableHeader>
          <TableHeader>D</TableHeader>
          <TableHeader>E</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>S (44)</TableCell>
          <TableCell>37</TableCell>
          <TableCell>85</TableCell>
          <TableCell>72</TableCell>
          <TableCell>57</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>M (55)</TableCell>
          <TableCell>38</TableCell>
          <TableCell>86</TableCell>
          <TableCell>74</TableCell>
          <TableCell>59</TableCell>
          <TableCell>102</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>L (66)</TableCell>
          <TableCell>39</TableCell>
          <TableCell>87</TableCell>
          <TableCell>80</TableCell>
          <TableCell>60</TableCell>
          <TableCell>104</TableCell>
        </TableRow>
      </SizeInfoContainer>
      <OrderButton>제품 주문하기</OrderButton>
    </DetailContainer>
  );
};

export default HomeDetail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`;

const SizeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #dddddd;
  background-color: rgba(255, 255, 255, 0.96);
  width: 100%;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border: 1px solid #dddddd;
`;

const TableHeader = styled.div`
  font-weight: 900;
  font-size: 12px;
  color: #000000;
  background-color: ${Theme.colors.gray1};
  flex: 1;
  text-align: center;
  padding: 10px 0;
`;

const TableCell = styled.div`
  font-weight: 700;
  font-size: 12px;

  color: #000000;
  flex: 1;
  text-align: center;
  padding: 8px 0;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${Theme.colors.yellow};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
`;
