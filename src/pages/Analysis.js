import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Content from '../components/Analysis/AnalysisContent.js';
import BottomNav from '../components/Home/BottomNav';

const Analysis = () => {
  return (
    <AnalysisContainer>
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
      <BottomNav />
    </AnalysisContainer>
  );
};

export default Analysis;

const AnalysisContainer = styled.div`
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
