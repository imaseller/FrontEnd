import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../img/Main/Home.svg';
import MonitoringIcon from '../../img/Main/Monitoring.svg';
import PaymentDetailIcon from '../../img/Main/PaymentDetail.svg';
import StoreIcon from '../../img/Main/Store.svg';

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <NavItem>
        <Icon src={HomeIcon} alt='홈' />
        <NavLabel>홈</NavLabel>
      </NavItem>
      <NavItem>
        <Icon src={MonitoringIcon} alt='모니터링' />
        <NavLabel>모니터링</NavLabel>
      </NavItem>
      <NavItem>
        <Icon src={PaymentDetailIcon} alt='결제내역' />
        <NavLabel>결제내역</NavLabel>
      </NavItem>
      <NavItem>
        <Icon src={StoreIcon} alt='구매마켓' />
        <NavLabel>구매마켓</NavLabel>
      </NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;

const BottomNavContainer = styled.nav`
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

const Icon = styled.img`
  width: auto;
  height: auto;
`;

const NavLabel = styled.span`
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  margin-top: 5px;
`;
