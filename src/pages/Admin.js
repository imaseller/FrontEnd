import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import ManagerList from '../components/Admin/ManagerList';
import Theme from '../styles/Theme';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Sidebar>
          <Profile>
            <Avatar src='/path/to/avatar.png' alt='Profile Avatar' />
            <ProfileInfo>
              <Username>관리자 (sight78)</Username>
              <Status>Online</Status>
            </ProfileInfo>
          </Profile>
          <Navigation>
            <NavItem onClick={() => navigate('/admin/dashboard')}>
              Dash Board
            </NavItem>
            <NavItem onClick={() => navigate('/admin/manager-list')}>
              관리자 관리
            </NavItem>
            <NavItem>회원 관리</NavItem>
            <NavItem>서비스 관리</NavItem>
            <NavItem>결제 관리</NavItem>
            <NavItem>앱 설정 관리</NavItem>
            <NavItem>고객센터</NavItem>
          </Navigation>
        </Sidebar>
        <MainContent>
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='manager-list' element={<ManagerList />} />
          </Routes>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

const Dashboard = () => (
  <Content>
    <DashboardTitle>Dash board</DashboardTitle>
  </Content>
);

export default Admin;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.brown6};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  color: ${({ theme }) => theme.colors.brown1};
  font-size: 14px;
  font-weight: bold;
`;

const Status = styled.span`
  color: #2ecc71;
  font-size: 12px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.brown1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.brown4};
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.brown1};
`;

const DashboardTitle = styled.h1`
  font-size: 24px;
`;
