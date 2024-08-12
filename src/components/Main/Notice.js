import React from 'react';
import styled from 'styled-components';
import Arrow from '../../img/Main/Arrow.svg';

const Notice = () => {
  return (
    <NoticeContainer>
      <NoticeTag>공지</NoticeTag>
      <NoticeText>2024년 7월 1차 업데이트 예정 공개</NoticeText>

      <Icons>
        <Icon src={Arrow} alt='스케줄' />
      </Icons>
    </NoticeContainer>
  );
};

export default Notice;

const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 0.5px solid #ccc;
  border-radius: 6px;
  padding: 20px 20px;
  margin: 0 20px 20px 20px;
`;

const NoticeTag = styled.div`
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 800;
`;

const NoticeText = styled.div`
  flex: 1;
  margin-left: 20px;
  font-size: 14px;
  color: #000;
`;

const Icons = styled.div`
  font-size: 14px;
  color: #aaa;
`;

const Icon = styled.img`
  width: auto;
  height: auto;
`;
