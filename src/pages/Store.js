import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Items from '../components/Store/Items.js';

const Store = () => {
  return (
    <StoreContainer>
      <ContentWrapper>
        <Header location='/store' />
        <Items />
      </ContentWrapper>
    </StoreContainer>
  );
};

export default Store;

const StoreContainer = styled.div`
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
