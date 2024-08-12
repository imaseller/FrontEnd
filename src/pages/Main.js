import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Header>
          <Profile>
            <ProfileImage
              src='https://via.placeholder.com/50'
              alt='User profile'
            />
            <Greeting>
              <span>Mr J 님</span>
              <GreetingText>안녕하세요!</GreetingText>
            </Greeting>
          </Profile>
          <Icons>
            <Icon className='icon-calendar' />
            <Icon className='icon-menu' />
          </Icons>
        </Header>

        <Notice>
          <NoticeTag>공지</NoticeTag>
          <NoticeText>2024년 7월 1차 업데이트 예정 공개</NoticeText>
          <NoticeArrow>→</NoticeArrow>
        </Notice>

        {/* <Content></Content> */}
      </ContentWrapper>

      <BottomNav>
        <NavItem>
          <IconImage src='/images/icon-home.png' alt='홈' />
          <NavLabel>홈</NavLabel>
        </NavItem>
        <NavItem>
          <IconImage src='/images/icon-monitoring.png' alt='모니터링' />
          <NavLabel>모니터링</NavLabel>
        </NavItem>
        <NavItem>
          <IconImage src='/images/icon-payment.png' alt='결제내역' />
          <NavLabel>결제내역</NavLabel>
        </NavItem>
        <NavItem>
          <IconImage src='/images/icon-market.png' alt='구매마켓' />
          <NavLabel>구매마켓</NavLabel>
        </NavItem>
      </BottomNav>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreetingText = styled.span`
  color: #000;
  font-size: 16px;
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled.div`
  font-size: 24px;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 0.5px solid #ccc;
  border-radius: 6px;
  padding: 10px 20px;
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

const NoticeArrow = styled.div`
  font-size: 14px;
  color: #aaa;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

const BottomNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1d1d1b;
  padding: 10px 0;
  width: 100%;
  max-width: 600px;
  position: absolute;
  bottom: 0;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

const NavLabel = styled.span`
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  margin-top: 5px;
`;
