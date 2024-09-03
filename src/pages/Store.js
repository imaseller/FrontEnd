import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header.js';
// import Notice from '../components/Home/Notice.js';
import DetailHeader from '../components/DetailHeader.js';
import ItemList from '../components/Store/ItemList.js';
import Theme from '../styles/Theme.js';

import AllIcon from '../img/Store/All.svg';
import BlouseIcon from '../img/Store/Blouse.svg';
import JumpsuitIcon from '../img/Store/Jumpsuit.svg';
import OnepieceIcon from '../img/Store/Onepiece.svg';
import TwopieceIcon from '../img/Store/Twopiece.svg';
import Screen from '../img/Store/Screen.svg';
import SeasonIcon from '../img/Store/Setting.svg';
// const Store = () => {
//   const storeIcons = [
//     { src: AllIcon, alt: '전체', route: '/store/all' },
//     { src: BlouseIcon, alt: '블라우스', route: '/store/blouse' },
//     { src: JumpsuitIcon, alt: '점프수트', route: '/store/jumpsuit' },
//     { src: OnepieceIcon, alt: '원피스', route: '/store/onepiece' },
//     { src: TwopieceIcon, alt: '투피스', route: '/store/twopiece' },
//   ];

const Store = () => {
  const storeIcons = [
    { src: AllIcon, alt: '전체' },
    { src: BlouseIcon, alt: '블라우스' },
    { src: JumpsuitIcon, alt: '점프수트' },
    { src: OnepieceIcon, alt: '원피스' },
    { src: TwopieceIcon, alt: '투피스' },
  ];

  const FilterBar = () => (
    <FilterContainer>
      <ToggleSwitch>
        <input type='checkbox' id='seasonToggle' />
        <SwitchLabel htmlFor='seasonToggle'>계절감</SwitchLabel>
      </ToggleSwitch>
      <IconRow>
        <Icon src={Screen} alt='Screen Icon' />
        <Icon src={SeasonIcon} alt='Season Icon' />
      </IconRow>
    </FilterContainer>
  );

  const ItemContainer1 = () => <CustomHeader></CustomHeader>;

  return (
    <ThemeProvider theme={Theme}>
      <MainContainer>
        <ContentWrapper>
          <Header />
          {/* <Notice /> */}
          <DetailHeader icons={storeIcons} />
          <LinContainer />
          <FilterBar />
          <Content>
            <ItemList HeaderContainer={ItemContainer1} />
          </Content>
        </ContentWrapper>
        <Footer>
          <LinContainer />
          <FooterText>
            <span className='highlight'> (주) 팀리프트 </span> .235-87-01284 .
            2020-서울금천-0973
            <br />
            서울 금천구 디지털로9길 41, 1008호
          </FooterText>
          <FooterCopyright>© 2024 MELPICK.</FooterCopyright>
        </Footer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Store;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
  padding: 105px 27px 0 27px;
  border: 1px solid ${Theme.colors.gray1};
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const LinContainer = styled.div`
  border: 1px solid ${Theme.colors.gray0};
  margin-top: 15px;
  margin-bottom: 20px;
`;

const FooterText = styled.div`
  ${({ theme }) => theme.fonts.default2};
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  .highlight {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    font-size: 12px;
    font-style: normal;
    line-height: 20px;
  }
`;

const FooterCopyright = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${Theme.colors.yellow};
  text-align: left;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const CustomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    width: 60px;
    height: 30px;
    appearance: none;
    background-color: #d9d9d9;
    border-radius: 15px;
    position: relative;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:checked {
      background-color: ${Theme.colors.yellow};
    }

    &:checked::before {
      left: 30px;
    }

    &::before {
      content: '';
      width: 28px;
      height: 28px;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      top: 1px;
      left: 1px;
      transition: left 0.3s;
    }
  }
`;

const SwitchLabel = styled.label`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  margin-left: 10px;
  cursor: pointer;
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
`;
