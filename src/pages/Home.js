import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Notice from '../components/Home/Notice.js';
import DetailHeader from '../components/DetailHeader.js';
import ItemList from '../components/Home/ItemList.js';

// Import icons for the home page
import TypeAnalysisIcon from '../img/Header/HeaderTypeAnalysis.svg';
import MonitoringIcon from '../img/Header/HeaderMonitoring.svg';
import SettlementIcon from '../img/Header/HeaderCalculateDetail.svg';
import DeliveryIcon from '../img/Header/HeaderShippingDetail.svg';

const Home = () => {
  const homeIcons = [
    { src: TypeAnalysisIcon, alt: '유형 분석', route: '/analysis' },
    { src: MonitoringIcon, alt: '모니터링', route: '/monitoring' },
    { src: SettlementIcon, alt: '정산 내역', route: '/settlement' },
    { src: DeliveryIcon, alt: '배송 내역', route: '/delivery' },
  ];

  return (
    <MainContainer>
      <ContentWrapper>
        <Header />
        <Notice />
        <DetailHeader icons={homeIcons} />
        <Content>
          <ItemList />
          <ItemList />
          <ItemList />
        </Content>
      </ContentWrapper>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;

  background-color: #f5f5f5;
`;
