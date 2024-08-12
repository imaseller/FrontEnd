import React from 'react';
import styled from 'styled-components';
import Menu from '../../img/Main/Menu.svg';
import Schedule from '../../img/Main/Schedule.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Profile>
        <ProfileImage src='https://via.placeholder.com/50' alt='User profile' />
        <Greeting>
          <span>Mr J 님</span>
          <GreetingText>안녕하세요!</GreetingText>
        </Greeting>
      </Profile>
      <Icons>
        <Icon src={Schedule} alt='스케줄' />
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
  color: #000;
  font-size: 16px;
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
