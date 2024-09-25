import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import HangerIcon from '../img/Landing/hangerIcon.svg';
import ZOOCImage from '../img/Home/ExIMG1.svg';
import SANDROImage from '../img/Home/ExIMG1.svg';
import ITMICHAImage from '../img/Home/ExIMG1.svg';

const LandingDetail = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <ScrollIndicator>
          <Arrow>↓</Arrow>
          <span>scroll</span>
        </ScrollIndicator>
        <Hanger src={HangerIcon} alt='hanger icon' />
        <LandingTitle1>
          당신의 취향에 꼭 맞는 <br />
          <BrandHighlight>컨템포러리 브랜드들이</BrandHighlight> <br />
          <MelpicHighlight>멜픽과 함께합니다!</MelpicHighlight>
        </LandingTitle1>
        <BrandList>
          <Brand>
            <BrandImage src={ZOOCImage} alt='ZOOC' />
            <BrandName>ZOOC</BrandName>
          </Brand>
          <Brand>
            <BrandImage src={SANDROImage} alt='SANDRO' />
            <BrandName>SANDRO</BrandName>
          </Brand>
          <Brand>
            <BrandImage src={ITMICHAImage} alt='it MICHA' />
            <BrandName>it MICHA</BrandName>
          </Brand>
        </BrandList>
        <Footer>
          똑똑한 AI가 <br />
          당신도 몰랐던, 당신만의 스타일을 <br />
          매칭해드립니다.
        </Footer>
      </Container>

      <Container style={{ backgroundColor: 'white' }}>
        <LandingTitle2>
          오직 나만의, 나를 위한 상품
          <br />
          <LandingSubtitle2>
            이제 일일이 찾지 마세요
            <br />
            브랜드는 <YellowText>멜픽 pick 해줄게요</YellowText>
          </LandingSubtitle2>
        </LandingTitle2>

        {/* Images arranged in a column */}
        <ColumnBrandList>
          <Brand>
            <BrandImage src={ZOOCImage} alt='ZOOC' />
            <BrandName>ZOOC</BrandName>
          </Brand>
          <Brand>
            <BrandImage src={SANDROImage} alt='SANDRO' />
            <BrandName>SANDRO</BrandName>
          </Brand>
          <Brand>
            <BrandImage src={ITMICHAImage} alt='it MICHA' />
            <BrandName>it MICHA</BrandName>
          </Brand>
        </ColumnBrandList>
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
  margin: 0 auto;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  height: 100vh;
  border: 1px solid ${Theme.colors.gray1};
  background-color: ${({ theme }) => theme.colors.yellow5};
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray2};
  height: 50px;
  margin-bottom: 130px;
`;

const Arrow = styled.div`
  font-size: 18px;
`;

const Hanger = styled.img`
  width: 40px;
  height: 40px;

  margin-bottom: 41px;
`;

const LandingTitle1 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  text-align: center;

  margin-bottom: 50px;
`;

const BrandHighlight = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

const MelpicHighlight = styled.span`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 500;
`;

const BrandList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-behavior: smooth;
  width: 100%;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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

  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
`;

const Footer = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  /* or 176% */
  text-align: center;

  margin-top: 90px;
`;

const LandingTitle2 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  margin-top: 95px;

  margin-bottom: 50px;
`;

const LandingSubtitle2 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  text-align: center;

  margin-top: 11px;
`;

const YellowText = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow};
`;

const ColumnBrandList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
