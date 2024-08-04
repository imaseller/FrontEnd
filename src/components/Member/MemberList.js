import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

  return (
    <Container>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MemberList;

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #007bff;
    color: #ffffff;
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
