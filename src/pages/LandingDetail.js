import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import ZOOCImage from '../img/Home/ExIMG1.svg';
import SANDROImage from '../img/Home/ExIMG1.svg';
import ITMICHAImage from '../img/Home/ExIMG1.svg';

const LandingDetail = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <ScrollIndicator>↓ scroll</ScrollIndicator>
        <Title>
          당신의 취향에 꼭 맞는 <br />
          컨템포러리 브랜드들이 <br />
          멜픽과 함께합니다!
        </Title>
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
    </ThemeProvider>
  );
};

export default LandingDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollIndicator = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const BrandList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrandImage = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const BrandName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Footer = styled.div`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 20px;
`;
