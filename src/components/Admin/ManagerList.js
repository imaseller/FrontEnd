import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const ManagerList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/managerlist/detail/${id}`);
  };

  const handleRegister = () => {
    navigate('/admin/managerlist/detail/new');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>관리자 목록</HeaderTitle>
          <SearchInput placeholder='아이디' />
        </Header>
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>상태</th>
              <th>아이디</th>
              <th>이름</th>
              <th>이메일</th>
              <th>권한등급</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>정상</td>
              <td>dbalsrl7648</td>
              <td>유민기</td>
              <EmailCell onClick={() => handleEdit(3)}>
                dbalsrl7648@gmail.com
              </EmailCell>
              <td>서비스 관리자</td>
              <td>
                <ActionButton onClick={() => handleEdit(3)}>수정</ActionButton>
                <ActionButton>삭제</ActionButton>
              </td>
            </tr>
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

export default ManagerList;

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

  th,
  td {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: center;
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }
`;

const EmailCell = styled.td`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue};

  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
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
