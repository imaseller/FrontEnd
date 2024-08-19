import React from 'react';
import styled from 'styled-components';
import Header from '../components/Home/Header.js';
import Notice from '../components/Home/Notice.js';
import DetailHeader from '../components/DetailHeader.js';
import ItemList from '../components/Home/ItemList.js';

const Home = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Header />
        <Notice />
        <DetailHeader />
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
  padding: 20px;
  background-color: #f5f5f5;
`;
