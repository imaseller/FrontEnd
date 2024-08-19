import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import ExIMG1 from '../../img/Home/ExIMG1.svg';
import ExIMG2 from '../../img/Home/ExIMG2.svg';
import ExIMG3 from '../../img/Home/ExIMG3.svg';
import Theme from '../../styles/Theme.js';

const items = [
  { image: ExIMG1, brand: 'SANDRO', description: '언발 플레어 미니원피스' },
  { image: ExIMG2, brand: 'ZOOC', description: '볼륨소매 랩 카라 블라우스' },
  {
    image: ExIMG3,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
  },
];

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
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </ItemsWrapper>
    </ListContainer>
  );
};

export default ItemList;

const ListContainer = styled.div`
  padding: 20px;
  background-color: ${Theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
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
  justify-content: space-between;
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
