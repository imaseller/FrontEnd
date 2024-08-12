import React from 'react';
import styled from 'styled-components';
import Header from '../components/Main/Header.js';
import Notice from '../components/Main/Notice';
import BottomNav from '../components/Main/BottomNav';

const Main = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Header />
        <Notice />
        {/* <Content></Content> */}
      </ContentWrapper>
      <BottomNav />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
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

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;
