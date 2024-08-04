import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const mockData = [
  {
    no: 5017,
    status: '인증완료',
    memberType: '일반회원',
    email: 'jyoonlee411@naver.com',
    nickname: '윤아아야',
    birthday: '2003-04-11',
    color: 'Black',
    brand: 'MOJO.S.PHINE',
    lastLogin: '2024.08.02',
  },
  // 나머지 mockData 내용 생략
];

const MemberList = () => {
  const navigate = useNavigate();

  const handleEmailClick = (no) => {
    navigate(`/admin/memberlist/detail/${no}`);
  };

  const handleRegister = () => {
    navigate('/admin/memberlist/detail/new');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>회원 목록</HeaderTitle>
          <SearchInput placeholder='아이디' />
        </Header>
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>상태</th>
              <th>회원타입</th>
              <th>계정(이메일)</th>
              <th>닉네임</th>
              <th>생일</th>
              <th>선호색상</th>
              <th>선호브랜드</th>
              <th>최근접속일</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((member, index) => (
              <tr key={index}>
                <td>{member.no}</td>
                <td>{member.status}</td>
                <td>{member.memberType}</td>
                <EmailCell onClick={() => handleEmailClick(member.no)}>
                  {member.email}
                </EmailCell>
                <td>{member.nickname}</td>
                <td>{member.birthday}</td>
                <td>{member.color}</td>
                <td>{member.brand}</td>
                <td>{member.lastLogin}</td>
                <td>
                  <ActionButton onClick={() => handleEmailClick(member.no)}>
                    수정
                  </ActionButton>
                  <ActionButton>삭제</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ActionButton onClick={handleRegister}>신규 등록</ActionButton>
        <Pagination>
          <PageButton>«</PageButton>
          <PageButton>1</PageButton>
          <PageButton>»</PageButton>
        </Pagination>
      </Content>
    </ThemeProvider>
  );
};

export default MemberList;

const Content = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const EmailCell = styled.td`
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const ActionButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  }
`;
