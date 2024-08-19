import React from 'react';
import styled from 'styled-components';
import Menu from '../img/Home/Menu.svg';
import Schedule from '../img/Home/Schedule.svg';
import Basket from '../img/Home/Basket.svg';

const Header = ({ location, nickname = 'Mr J' }) => {
  return (
    <HeaderContainer>
      <Profile>
        <ProfileImage src='https://via.placeholder.com/50' alt='User profile' />
        <Greeting>
          <GreetingText>
            <span>{nickname}</span> 님 안녕하세요!
          </GreetingText>
        </Greeting>
      </Profile>
      <Icons>
        {location === '/store' ? (
          <Icon src={Basket} alt='장바구니' />
        ) : (
          <Icon src={Schedule} alt='스케줄' />
        )}
        <Icon src={Menu} alt='메뉴' />
      </Icons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
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
