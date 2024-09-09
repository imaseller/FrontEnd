import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Content from '../components/PageSettings/PageSettingsContent.js';
import BottomNav from '../components/Home/BottomNav';
import Theme from '../styles/Theme';

const PageSettings = () => {
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

export default PageSettings;

const AnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid ${Theme.colors.gray1};
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
