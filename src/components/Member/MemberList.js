import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
import { UserGet } from '../../api/user/UserGet.js'; // API 호출을 위한 함수 가져오기

const MemberList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('email');
  const [users, setUsers] = useState([]); // 초기값을 빈 배열로 설정
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserGet(page, limit);
        setUsers(data.users || []); // data.users가 없을 경우 빈 배열로 설정
        setTotal(data.total || 0); // data.total이 없을 경우 0으로 설정
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleEdit = (no) => {
    navigate(`/user/admin${no}`);
  };

  const handleRegister = () => {
    navigate('/user/adminnew');
  };

  const filteredData = users.filter((item) => {
    if (searchType === 'email') {
      return item.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'nickname') {
      return item.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'status') {
      return item.status.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item;
  });

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>회원 목록</HeaderTitle>
          <SearchContainer>
            <SearchSelect onChange={(e) => setSearchType(e.target.value)}>
              <option value='email'>이메일</option>
              <option value='nickname'>닉네임</option>
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
          <TotalCount>총 {total}명</TotalCount>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>상태</th>
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
                  <EmailCell onClick={() => handleEdit(member.no)}>
                    {member.email}
                  </EmailCell>
                  <td>{member.nickname}</td>
                  <td>{member.birthdate}</td>
                  <td>{member.preferredColors.join(', ')}</td>
                  <td>{member.preferredBrands.join(', ')}</td>
                  <td>{new Date(member.lastLogin).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ActionButton onClick={handleRegister}>신규 등록</ActionButton>
          <Pagination>
            <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
              «
            </PageButton>
            <PageButton>{page}</PageButton>
            <PageButton
              onClick={() => setPage(page + 1)}
              disabled={page * limit >= total}
            >
              »
            </PageButton>
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
