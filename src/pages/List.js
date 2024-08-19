import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const List = ({ children }) => {
  const navigate = useNavigate();
  const [isManagerMenuOpen, setIsManagerMenuOpen] = useState(false);
  const [isMemberMenuOpen, setIsMemberMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const handleManagerMenuToggle = () => {
    setIsManagerMenuOpen(!isManagerMenuOpen);
  };

  const handleMemberMenuToggle = () => {
    setIsMemberMenuOpen(!isMemberMenuOpen);
  };

  const handleServiceMenuToggle = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
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
            <NavItem onClick={() => navigate('/dashboard')}>Dash Board</NavItem>
            <NavItem onClick={handleManagerMenuToggle}>관리자 관리</NavItem>
            {isManagerMenuOpen && (
              <SubMenu>
                <SubMenuItem onClick={() => navigate('/admin')}>
                  관리자 목록
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/blockmanagerlist')}>
                  블럭 관리자 목록
                </SubMenuItem>
              </SubMenu>
            )}
            <NavItem onClick={handleMemberMenuToggle}>회원 관리</NavItem>
            {isMemberMenuOpen && (
              <SubMenu>
                <SubMenuItem onClick={() => navigate('/user')}>
                  회원 목록
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/user/blocked')}>
                  블록 회원 목록
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/reviewlist')}>
                  사용후기 목록
                </SubMenuItem>
              </SubMenu>
            )}
            <NavItem onClick={handleServiceMenuToggle}>서비스 관리</NavItem>
            {isServiceMenuOpen && (
              <SubMenu>
                <SubMenuItem onClick={() => navigate('/productlist')}>
                  제품 관리
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/brandlist')}>
                  브랜드 관리
                </SubMenuItem>
                <SubMenuItem onClick={() => navigate('/schedulelist')}>
                  예정제품 관리
                </SubMenuItem>
              </SubMenu>
            )}
            <NavItem>결제 관리</NavItem>
            <NavItem>앱 설정 관리</NavItem>
            <NavItem>고객센터</NavItem>
          </Navigation>
        </Sidebar>
        <MainContent>{children || <Outlet />}</MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  min-width: 250px;
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
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;
