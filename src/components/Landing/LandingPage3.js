// src/components/Landing/LandingPage3.js
import React from 'react';
import styled from 'styled-components';
import ServiceImg1 from '../../img/Landing/ServiceImg1.svg';
import ServiceImg2 from '../../img/Landing/ServiceImg2.svg';
import ServiceImg3 from '../../img/Landing/ServiceImg3.svg';
import Theme from '../../styles/Theme';

const LandingPage3 = () => {
  return (
    <Container>
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
  );
};

export default LandingPage3;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
  background-color: #ffffff;
  min-height: 900px;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid ${Theme.colors.gray1};
  border-right: 1px solid ${Theme.colors.gray1};
`;

const LandingTitle2 = styled.h1`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 21px;
  color: ${({ theme }) => theme.colors.black};
`;

const LandingSubtitle2 = styled.p`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 21px;
`;

const YellowText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
`;

const ColumnServiceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
  width: 100%;
  max-width: 1200px;
`;

const Service = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ServiceImg = styled.img`
  width: 320px;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
