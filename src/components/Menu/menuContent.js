import React from 'react';
import styled from 'styled-components';

const inventoryContent = () => {
  return (
    <ContentContainer>
      <h2>메뉴 정보</h2>
    </ContentContainer>
  );
};

export default inventoryContent;

const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
`;