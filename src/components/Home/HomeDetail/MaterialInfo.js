import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';
const MaterialInfo = () => {
  const [thickness, setThickness] = useState(2);
  const [elasticity, setElasticity] = useState(2);
  const [lining, setLining] = useState(1);
  const [texture, setTexture] = useState(2);
  const [transparency, setTransparency] = useState(3);

  const handleOptionClick = (setState, index) => {
    setState(index);
  };

  return (
    <MaterialInfoContainer>
      <Title>제품소재 정보</Title>
      <InfoRow>
        <Label>두께감</Label>
        <Bar>
          <Mark style={{ left: `${thickness * 25}%` }} />
        </Bar>
        <Options>
          {['매우 두꺼움', '두꺼움', '적당', '얇음'].map((option, index) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(setThickness, index)}
              isSelected={thickness === index}
            >
              {option}
            </Option>
          ))}
        </Options>
      </InfoRow>
      <InfoRow>
        <Label>신축성</Label>
        <Bar>
          <Mark style={{ left: `${elasticity * 25}%` }} />
        </Bar>
        <Options>
          {['좋음', '약간있음', '없음', '허리밴딩'].map((option, index) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(setElasticity, index)}
              isSelected={elasticity === index}
            >
              {option}
            </Option>
          ))}
        </Options>
      </InfoRow>
      <InfoRow>
        <Label>안감</Label>
        <Bar>
          <Mark style={{ left: `${lining * 33.3}%` }} />
        </Bar>
        <Options>
          {['전체안감', '부분안감', '기모안감', '없음'].map((option, index) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(setLining, index)}
              isSelected={lining === index}
            >
              {option}
            </Option>
          ))}
        </Options>
      </InfoRow>
      <InfoRow>
        <Label>촉감</Label>
        <Bar>
          <Mark style={{ left: `${texture * 25}%` }} />
        </Bar>
        <Options>
          {['뻣뻣함', '까슬함', '적당', '부드러움'].map((option, index) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(setTexture, index)}
              isSelected={texture === index}
            >
              {option}
            </Option>
          ))}
        </Options>
      </InfoRow>
      <InfoRow>
        <Label>비침</Label>
        <Bar>
          <Mark style={{ left: `${transparency * 25}%` }} />
        </Bar>
        <Options>
          {['비침있음', '약간있음', '부분있음', '없음'].map((option, index) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(setTransparency, index)}
              isSelected={transparency === index}
            >
              {option}
            </Option>
          ))}
        </Options>
      </InfoRow>
    </MaterialInfoContainer>
  );
};

export default MaterialInfo;

const MaterialInfoContainer = styled.div`
  margin: 20px 0;
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  margin-right: 10px;
`;

const Bar = styled.div`
  position: relative;
  height: 4px;
  background-color: #ddd;
  border-radius: 2px;
  flex-grow: 1;
  margin: 0 10px;
`;

const Mark = styled.div`
  position: absolute;
  top: -6px;
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${Theme.colors.yellow};
  border-radius: 50%;
  transition: left 0.3s ease;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Option = styled.div`
  font-size: 12px;
  color: ${(props) => (props.isSelected ? '#000' : '#999')};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;
