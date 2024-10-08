import React, { useState } from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Theme from '../styles/Theme';
import { useNavigate } from 'react-router-dom';
const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
};

const ScheduleReservation1 = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [reservedDates, setReservedDates] = useState([22, 23, 24]);
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(9);
  const [seasonProgress, setSeasonProgress] = useState({
    total: 6,
    completed: 2,
    pending: 0,
  });

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const handleDateClick = (day) => {
    if (!reservedDates.includes(day)) {
      setSelectedDates((prevSelected) => {
        const newSelected = [...prevSelected, day];
        return newSelected.length > 2 ? newSelected.slice(-2) : newSelected;
      });
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const renderCalendar = () => {
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDay }, (_, i) => (
      <EmptyDay key={i} />
    ));

    const [startDate, endDate] = selectedDates;
    const isWithinRange = (day) => {
      if (startDate && endDate) {
        return day > startDate && day < endDate;
      }
      return false;
    };

    return [
      ...emptyDays,
      ...days.map((day) => (
        <DayBox
          key={day}
          selected={selectedDates.includes(day)}
          reserved={reservedDates.includes(day)}
          inRange={isWithinRange(day)}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </DayBox>
      )),
    ];
  };

  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };

  const handleMonthChange = (e) => {
    setMonth(Number(e.target.value));
  };

  const navigate = useNavigate();

  const handleBottomClick = () => {
    navigate('/schedule/reservation2', {
      state: { selectedDates },
    });
  };

  return (
    <Container>
      <Header>
        <BackButtonWrapper>
          <BackButton onClick={handleBackClick} />
        </BackButtonWrapper>
        <Title>스케줄 예약하기</Title>
      </Header>

      <Stepper>
        <Step completed>1</Step>
        <StepLine />
        <Step>2</Step>
        <StepLine />
        <Step>3</Step>
      </Stepper>

      <DateSelection>
        <Label>예약일자 (선택)</Label>
        <DateRow>
          <DateInput as='select' value={year} onChange={handleYearChange}>
            <option value={2024}>2024년</option>
            <option value={2025}>2025년</option>
          </DateInput>
          <DateDropdown as='select' value={month} onChange={handleMonthChange}>
            <option value={1}>1월</option>
            <option value={2}>2월</option>
            <option value={3}>3월</option>
            <option value={4}>4월</option>
            <option value={5}>5월</option>
            <option value={6}>6월</option>
            <option value={7}>7월</option>
            <option value={8}>8월</option>
            <option value={9}>9월</option>
            <option value={10}>10월</option>
            <option value={11}>11월</option>
            <option value={12}>12월</option>
          </DateDropdown>
        </DateRow>
      </DateSelection>

      <CalendarContainer>
        {['일', '월', '화', '수', '목', '금', '토'].map((name, index) => (
          <DayName key={index} isWeekend={index === 0 || index === 6}>
            {name}
          </DayName>
        ))}
        {renderCalendar()}
      </CalendarContainer>
      <ConnectorLine1 />
      <Summary>
        <ScheduleInfo>
          <Label>선택된 스케줄</Label>
          <InfoText>
            {selectedDates.length > 1
              ? `${month}월 ${selectedDates[0]}일 ~ ${month}월 ${selectedDates[1]}일`
              : '날짜 선택 필요'}
          </InfoText>
        </ScheduleInfo>
        <ScheduleInfo>
          <Label>시즌 진행 회차</Label>
          <InfoText>
            <ProgressText>
              {seasonProgress.completed} /{' '}
              <GrayText>{seasonProgress.total}</GrayText> 회
            </ProgressText>
            <PendingText>
              {' '}
              <GrayText>미진행 </GrayText>
              {seasonProgress.pending}회
            </PendingText>
          </InfoText>
        </ScheduleInfo>
      </Summary>
      <BottomBarContainer>
        <OrderButton onClick={handleBottomClick}>다음</OrderButton>
      </BottomBarContainer>
      <BeenContainer />
    </Container>
  );
};

export default ScheduleReservation1;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
  border: 1px solid ${Theme.colors.gray1};
  height: 100%;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 105px;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Stepper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Step = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.completed ? Theme.colors.yellow : Theme.colors.gray2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  margin: 0 5px;
`;

const StepLine = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${Theme.colors.gray3};
  align-self: center;
`;

const DateSelection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
`;

const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const DateInput = styled.select`
  padding: 10px;
  border: 1px solid ${Theme.colors.gray4};
  border-radius: 5px;
  flex: 1;
`;

const DateDropdown = styled.select`
  padding: 10px;
  border: 1px solid ${Theme.colors.gray4};
  border-radius: 5px;
  flex: 1;

  margin-left: 10px;
  width: 178px;
  height: 57px;
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 0fr);
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 39px;
`;

const DayName = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.isWeekend ? Theme.colors.gray1 : 'black')};
`;

const EmptyDay = styled.div``;

const DayBox = styled.div`
  border: 1px solid
    ${(props) => (props.inRange ? Theme.colors.yellow : Theme.colors.gray4)};
  background-color: ${(props) =>
    props.reserved
      ? Theme.colors.gray3
      : props.selected
      ? Theme.colors.yellow
      : '#fff'};
  color: ${(props) =>
    props.selected ? '#fff' : props.reserved ? '#fff' : '#000'};
  width: 100%;
  min-width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.reserved ? 'default' : 'pointer')};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
`;

const Summary = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ScheduleInfo = styled.div`
  flex: 1;
`;

const InfoText = styled.div`
  height: 57px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid ${Theme.colors.gray4};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 14px;
`;
const ProgressText = styled.div`
  padding: 10px;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
`;

const PendingText = styled.div`
  padding: 10px;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 11px;
`;
const GrayText = styled.span`
  color: ${Theme.colors.gray3};

  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 11px;
`;

const ConnectorLine1 = styled.div`
  border: 1px solid ${Theme.colors.gray4};
  margin: 30px 0;
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

const BeenContainer = styled.div`
  height: 300px;
`;
