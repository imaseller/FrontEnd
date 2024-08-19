import React from 'react';
import styled from 'styled-components';
import Header from '../components/Main/Header.js';
import PaymentHistory from '../components/PamentDetail/PamentHistory.js';
import BottomNav from '../components/Main/BottomNav';

const PaymentDetail = () => {
  return (
    <PaymentDetailContainer>
      <ContentWrapper>
        <Header />
        <PaymentHistory />
      </ContentWrapper>
    </PaymentDetailContainer>
  );
};

export default PaymentDetail;

const PaymentDetailContainer = styled.div`
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
