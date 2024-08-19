import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css, ThemeProvider } from 'styled-components';
import HomeIcon from '../../img/Home/Home.svg';
import MonitoringIcon from '../../img/Home/Monitoring.svg';
import PaymentDetailIcon from '../../img/Home/PaymentDetail.svg';
import StoreIcon from '../../img/Home/Store.svg';
import Theme from '../../styles/Theme.js';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);
  const [showYellowGlow, setShowYellowGlow] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setActiveTab('home');
        break;
      case '/monitoring':
        setActiveTab('monitoring');
        break;
      case '/payment':
        setActiveTab('payment');
        break;
      case '/store':
        setActiveTab('store');
        break;
      default:
        setActiveTab(null);
    }

    setShowYellowGlow(false);
    setTimeout(() => setShowYellowGlow(true), 150);
  }, [location.pathname]);

  const handleClick = (tabName, route) => {
    if (activeTab !== tabName) {
      setShowYellowGlow(false);
      navigate(route);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <BottomNavContainer>
        <NavItem
          isActive={activeTab === 'home'}
          onClick={() => handleClick('home', '/home')}
        >
          <Icon src={HomeIcon} alt='홈' />
          <NavLabel isActive={activeTab === 'home'}>홈</NavLabel>
          {activeTab === 'home' && (
            <IndicatorContainer>
              <Bar />
              <Light isActive={showYellowGlow} />
            </IndicatorContainer>
          )}
        </NavItem>
        <NavItem
          isActive={activeTab === 'monitoring'}
          onClick={() => handleClick('monitoring', '/monitoring')}
        >
          <Icon src={MonitoringIcon} alt='모니터링' />
          <NavLabel isActive={activeTab === 'monitoring'}>모니터링</NavLabel>
          {activeTab === 'monitoring' && (
            <IndicatorContainer>
              <Bar />
              <Light isActive={showYellowGlow} />
            </IndicatorContainer>
          )}
        </NavItem>
        <NavItem
          isActive={activeTab === 'payment'}
          onClick={() => handleClick('payment', '/payment')}
        >
          <Icon src={PaymentDetailIcon} alt='결제내역' />
          <NavLabel isActive={activeTab === 'payment'}>결제내역</NavLabel>
          {activeTab === 'payment' && (
            <IndicatorContainer>
              <Bar />
              <Light isActive={showYellowGlow} />
            </IndicatorContainer>
          )}
        </NavItem>
        <NavItem
          isActive={activeTab === 'store'}
          onClick={() => handleClick('store', '/store')}
        >
          <Icon src={StoreIcon} alt='구매마켓' />
          <NavLabel isActive={activeTab === 'store'}>구매마켓</NavLabel>
          {activeTab === 'store' && (
            <IndicatorContainer>
              <Bar />
              <Light isActive={showYellowGlow} />
            </IndicatorContainer>
          )}
        </NavItem>
      </BottomNavContainer>
    </ThemeProvider>
  );
};

export default BottomNav;

const BottomNavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Black1};
  padding: 12px 0;
  width: 100%;
  max-width: 600px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  width: 60px;
  height: 15px;
  z-index: 0;
  display: flex;
  justify-content: center;
  transition: left 0.3s ease-in-out;
`;

const Bar = styled.div`
  width: 45px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  position: relative;
  top: -9px;
  transition: transform 0.3s ease-in-out;
`;

const Light = styled.div`
  position: absolute;
  width: 60px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  top: -5px;
  transition: opacity 0.5s ease-in-out;
  box-shadow: 0 20px 10px rgba(255, 255, 255, 0.7),
    0 20px 10px rgba(255, 255, 255, 0.5);
  clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.8;
    `}
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};

  &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const NavLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
  transition: color 0.3s ease;
`;
