import React from 'react';
import styled from 'styled-components';

const PaymentHistory = () => {
  return (
    <HistoryContainer>
      <h2>결제 내역</h2>
    </HistoryContainer>
  );
};

export default PaymentHistory;

const HistoryContainer = styled.div`
  padding: 20px;
  flex: 1;
`;
