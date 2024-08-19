import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Content from '../components/Settlement/SettlementContent.js';
import BottomNav from '../components/Home/BottomNav';

const Settlement = () => {
  return (
    <SettlementContainer>
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
      <BottomNav />
    </SettlementContainer>
  );
};

export default Settlement;

const SettlementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
