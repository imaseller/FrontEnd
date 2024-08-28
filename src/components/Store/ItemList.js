import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/Store/ItemCard.js';
import ExIMG1 from '../../img/Home/ExIMG1.svg';
import ExIMG2 from '../../img/Home/ExIMG2.svg';
import ExIMG3 from '../../img/Home/ExIMG3.svg';
import Theme from '../../styles/Theme.js';

const initialItems = [
  {
    id: 1,
    image: ExIMG1,
    brand: 'SANDRO',
    description: '언발 플레어 미니원피스',
    price: 460000,
    discount: 10,
  },
  {
    id: 2,
    image: ExIMG2,
    brand: 'ZOOC',
    description: '볼륨소매 랩 카라 블라우스',
    price: 460000,
    discount: 10,
  },
  {
    id: 3,
    image: ExIMG3,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
    price: 480000,
    discount: 15,
  },
  {
    id: 4,
    image: ExIMG3,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
    price: 480000,
    discount: 15,
  },
];

const truncateText = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};

const ItemList = ({ HeaderContainer }) => {
  const [items, setItems] = useState(initialItems);

  const loadMoreItems = () => {
    const moreItems = initialItems.map((item) => ({
      ...item,
      id: item.id + items.length,
    }));
    setItems((prevItems) => [...prevItems, ...moreItems]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <ListContainer>
      <HeaderContainer />
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
  overflow: hidden;
  margin-bottom: 40px;
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`;
