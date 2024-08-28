import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Content from '../components/Menu/menuContent.js';
import Theme from '../styles/Theme.js';
const inventory = () => {
  return (
    <MenuContainer>
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
    </MenuContainer>
  );
};

export default inventory;

const MenuContainer = styled.div`
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
