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
    { src: MonitoringIcon, alt: '모니터링', route: '/monitoring' },
    { src: SettlementIcon, alt: '정산 내역', route: '/settlement' },
    { src: DeliveryIcon, alt: '배송 내역', route: '/delivery' },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <MainContainer>
        <ContentWrapper>
          <Header />
          <Notice />
          <DetailHeader icons={homeIcons} />
          <Divider />
          <Content>
            <ItemList />
            <ItemList />
            <ItemList />
          </Content>
        </ContentWrapper>
        <Footer>
          <Divider />
          <FooterText>
            <span className='highlight'> (주) 팀리프트 </span> . 235-87-01284 .
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
  padding: 20px 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background-color: #eeeeee;
  margin: 20px;
`;

const FooterText = styled.div`
  ${({ theme }) => theme.fonts.default2};
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
  margin-left: 20px;

  .highlight {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
  }
`;

const FooterCopyright = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #f2a900;
  text-align: left;
  margin: 20px;
`;
