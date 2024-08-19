import React from 'react';
import styled from 'styled-components';

const SettlementContent = () => {
  return (
    <ContentContainer>
      <h1>정산 내역</h1>
      <p>여기에서 사용자의 정산 내역을 확인할 수 있습니다.</p>
      {/* 정산 데이터와 상세 내용을 여기에 표시할 수 있습니다 */}
    </ContentContainer>
  );
};

export default SettlementContent;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
`;
