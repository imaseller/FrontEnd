import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import BlockManagerList from '../components/Admin/BlockManagerList';
import ManagerDetail from '../components/Admin/ManagerDetail';
import ManagerGroupList from '../components/Admin/ManagerGroupList';
import ManagerList from '../components/Admin/ManagerList';
import MenuList from '../components/Admin/MenuList';
import MemberList from '../components/Member/MemberList';
import BlockMemberList from '../components/Member/BlockMemberList';
import ReviewList from '../components/Member/ReviewList';
import Theme from '../styles/Theme';

const Admin = () => {
  const navigate = useNavigate();
  const [isManagerMenuOpen, setIsManagerMenuOpen] = useState(false);
  const [isMemberMenuOpen, setIsMemberMenuOpen] = useState(false);

  const handleManagerMenuToggle = () => {
    setIsManagerMenuOpen(!isManagerMenuOpen);
  };

  const handleMemberMenuToggle = () => {
    setIsMemberMenuOpen(!isMemberMenuOpen);
  };

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
            <NavItem onClick={handleManagerMenuToggle}>관리자 관리</NavItem>
            {isManagerMenuOpen && (
              <SubMenu>
                <SubMenuItem onClick={() => navigate('/admin/managerlist')}>
                  관리자 목록
                </SubMenuItem>
                <SubMenuItem
                  onClick={() => navigate('/admin/blockmanagerlist')}
                >
                  블럭 관리자 목록
                </SubMenuItem>
                <SubMenuItem
                  onClick={() => navigate('/admin/managergrouplist')}
                >
                  관리자 그룹 목록
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/admin/menulist')}>
                  메뉴 목록
                </SubMenuItem>
              </SubMenu>
            )}
            <NavItem onClick={handleMemberMenuToggle}>회원 관리</NavItem>
            {isMemberMenuOpen && (
              <SubMenu>
                <SubMenuItem onClick={() => navigate('/admin/memberlist')}>
                  회원 목록
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/admin/blockmemberlist')}>
                  블록 회원 목록
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/admin/reviewlist')}>
                  사용후기 목록
                </SubMenuItem>
              </SubMenu>
            )}
            <NavItem>서비스 관리</NavItem>
            <NavItem>결제 관리</NavItem>
            <NavItem>앱 설정 관리</NavItem>
            <NavItem>고객센터</NavItem>
          </Navigation>
        </Sidebar>
        <MainContent>
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='managerlist' element={<ManagerList />} />
            <Route path='managerlist/detail/:id' element={<ManagerDetail />} />
            <Route path='blockmanagerlist' element={<BlockManagerList />} />
            <Route path='managergrouplist' element={<ManagerGroupList />} />
            <Route path='menulist' element={<MenuList />} />
            <Route path='memberlist' element={<MemberList />} />
            <Route path='blockmemberlist' element={<BlockMemberList />} />
            <Route path='reviewlist' element={<ReviewList />} />
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
  background-color: ${({ theme }) => theme.colors.WhiteBrown6};
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
  color: ${({ theme }) => theme.colors.WhiteBrown1};
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
  color: ${({ theme }) => theme.colors.WhiteBrown1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const SubMenuItem = styled.div`
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.WhiteBrown1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown4};
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
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;

const DashboardTitle = styled.h1`
  font-size: 24px;
`;
