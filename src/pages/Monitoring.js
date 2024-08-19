import React from 'react';
import styled from 'styled-components';
import Header from '../components/Home/Header.js';
import Content from '../components/Monitoring/Content.js';

const Monitoring = () => {
  return (
    <MonitoringContainer>
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
    </MonitoringContainer>
  );
};

export default Monitoring;

const MonitoringContainer = styled.div`
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
