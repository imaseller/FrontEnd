import React from 'react';
import styled from 'styled-components';
import Alarm from '../img/Home/Alarm.svg';
import Schedule from '../img/Home/Schedule.svg';
import Basket from '../img/Home/Basket.svg';
import Mycloset from '../img/Home/Mycloset.svg';
import Mypage from '../img/Home/Mypage.svg';

const Header = ({ location, nickname = 'Mr J', isLoggedIn }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Profile>
          <ProfileImage
            src='https://via.placeholder.com/44'
            alt='User profile'
          />
          <Greeting>
            <GreetingText>
              <span>{nickname}</span> 님 안녕하세요!
            </GreetingText>
          </Greeting>
        </Profile>
        <Icons>
          {location === '/store' ? (
            <>
              <Icon src={Basket} alt='장바구니' />
              <Icon src={Mycloset} alt='내 옷장' />
            </>
          ) : isLoggedIn ? (
            <>
              <Icon src={Schedule} alt='스케줄' />
              <Icon src={Alarm} alt='알림' />
            </>
          ) : (
            <>
              <Icon src={Mypage} alt='마이페이지' />
              <Icon src={Alarm} alt='알림' />
            </>
          )}
        </Icons>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 125px;
  max-width: 598px;
  margin: 0 auto;
  background-color: white;
  padding: 0 27px 27px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  height: 125px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreetingText = styled.span`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  color: #000000;

  & > span {
    font-weight: 500;
    font-size: 24px;
    margin-right: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

const Icon = styled.img`
  width: auto;
  height: auto;
`;
