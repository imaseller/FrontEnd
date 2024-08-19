import React from 'react';
import styled from 'styled-components';

const DeliveryContent = () => {
  return (
    <ContentContainer>
      <h1>배송 내역</h1>
      <p>여기에서 사용자의 배송 내역을 확인할 수 있습니다.</p>
      {/* 배송 데이터와 상태를 여기에 표시할 수 있습니다 */}
    </ContentContainer>
  );
};

export default DeliveryContent;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
`;
