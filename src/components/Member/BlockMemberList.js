import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const mockData = [
  {
    no: 5017,
    status: '계정잠김',
    memberType: '일반회원',
    email: 'jyoonlee411@naver.com',
    nickname: '윤아아야(탈퇴)',
    birthday: '2003-04-11',
    color: 'Black',
    brand: 'MOJO.S.PHINE',
    lastLogin: '2024.08.02',
  },
  {
    no: 5018,
    status: '계정잠김',
    memberType: '일반회원',
    email: 'testuser@example.com',
    nickname: '테스트유저(탈퇴)',
    birthday: '1990-01-01',
    color: 'Blue',
    brand: 'ZARA',
    lastLogin: '2024.07.15',
  },
];

const MemberList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('email');

  const handleEdit = (no) => {
    navigate(`/admin/memberlist/detail/${no}`);
  };

  const handleRegister = () => {
    navigate('/admin/memberlist/detail/new');
  };

  const filteredData = mockData.filter((item) => {
    if (searchType === 'email') {
      return item.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'nickname') {
      return item.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'memberType') {
      return item.memberType.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'status') {
      return item.status.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item;
  });

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>블록 회원 목록</HeaderTitle>
          <SearchContainer>
            <SearchSelect onChange={(e) => setSearchType(e.target.value)}>
              <option value='email'>이메일</option>
              <option value='nickname'>닉네임</option>
              <option value='memberType'>회원타입</option>
              <option value='status'>상태</option>
            </SearchSelect>
            <SearchInput
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </Header>
        <Container>
          <TotalCount>총 {filteredData.length}개</TotalCount>
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
              </tr>
            </thead>
            <tbody>
              {filteredData.map((member, index) => (
                <tr key={index}>
                  <td>{member.no}</td>
                  <td>{member.status}</td>
                  <td>{member.memberType}</td>
                  <EmailCell onClick={() => handleEdit(member.no)}>
                    {member.email}
                  </EmailCell>
                  <td>{member.nickname}</td>
                  <td>{member.birthday}</td>
                  <td>{member.color}</td>
                  <td>{member.brand}</td>
                  <td>{member.lastLogin}</td>
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
        </Container>
      </Content>
    </ThemeProvider>
  );
};

export default MemberList;

const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.WhiteBrown5};
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.heading.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 26px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchSelect = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const TotalCount = styled.div`
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
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
    min-width: 60px;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.default.fontSize};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 12px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }
`;

const EmailCell = styled.td`
  color: #007bff;
  cursor: pointer;

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
  font-size: ${({ theme }) => theme.fonts.SmallButton.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
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
  font-size: ${({ theme }) => theme.fonts.SmallButton.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;
