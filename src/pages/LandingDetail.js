import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import HangerIcon from '../img/Landing/hangerIcon.svg';
import ZOOCImage from '../img/Landing/ZoocImg.svg';
import SANDROImage from '../img/Landing/ItMichaa.svg';
import ITMICHAImage from '../img/Landing/Sandro.svg';
import ServiceImg1 from '../img/Landing/ServiceImg1.svg';
import ServiceImg2 from '../img/Landing/ServiceImg2.svg';
import ServiceImg3 from '../img/Landing/ServiceImg3.svg';
import ScreenImg1 from '../img/Landing/ScreenImg1.svg';
import ScreenImg2 from '../img/Landing/ScreenImg2.svg';
import ScreenImg3 from '../img/Landing/ScreenImg3.svg';

import LeftArrowIcon from '../img/Landing/left-arrow.svg';
import RightArrowIcon from '../img/Landing/right-arrow.svg';
import LastImg from '../img/Landing/LastImg.svg';
import { useNavigate } from 'react-router-dom';

const LandingDetail = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

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
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/LandingDetail');
  };

  const handlePrevClick = () =>
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === 0 ? screens.length - 1 : prevIndex - 1
    );
  const handleNextClick = () =>
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === screens.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <ScrollIndicator />
        <Hanger src={HangerIcon} alt='hanger icon' />
        <LandingTitle1>
          당신의 취향에 꼭 맞는 <br />
          <BrandHighlight>컨템포러리 브랜드들이</BrandHighlight> <br />
          <MelpicHighlight>멜픽과 함께합니다!</MelpicHighlight>
        </LandingTitle1>
        <BrandList>
          {[ZOOCImage, SANDROImage, ITMICHAImage].map((img, idx) => (
            <Brand key={idx}>
              <BrandImage src={img} alt={`brand-${idx}`} />
              <BrandName>{['ZOOC', 'SANDRO', 'it MICHA'][idx]}</BrandName>
            </Brand>
          ))}
        </BrandList>
        <Comment>
          똑똑한 AI가 <br />
          당신도 몰랐던, 당신만의 스타일을 <br />
          매칭해드립니다.
        </Comment>
      </Container>
      <Container bgColor='white'>
        <LandingTitle2>
          오직 나만의, 나를 위한 상품
          <LandingSubtitle2>
            이제 일일이 찾지 마세요
            <br />
            브랜드는 <YellowText>멜픽이 PICK 해줄게요!</YellowText>
          </LandingSubtitle2>
        </LandingTitle2>

        <ColumnServiceList>
          {[ServiceImg1, ServiceImg2, ServiceImg3].map((img, idx) => (
            <Service key={idx}>
              <ServiceImg src={img} alt={`service-${idx}`} />
            </Service>
          ))}
        </ColumnServiceList>
      </Container>

      <Container style={{ backgroundColor: '#F5F5F5' }}>
        <LandingTitle3>
          <MelpicHighlight>melpik</MelpicHighlight>은 <br />
          <BrandHighlight>어떤 서비스인가요?</BrandHighlight> <br />
          <LandingSubtitle3>
            {screens[currentScreenIndex].subtitle}
          </LandingSubtitle3>
        </LandingTitle3>
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

      <Container style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <LastScreenImage
          src={LastImg}
          alt='Landing Last Image'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <LandingTitle4 style={{ position: 'relative', zIndex: 1 }}>
          현재 <Yellow>N명</Yellow>의 인플루언서들이 <br /> melpik을 신청했어요!
          <ButtonWrapper>
            <StartButton onClick={handleStartClick}>
              melpik 시작하기
            </StartButton>
          </ButtonWrapper>
          <LandingSubtitle4>
            사전예약 마감까지 <BoldText>N일 00:00</BoldText>시간 남았어요!
          </LandingSubtitle4>
        </LandingTitle4>

        <Footer>
          <Line1>
            <FooterItem>
              <FooterLabel>상호</FooterLabel>
              <FooterSpan>멜픽 melpik</FooterSpan>
            </FooterItem>
            <FooterItem>
              <FooterLabel>대표</FooterLabel>
              <FooterSpan>황유민</FooterSpan>
            </FooterItem>
            <FooterItem>
              <FooterLabel>개인정보책임자</FooterLabel>
              <FooterSpan>황유민</FooterSpan>
            </FooterItem>
          </Line1>
          <FooterItem>
            <FooterLabel>소재지</FooterLabel>
            <FooterSpan>서울 ~</FooterSpan>
          </FooterItem>
          <FooterItem>
            <FooterLabel>이메일</FooterLabel>
            <FooterSpan>대표메일</FooterSpan>
          </FooterItem>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default LandingDetail;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 400px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  height: 100%;
  min-height: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.yellow5};
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: 35px;
  margin-bottom: 117px;
  &::before {
    content: '↓';
    font-size: 14px;
    color: #767676;
  }
  &::after {
    content: 'scroll';
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;

    color: #767676;
  }
`;

const Hanger = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 56px;
`;

const LandingTitle1 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

const BrandHighlight = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  /* or 200% */
  text-align: center;
`;

const MelpicHighlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  /* or 200% */
  text-align: center;
`;

const BrandList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const BrandImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
`;

const BrandName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
  font-size: 20px;
  text-align: center;
`;

const LandingTitle2 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-top: 95px;
  margin-bottom: 21px;
`;

const LandingSubtitle2 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  /* or 176% */
  text-align: center;

  margin-top: 21px;
`;

const YellowText = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 30px;
  /* or 176% */
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow};
`;

const ColumnServiceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ServiceImg = styled.img`
  width: 300px;
  height: 190px;
  object-fit: cover;
  border-radius: 20px;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const ScreenImageContainer = styled.div`
  width: 220px;
  height: 466px;
  left: calc(50% - 220px / 2 - 480px);
  top: 315px;

  background: url(image.png);
  filter: drop-shadow(3px 5px 15px rgba(18, 18, 18, 0.15));
  border-radius: 10px;
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
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

const ArrowIcon = styled.img`
  width: 11.64px;
  height: 19.44px;
`;

const LandingSubtitle3 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  /* or 176% */
  text-align: center;

  margin-top: 50px;
`;
const LandingTitle3 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  margin-top: 95px;
  margin-bottom: 34px;
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;
`;

const Dot = styled.div`
  width: ${(props) => (props.isActive ? '20px' : '10px')};
  height: 10px;
  background-color: ${(props) => (props.isActive ? '#F5AB35' : '#D9D9D9')};
  border-radius: 100px;
`;

const StartButton = styled.button`
  width: 300px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 30px;

  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
`;

const LastScreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const LandingTitle4 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  text-align: center;

  margin-top: 82px;
`;

const Yellow = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
`;

const LandingSubtitle4 = styled.h2`
  font-family: 'NanumSquare Neo OTF';
  font-size: 16px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 33px;
  margin-bottom: 9px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  text-align: left;
  padding: 28px 0;
  font-family: 'NanumSquare Neo OTF';
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const FooterItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin: 0 28px;
`;

const FooterLabel = styled.label`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;

  margin-right: 5px;
`;

const FooterSpan = styled.span`
  font-weight: 400;
  font-family: 'Noto Sans';
  font-style: normal;
  font-size: 10px;
  line-height: 18px;
`;

const Line1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const BoldText = styled.span`
  font-weight: 800;
`;

const Comment = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  margin-top: 90px;
`;
