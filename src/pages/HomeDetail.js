import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '../styles/Theme.js';
import ExIMG1 from '../img/Home/ExIMG1.svg';
import ExIMG2 from '../img/Home/ExIMG2.svg';
import ExIMG3 from '../img/Home/ExIMG3.svg';

import Header from '../components/Home/HomeDetail/Header.js';
import ImageSlider from '../components/Home/HomeDetail/ImageSlider.js';
import ProductInfo from '../components/Home/HomeDetail/ProductInfo.js';
import PriceTrendChart from '../components/Home/HomeDetail/PriceTrendChart.js';
import ProductOptions from '../components/Home/HomeDetail/ProductOptions.js';
import PaymentMethod from '../components/Home/HomeDetail/PaymentMethod.js';
import SizeInfo from '../components/Home/HomeDetail/SizeInfo.js';
import MaterialInfo from '../components/Home/HomeDetail/MaterialInfo.js';
import ProductDetails from '../components/Home/HomeDetail/ProductDetails.js';
import BottomBar from '../components/Home/HomeDetail/BottomBar.js';

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
      <SizeInfo />
      <MaterialInfo />
      <ProductDetails />
      <BottomBar />
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
  padding-bottom: 80px;
`;
