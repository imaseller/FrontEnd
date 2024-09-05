import React from 'react';
import styled from 'styled-components';

const Schedule = () => {
  return (
    <ScheduleContainer>
      <Title>예약 스케줄 목록</Title>
      <ScheduleList>
        {/* Reservation Schedule */}
        <ScheduleItem>
          <Header>
            <Icon className='reserved' />
            <Details>
              <Season>2024 가을 시즌 2nd.</Season>
              <Date>9월 16일 (월) ~ 9월 27일 (금)</Date>
              <Info>스케줄 노출일자: 9월 18일 (수) | 선택한 작품: 6가지</Info>
            </Details>
          </Header>
        </ScheduleItem>

        {/* In Progress Schedule */}
        <ScheduleItem>
          <Header>
            <Icon className='in-progress' />
            <Details>
              <Season>2024 가을 시즌 1st.</Season>
              <Date>9월 2일 (월) ~ 9월 13일 (금)</Date>
              <Info>스케줄 노출일자: 9월 4일 (수) | 선택한 작품: 6가지</Info>
            </Details>
          </Header>
        </ScheduleItem>

        {/* Future Schedule */}
        <ScheduleItem>
          <Header>
            <Icon className='future' />
            <Details>
              <Season>2024 여름 시즌 6th.</Season>
              <Date>미진행</Date>
            </Details>
            <ActionButton>스케줄 예약하기</ActionButton>
          </Header>
        </ScheduleItem>

        {/* Past Schedule */}
        <ScheduleItem>
          <Header>
            <Icon className='past' />
            <Details>
              <Season>2024 여름 시즌 5th.</Season>
              <Date>8월 5일 (월) ~ 8월 16일 (금)</Date>
              <Info>스케줄 노출일자: 8월 7일 (수) | 선택한 작품: 6가지</Info>
            </Details>
          </Header>
        </ScheduleItem>
      </ScheduleList>
    </ScheduleContainer>
  );
};

export default Schedule;

const ScheduleContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ScheduleItem = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;

  &.reserved {
    background-color: gray;
  }

  &.in-progress {
    background-color: yellow;
  }

  &.future {
    background-color: blue;
  }

  &.past {
    background-color: lightgray;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Season = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const Date = styled.span`
  color: #888;
`;

const Info = styled.span`
  color: #555;
  font-size: 14px;
`;

const ActionButton = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
