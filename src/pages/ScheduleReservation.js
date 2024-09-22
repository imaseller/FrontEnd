import React, { useState } from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Theme from '../styles/Theme';

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
};

const ScheduleReservation = () => {
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

    return [
      ...emptyDays,
      ...days.map((day) => (
        <DayBox
          key={day}
          selected={selectedDates.includes(day)}
          reserved={reservedDates.includes(day)}
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

  return (
    <Container>
      <Header>
        <BackButtonWrapper>
          <BackButton onClick={handleBackClick} />
        </BackButtonWrapper>
        <Title>스케줄 예약하기</Title>
      </Header>

      <Stepper>
        <StepLine />
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
        <DayName>일</DayName>
        <DayName>월</DayName>
        <DayName>화</DayName>
        <DayName>수</DayName>
        <DayName>목</DayName>
        <DayName>금</DayName>
        <DayName>토</DayName>
        {renderCalendar()}
      </CalendarContainer>

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
            {seasonProgress.completed} / {seasonProgress.total} 회
            <PendingText> 미진행 {seasonProgress.pending}회</PendingText>
          </InfoText>
        </ScheduleInfo>
      </Summary>
    </Container>
  );
};

export default ScheduleReservation;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
  width: 24px;
  height: 24px;
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
  height: 2px;
  background-color: ${Theme.colors.gray2};
  flex-grow: 1;
  align-self: center;
`;

const DateSelection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
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
  text-align: center;
`;

const DateDropdown = styled.select`
  padding: 10px;
  border: 1px solid ${Theme.colors.gray4};
  border-radius: 5px;
  flex: 1;
  text-align: center;
  margin-left: 10px;
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const DayName = styled.div`
  text-align: center;
  font-weight: bold;
`;

const EmptyDay = styled.div``;

const DayBox = styled.div`
  border: 1px solid ${Theme.colors.gray4};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.reserved
      ? Theme.colors.gray3
      : props.selected
      ? Theme.colors.yellow
      : '#fff'};
  color: ${(props) => (props.reserved ? '#fff' : '#000')};
  border-radius: 5px;
  cursor: ${(props) => (props.reserved ? 'default' : 'pointer')};
`;

const Summary = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const ScheduleInfo = styled.div`
  flex: 1;
`;

const InfoText = styled.div`
  padding: 10px;
`;

const PendingText = styled.div`
  padding: 10px;
`;
