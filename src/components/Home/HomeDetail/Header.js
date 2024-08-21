import React from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';

const Header = () => {
  return (
    <HeaderContainer>
      <BackButton>&lt;</BackButton>
      <CartButton>
        <CartIcon src='/path/to/cart-icon.svg' alt='Cart' />
      </CartButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;
