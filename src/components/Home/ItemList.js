import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import ExIMG1 from '../../img/Home/ExIMG1.svg';
import Theme from '../../styles/Theme.js';

const items = [
  {
    id: 1,
    image: ExIMG1,
    brand: 'SANDRO',
    description: '언발 플레어 미니원피스',
  },
  {
    id: 2,
    image: ExIMG1,
    brand: 'ZOOC',
    description: '볼륨소매 랩 카라 블라우스',
  },
  {
    id: 3,
    image: ExIMG1,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
  },
  {
    id: 4,
    image: ExIMG1,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
  },
];

const truncateText = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};

const ItemList = () => {
  return (
    <ListContainer>
      <HeaderContainer>
        <div>
          <Title>
            매칭된 <Highlight>New</Highlight> 아이템
          </Title>
          <Subtitle>8월 1주차 / 2주차 아이템</Subtitle>
        </div>
        <MoreButton>더보기</MoreButton>
      </HeaderContainer>
      <ItemsWrapper>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            {...item}
            description={truncateText(item.description, 12)}
          />
        ))}
      </ItemsWrapper>
    </ListContainer>
  );
};

export default ItemList;

const ListContainer = styled.div`
  background-color: ${Theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  ${Theme.fonts.default1}
  margin-bottom: 5px;
`;

const Highlight = styled.span`
  color: ${Theme.colors.yellow};
  font-weight: bold;
`;

const Subtitle = styled.p`
  ${Theme.fonts.default2}
  color: ${Theme.colors.gray1};
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MoreButton = styled.button`
  ${Theme.fonts.default0}
  padding: 10px 13px;
  background-color: ${Theme.colors.white};
  color: ${Theme.colors.Black1};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;
