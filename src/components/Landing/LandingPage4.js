// src/components/Landing/LandingPage4.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '../../img/Landing/left-arrow.svg';
import RightArrowIcon from '../../img/Landing/right-arrow.svg';
import ScreenImg1 from '../../img/Landing/ScreenImg1.svg';
import ScreenImg2 from '../../img/Landing/ScreenImg2.svg';
import ScreenImg3 from '../../img/Landing/ScreenImg3.svg';
import Theme from '../../styles/Theme';

const LandingPage4 = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const navigate = useNavigate();

  const screens = [
    {
      img: ScreenImg1,
      subtitle: (
        <>
          인스타그램으로 나의 스타일 파악 후 <br />
          브랜드 매칭하기
        </>
      ),
    },
    { img: ScreenImg2, subtitle: '노출 & 포스팅할 제품 선택하기' },
    {
      img: ScreenImg3,
      subtitle: (
        <>
          콘텐츠 제작, 팔로워들과 소통하며 <br />
          판매 수익 창출
        </>
      ),
    },
  ];

  const handlePrevClick = () =>
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === 0 ? screens.length - 1 : prevIndex - 1
    );

  const handleNextClick = () =>
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === screens.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <Container bgColor='#F5F5F5'>
      <LandingTitle3>
        <MelpicHighlight>melpik</MelpicHighlight>은 <br />
        <BrandHighlight>어떤 서비스인가요?</BrandHighlight>
      </LandingTitle3>
      <LandingSubtitle3>
        {screens[currentScreenIndex].subtitle}
      </LandingSubtitle3>
      <ScreenContainer>
        <ArrowButton onClick={handlePrevClick}>
          <ArrowIcon src={LeftArrowIcon} alt='Previous' />
        </ArrowButton>
        <ScreenImageContainer>
          <ScreenImage src={screens[currentScreenIndex].img} alt='Screen' />
        </ScreenImageContainer>
        <ArrowButton onClick={handleNextClick}>
          <ArrowIcon src={RightArrowIcon} alt='Next' />
        </ArrowButton>
      </ScreenContainer>
      <PaginationDots>
        {screens.map((_, idx) => (
          <Dot key={idx} isActive={currentScreenIndex === idx} />
        ))}
      </PaginationDots>
    </Container>
  );
};

export default LandingPage4;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 20px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  min-height: 900px;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid ${Theme.colors.gray1};
  border-right: 1px solid ${Theme.colors.gray1};
`;

const LandingTitle3 = styled.h1`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const BrandHighlight = styled.span`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const MelpicHighlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

const LandingSubtitle3 = styled.p`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  height: 60px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.black};
`;

const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  max-width: 800px;
`;

const ScreenImageContainer = styled.div`
  width: 220px;
  height: 466px;
  background: #f0f0f0;
  filter: drop-shadow(3px 5px 15px rgba(18, 18, 18, 0.15));
  border-radius: 10px;
  overflow: hidden;
`;

const ScreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArrowButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 10px;
  z-index: 1;

  &:first-of-type {
    left: 0px;
  }

  &:last-of-type {
    right: 0px;
  }
`;

const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const Dot = styled.div`
  width: ${(props) => (props.isActive ? '20px' : '10px')};
  height: 10px;
  background-color: ${(props) => (props.isActive ? '#F5AB35' : '#D9D9D9')};
  border-radius: 100px;
  transition: width 0.3s, background-color 0.3s;
`;

const LandingTitle4 = styled.h1`
  height: 60px;
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  margin-top: 82px;
  color: ${({ theme }) => theme.colors.black};
`;

const Yellow = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
`;

const LandingSubtitle4 = styled.h2`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
