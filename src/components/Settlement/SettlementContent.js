import React from 'react';
import styled from 'styled-components';

const SettlementContent = () => {
  return (
    <ContentContainer>
      <h1>정산 내역</h1>
      <p>여기에서 사용자의 정산 내역을 확인할 수 있습니다.</p>
    </ContentContainer>
  );
};

export default SettlementContent;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  flex: 1;
`;
