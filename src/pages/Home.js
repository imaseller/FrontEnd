import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header.js';
import Notice from '../components/Home/Notice.js';
import DetailHeader from '../components/DetailHeader.js';
import ItemList from '../components/Home/ItemList.js';
import Theme from '../styles/Theme.js';

import TypeAnalysisIcon from '../img/Header/HeaderTypeAnalysis.svg';
import MonitoringIcon from '../img/Header/HeaderMonitoring.svg';
import SettlementIcon from '../img/Header/HeaderCalculateDetail.svg';
import DeliveryIcon from '../img/Header/HeaderShippingDetail.svg';

const Home = () => {
  const homeIcons = [
    { src: TypeAnalysisIcon, alt: '유형 분석', route: '/analysis' },
    { src: MonitoringIcon, alt: '인벤토리', route: '/monitoring' },
    { src: SettlementIcon, alt: '정산 내역', route: '/settlement' },
    { src: DeliveryIcon, alt: '배송 내역', route: '/delivery' },
  ];

  const ItemContainer1 = () => (
    <CustomHeader>
      <div>
        <CustomTitle>
          매칭된 <CustomHighlight>New</CustomHighlight> 아이템
        </CustomTitle>
        <CustomSubtitle>8월 1주차 / 2주차 아이템</CustomSubtitle>
      </div>
      <CustomMoreButton>더보기</CustomMoreButton>
    </CustomHeader>
  );

  const ItemContainer2 = () => (
    <CustomHeader>
      <div>
        <CustomTitle>
          브랜드 <CustomHighlight>추천</CustomHighlight> 아이템
        </CustomTitle>
        <CustomSubtitle>
          선택하신 브랜드들 중에서 판매율 높은 아이템
        </CustomSubtitle>
      </div>
      <CustomMoreButton>더보기</CustomMoreButton>
    </CustomHeader>
  );

  return (
    <ThemeProvider theme={Theme}>
      <MainContainer>
        <ContentWrapper>
          <Header />
          <Notice />
          <DetailHeader icons={homeIcons} />
          <LinContainer />
          <Content>
            <ItemList HeaderContainer={ItemContainer1} />
            <ItemList HeaderContainer={ItemContainer2} />
          </Content>
        </ContentWrapper>
        <Footer>
          <LinContainer />
          <FooterText>
            <span className='highlight'> (주) 팀리프트 </span> .235-87-01284 .
            2020-서울금천-0973
            <br />
            서울 금천구 디지털로9길 41, 1008호
          </FooterText>
          <FooterCopyright>© 2024 MELPICK.</FooterCopyright>
        </Footer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
  padding: 0 27px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const LinContainer = styled.div`
  border: 1px solid ${Theme.colors.gray0};
  margin: 30px 0;
`;

const FooterText = styled.div`
  ${({ theme }) => theme.fonts.default2};
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  .highlight {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    font-size: 12px;
    font-style: normal;
    line-height: 20px;
  }
`;

const FooterCopyright = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${Theme.colors.yellow};
  text-align: left;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const CustomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CustomTitle = styled.h2`
  ${Theme.fonts.default1}
  margin-bottom: 5px;
`;

const CustomHighlight = styled.span`
  color: ${Theme.colors.yellow};

  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
`;

const CustomSubtitle = styled.p`
  ${Theme.fonts.default2}
  color: ${Theme.colors.gray1};
`;

const CustomMoreButton = styled.button`
  ${Theme.fonts.default0}
  padding: 10px 13px;
  background-color: ${Theme.colors.white};
  color: ${Theme.colors.Black1};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;
