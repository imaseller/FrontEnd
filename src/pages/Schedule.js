import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Theme from '../styles/Theme';

const handleBackClick = () => {
  window.history.back();
};

const Schedule = () => {
  return (
    <ScheduleContainer>
      <Header>
        <BackButtonWrapper>
          <BackButton onClick={handleBackClick} />
        </BackButtonWrapper>
        <Title>예약 스케줄 목록</Title>
      </Header>
      <ScheduleContent>
        <ScheduleList>
          <ScheduleItemContainer>
            <IconContainer>
              <Icon className='reserved' />
              <ConnectorLine />
            </IconContainer>
            <Container>
              <MiniTitle>예약된 스케줄</MiniTitle>
              <ScheduleItem>
                <Details>
                  <Season>2024 가을 시즌 2nd.</Season>
                  <Date>스케줄 일정: 9월 16일 (월) ~ 9월 27일 (금)</Date>
                  <InfoRow>
                    <Info>스케줄 노출일자: 9월 18일 (수)</Info>
                    <Info>선택한 작품: 6가지</Info>
                  </InfoRow>
                </Details>
              </ScheduleItem>
            </Container>
          </ScheduleItemContainer>

          <ScheduleItemContainer>
            <IconContainer>
              <Icon className='in-progress' />
              <ConnectorLine />
            </IconContainer>
            <Container>
              <MiniTitle>진행된 스케줄</MiniTitle>
              <ScheduleItem>
                <Details>
                  <Season>2024 가을 시즌 1st.</Season>
                  <Date>스케줄 일정: 9월 2일 (월) ~ 9월 13일 (금)</Date>
                  <InfoRow>
                    <Info>스케줄 노출일자: 9월 4일 (수)</Info>
                    <Info>선택한 작품: 6가지</Info>
                  </InfoRow>
                </Details>
              </ScheduleItem>
            </Container>
          </ScheduleItemContainer>

          <ScheduleItemContainer>
            <IconContainer>
              <Icon className='future' />
              <ConnectorLine />
            </IconContainer>
            <Container>
              <MiniTitle>미진행 스케줄</MiniTitle>
              <ScheduleItem>
                <Details>
                  <Season>2024 여름 시즌 6th.</Season>
                  <Date>스케줄 일정: 9월 2일 (월) ~ 9월 13일 (금)</Date>
                  <InfoRow>
                    <Info>스케줄 노출일자: 9월 4일 (수)</Info>
                    <Info>선택한 작품: 6가지</Info>
                  </InfoRow>
                  <ActionButton>스케줄 예약하기</ActionButton>
                </Details>
              </ScheduleItem>
            </Container>
          </ScheduleItemContainer>
        </ScheduleList>
      </ScheduleContent>
    </ScheduleContainer>
  );
};

export default Schedule;

const ScheduleContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
  border: 1px solid ${Theme.colors.gray1};
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 105px;
  margin-bottom: 20px;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ScheduleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ScheduleItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${Theme.colors.gray1};
  margin-bottom: 10px;

  &.reserved {
    background-color: gray;
  }

  &.in-progress {
    background-color: orange;
  }

  &.future {
    background-color: blue;
  }

  &.past {
    background-color: lightgray;
  }
`;

const ConnectorLine = styled.div`
  border: 1px solid ${Theme.colors.gray1};
  height: 90px;
  margin: 0 auto;
`;

const ScheduleItem = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  flex-grow: 1;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Season = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const Date = styled.span`
  color: #333;
  font-size: 16px;
`;

const Info = styled.span`
  color: #666;
  font-size: 14px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;
const MiniTitle = styled.div`
  display: flex;
`;
