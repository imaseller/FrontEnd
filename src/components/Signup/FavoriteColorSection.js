import React from 'react';
import styled from 'styled-components';

const FavoriteColorSection = () => (
  <>
    <Label>좋아하는 색상을 선택하세요</Label>
    <Select name='favoriteColorSeq' id='favoriteColorSeq' required>
      <option value='' disabled selected>
        좋아하는 색상을 선택하세요
      </option>
      <ColorOptions />
    </Select>
  </>
);

const ColorOptions = () => (
  <>
    <option value='1' style={{ backgroundColor: 'black', color: 'white' }}>
      Black
    </option>
    <option value='2' style={{ backgroundColor: 'white', color: 'black' }}>
      White
    </option>
    <option value='3' style={{ backgroundColor: 'pink', color: 'black' }}>
      Pink
    </option>
    <option value='4' style={{ backgroundColor: 'navy', color: 'white' }}>
      Navy
    </option>
    <option value='5' style={{ backgroundColor: 'green', color: 'white' }}>
      Green
    </option>
    <option value='6' style={{ backgroundColor: 'blue', color: 'white' }}>
      Blue
    </option>
    <option value='7' style={{ backgroundColor: 'cream', color: 'black' }}>
      Cream
    </option>
    <option value='8' style={{ backgroundColor: 'yellow', color: 'black' }}>
      Yellow
    </option>
    <option value='9' style={{ backgroundColor: 'lilac', color: 'black' }}>
      Lilac
    </option>
    <option value='10' style={{ backgroundColor: 'ivory', color: 'black' }}>
      Ivory
    </option>
    <option value='11' style={{ backgroundColor: 'olive', color: 'white' }}>
      Olive
    </option>
    <option value='12' style={{ backgroundColor: 'orange', color: 'black' }}>
      Orange
    </option>
    <option value='13' style={{ backgroundColor: 'mint', color: 'black' }}>
      Mint
    </option>
    <option value='14' style={{ backgroundColor: 'grey', color: 'black' }}>
      Grey
    </option>
    <option value='15' style={{ backgroundColor: 'camel', color: 'black' }}>
      Camel
    </option>
    <option value='16' style={{ backgroundColor: 'beige', color: 'black' }}>
      Beige
    </option>
    <option value='17' style={{ backgroundColor: 'red', color: 'white' }}>
      Red
    </option>
    <option value='18' style={{ backgroundColor: 'skyblue', color: 'black' }}>
      Sky Blue
    </option>
    <option value='19' style={{ backgroundColor: 'purple', color: 'white' }}>
      Purple
    </option>
    <option value='20' style={{ backgroundColor: 'nude', color: 'black' }}>
      Nude
    </option>
    <option value='21' style={{ backgroundColor: 'khaki', color: 'black' }}>
      Khaki
    </option>
    <option value='22' style={{ backgroundColor: 'wine', color: 'white' }}>
      Wine
    </option>
    <option value='23' style={{ backgroundColor: 'brown', color: 'white' }}>
      Brown
    </option>
    <option value='24' style={{ backgroundColor: 'charcoal', color: 'white' }}>
      Charcoal
    </option>
  </>
);

export default FavoriteColorSection;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  width: 25vw;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;
