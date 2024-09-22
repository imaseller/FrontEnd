import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Theme from '../styles/Theme';
import ScheduleIcon from '../img/Schedule/schedule.svg';
import BletIcon from '../img/Schedule/blet.svg';

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
              <IconWrapper>
                <Icon src={ScheduleIcon} alt='Reserved Icon' />
              </IconWrapper>
              <ConnectorLine />
            </IconContainer>
            <Container>
              <MiniTitle>예약된 스케줄</MiniTitle>
              <ScheduleItem>
                <Details>
                  <SeasonWrapper>
                    <Season>2024 가을 시즌 2nd.</Season>
                    <IconRightWrapper>
                      <IconRight src={BletIcon} alt='Blet Icon' />
                    </IconRightWrapper>
                  </SeasonWrapper>
                  <DateWrapper>
                    <DateTitle>스케줄 일정</DateTitle>
                    <DateText>9월 16일 (월) ~ 9월 27일 (금)</DateText>
                  </DateWrapper>
                  <ConnectorLine1 />
                  <InfoRow>
                    <InfoColumn>
                      <DateTitle>스케줄 노출일자</DateTitle>
                      <DateText>9월 18일 (수)</DateText>
                    </InfoColumn>
                    <InfoColumn>
                      <DateTitle>선택한 작품</DateTitle>
                      <DateText>6가지</DateText>
                    </InfoColumn>
                  </InfoRow>
                </Details>
              </ScheduleItem>
            </Container>
          </ScheduleItemContainer>

          <ScheduleItemContainer>
            <IconContainer>
              <IconWrapper>
                <Icon src={ScheduleIcon} alt='In Progress Icon' />
              </IconWrapper>
              <ConnectorLine />
            </IconContainer>
            <Container>
              <MiniTitle>진행된 스케줄</MiniTitle>
              <ScheduleItem>
                <Details>
                  <SeasonWrapper>
                    <Season>2024 가을 시즌 1st.</Season>
                    <IconRightWrapper>
                      <IconRight src={BletIcon} alt='Blet Icon' />
                    </IconRightWrapper>
                  </SeasonWrapper>
                  <DateWrapper>
                    <DateTitle>스케줄 일정</DateTitle>
                    <DateText>9월 2일 (월) ~ 9월 13일 (금)</DateText>
                  </DateWrapper>
                  <ConnectorLine1 />
                  <InfoRow>
                    <InfoColumn>
                      <DateTitle>스케줄 노출일자</DateTitle>
                      <DateText>9월 4일 (수)</DateText>
                    </InfoColumn>
                    <InfoColumn>
                      <DateTitle>선택한 작품</DateTitle>
                      <DateText>6가지</DateText>
                    </InfoColumn>
                  </InfoRow>
                </Details>
              </ScheduleItem>
            </Container>
          </ScheduleItemContainer>

          <ScheduleItemContainer>
            <IconContainer>
              <IconWrapper>
                <Icon src={ScheduleIcon} alt='Future Schedule Icon' />
              </IconWrapper>
              <ConnectorLine />
            </IconContainer>
            <Container>
              <MiniTitle>미진행 스케줄</MiniTitle>
              <ScheduleItem>
                <Details>
                  <SeasonWrapper>
                    <Season>2024 여름 시즌 6th.</Season>
                    <IconRightWrapper>
                      <IconRight src={BletIcon} alt='Blet Icon' />
                    </IconRightWrapper>
                  </SeasonWrapper>
                  <DateWrapper>
                    <DateTitle>스케줄 일정</DateTitle>
                    <DateText>9월 2일 (월) ~ 9월 13일 (금)</DateText>
                  </DateWrapper>
                  <ConnectorLine1 />
                  <InfoRow>
                    <InfoColumn>
                      <DateTitle>스케줄 노출일자</DateTitle>
                      <DateText>9월 4일 (수)</DateText>
                    </InfoColumn>
                    <InfoColumn>
                      <DateTitle>선택한 작품</DateTitle>
                      <DateText>6가지</DateText>
                    </InfoColumn>
                  </InfoRow>
                  <ActionButton>스케줄 예약하기</ActionButton>
                </Details>
              </ScheduleItem>
            </Container>
          </ScheduleItemContainer>
        </ScheduleList>
      </ScheduleContent>
      <BottomBarContainer>
        <OrderButton>스케줄 예약하기</OrderButton>
      </BottomBarContainer>
      <BeenContainer />
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
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 308px;
  height: 220px;
`;

const BeenContainer = styled.div`
  height: 100px;
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

const ScheduleContent = styled.div`
  display: flex;
  flex-direction: row;
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
  position: relative;
  z-index: 2;
  margin: 30px 20px 0 0;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${Theme.colors.gray1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ConnectorLine1 = styled.div`
  border: 1px solid ${Theme.colors.gray4};
  margin: 4px 0;
`;

const ConnectorLine = styled.div`
  border: 2px solid ${Theme.colors.gray4};
  height: 212px;
`;

const ScheduleItem = styled.div`
  background-color: white;
  border: 1px solid ${Theme.colors.gray4};
  flex-grow: 1;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 31px 21px 34px 21px;
`;

const SeasonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Season = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 18px;
`;

const IconRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${Theme.colors.gray1};
  margin-left: 10px;
  border-radius: 4px;
`;

const IconRight = styled.img`
  width: 20px;
  height: 22px;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DateTitle = styled.span`
  color: ${Theme.colors.gray2};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 10px;
`;

const DateText = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 15px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const MiniTitle = styled.div`
  display: flex;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
  padding: 9px 10px;
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

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 34px;
  background-color: #eeeeee;
  z-index: 9999;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: black;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  margin: 0 21px;
`;
