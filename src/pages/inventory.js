import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/inventory/Content.js';
import Inventory1 from '../img/inventory/Inventory1.svg';
import Inventory2 from '../img/inventory/Inventory2.svg';

const Inventory = () => {
  const data = [
    {
      image: Inventory1,
      title: '컨템포러리 설정',
      dressSize: 'M (55)',
      topSize: 'M (55)',
      bottomSize: 'M (55)',
      brand: 'MICHA, MAJE, SANDRO',
      exposure: 6,
      period: '2',
    },
    {
      image: Inventory2,
      title: '골프웨어 설정',
      dressSize: 'M (55)',
      topSize: 'M (55)',
      bottomSize: 'M (55)',
      brand: 'MICHA, MAJE, SANDRO',
      exposure: 6,
      period: '2',
    },
  ];

  return (
    <InventoryContainer>
      <ContentWrapper>
        <Header />
        <FixedContent>
          <Title>@ Styleweex</Title>
          <FollowerInfo>
            팔로워 <Highlight>504</Highlight> / 멜픽 서비스{' '}
            <Highlight>1</Highlight>
          </FollowerInfo>
          <Divider />
        </FixedContent>
        <ScrollableContent>
          {data.map((item, index) => (
            <Content key={index} item={item} />
          ))}
        </ScrollableContent>
      </ContentWrapper>
    </InventoryContainer>
  );
};

export default Inventory;

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
  padding: 125px 27px 0 27px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const FixedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 376px;

  gap: 10px;
`;

const Title = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin: 0;
`;

const FollowerInfo = styled.p`
  font-family: 'NanumSquare Neo OTF';
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  color: #000000;
  margin: 0;
`;

const Highlight = styled.span`
  color: #f6ae24;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #dddddd;
  margin: 20px 0px;
`;

const ScrollableContent = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-top: 20px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
