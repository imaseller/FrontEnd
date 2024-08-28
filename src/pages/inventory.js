import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Content from '../components/inventory/Content.js';
import Theme from '../styles/Theme.js';
const inventory = () => {
  return (
    <InventoryContainer>
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
    </InventoryContainer>
  );
};

export default inventory;

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
  border: 1px solid ${Theme.colors.gray1};
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
