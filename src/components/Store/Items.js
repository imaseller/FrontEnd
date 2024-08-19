import React from 'react';
import styled from 'styled-components';

const StoreItems = () => {
  return (
    <ItemsContainer>
      <h2>구매할 수 있는 상품</h2>
      {/* 상품 리스트를 추가하세요 */}
    </ItemsContainer>
  );
};

export default StoreItems;

const ItemsContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  flex: 1;
`;
