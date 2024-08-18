import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css, ThemeProvider } from 'styled-components';
import HomeIcon from '../../img/Main/Home.svg';
import MonitoringIcon from '../../img/Main/Monitoring.svg';
import PaymentDetailIcon from '../../img/Main/PaymentDetail.svg';
import StoreIcon from '../../img/Main/Store.svg';
import Theme from '../../styles/Theme.js';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);

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
  }, [location.pathname]);

  const handleClick = (tabName, route) => {
    if (activeTab !== tabName) {
      setActiveTab(tabName);
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
              <YellowGlow />
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
              <YellowGlow />
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
              <YellowGlow />
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
              <YellowGlow />
            </IndicatorContainer>
          )}
        </NavItem>
      </BottomNavContainer>
    </ThemeProvider>
  );
};

export default BottomNav;

// styled-components 추가 정의
const BottomNavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DarkBrown5};
  padding: 12px 0;
  width: 100%;
  max-width: 600px;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
`;

const IndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 15px;
  z-index: 0;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
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

const YellowGlow = styled.div`
  position: absolute;
  width: 60px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  top: -5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 10px rgba(255, 223, 0, 0.7),
    0 20px 10px rgba(255, 223, 0, 0.5);
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

  ${({ isActive }) =>
    isActive &&
    css`
      ${IndicatorContainer} {
        transform: translateX(-50%);
      }

      ${Bar} {
        transform: translateX(0%);
      }

      ${YellowGlow} {
        opacity: 0.8;
      }
    `}
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
