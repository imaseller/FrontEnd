import React, { useState } from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Theme from '../styles/Theme';
import { useNavigate } from 'react-router-dom';
import ItemList from '../components/Home/ItemList';
const ScheduleReservation2 = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  const navigate = useNavigate();

  const handleBottomClick = () => {
    navigate('/schedule/reservation2');
  };
  const ItemContainer1 = () => (
    <CustomHeader>
      <div>
        <Label>
          스케줄에 추가할 제품 목록<GrayText>(선택)</GrayText>
        </Label>
      </div>
    </CustomHeader>
  );
  const ItemContainer2 = () => <CustomHeader></CustomHeader>;

  return (
    <Container>
      <Header>
        <BackButtonWrapper>
          <BackButton onClick={handleBackClick} />
        </BackButtonWrapper>
        <Title>스케줄 예약하기</Title>
      </Header>

      <Stepper>
        <Step>1</Step>
        <StepLine />
        <Step completed>2</Step>
        <StepLine />
        <Step>3</Step>
      </Stepper>

      <Summary>
        <ScheduleInfo>
          <Label>예약할 제품 목록</Label>
          <InfoText>선택 가능한 갯수 6개 / 선택한 제품 수 1 개</InfoText>
        </ScheduleInfo>
      </Summary>
      <Content>
        <ItemList HeaderContainer={ItemContainer1} />
        <ItemList HeaderContainer={ItemContainer2} />
      </Content>
      <BottomBarContainer>
        <OrderButton onClick={handleBottomClick}>다음</OrderButton>
      </BottomBarContainer>
      <BeenContainer />
    </Container>
  );
};

export default ScheduleReservation2;

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

const Label = styled.label`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
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

const Content = styled.div`
  flex: 1;
`;

const CustomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CustomTitle = styled.h2`
  ${Theme.fonts.default1}
  margin-bottom: 5px;
`;

const CustomHighlight = styled.span`
  color: ${Theme.colors.yellow};
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
`;

const CustomSubtitle = styled.p`
  ${Theme.fonts.default2}
  color: ${Theme.colors.gray1};
`;

const CustomMoreButton = styled.button`
  ${Theme.fonts.default0}
  padding: 10px 13px;
  background-color: ${Theme.colors.white};
  color: ${Theme.colors.Black1};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;

const GrayText = styled.span`
  color: ${Theme.colors.gray3};

  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 11px;
`;
