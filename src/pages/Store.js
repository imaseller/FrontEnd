import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import DetailHeader from '../components/DetailHeader.js';
import Items from '../components/Store/Items.js';

import AllIcon from '../img/Store/All.svg';
import BlouseIcon from '../img/Store/Blouse.svg';
import JumpsuitIcon from '../img/Store/Jumpsuit.svg';
import OnepieceIcon from '../img/Store/Onepiece.svg';
import TwopieceIcon from '../img/Store/Twopiece.svg';

const Store = () => {
  const storeIcons = [
    { src: AllIcon, alt: '전체', route: '/store/all' },
    { src: BlouseIcon, alt: '블라우스', route: '/store/blouse' },
    { src: JumpsuitIcon, alt: '점프수트', route: '/store/jumpsuit' },
    { src: OnepieceIcon, alt: '원피스', route: '/store/onepiece' },
    { src: TwopieceIcon, alt: '투피스', route: '/store/twopiece' },
  ];

  return (
    <StoreContainer>
      <ContentWrapper>
        <Header location='/store' />
        <DetailHeader icons={storeIcons} />
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
