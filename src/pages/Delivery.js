import React from 'react';
import styled from 'styled-components';
import Header from '../components/Main/Header.js';
import Content from '../components/Delivery/DeliveryContent.js';
import BottomNav from '../components/Main/BottomNav';

const Delivery = () => {
  return (
    <DeliveryContainer>
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
      <BottomNav />
    </DeliveryContainer>
  );
};

export default Delivery;

const DeliveryContainer = styled.div`
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
