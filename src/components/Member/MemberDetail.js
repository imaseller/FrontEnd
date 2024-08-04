import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
];

const MemberDetail = () => {
  const { seq } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    birthday: '',
    color: '',
    brand: '',
    size: '',
    status: '',
    event: 'agree',
    memberType: '',
  });

  useEffect(() => {
    const memberData = mockData.find((m) => m.no.toString() === seq);
    if (memberData) {
      setMember({
        email: memberData.email,
        nickname: memberData.nickname,
        birthday: memberData.birthday,
        color: memberData.color,
        brand: memberData.brand,
        size: '55(M)',
        status: memberData.status,
        memberType: memberData.memberType,
        event: 'agree',
      });
    }
  }, [seq]);

  const handleSave = () => {
    navigate('/admin/memberlist');
  };

  const handleCancel = () => {
    navigate('/admin/memberlist');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Title>회원 상세정보</Title>
        <Form>
          <FormRow>
            <Label>
              계정(이메일):
              <Input type='email' name='email' value={member.email} readOnly />
            </Label>
            <Label>
              닉네임:
              <Input
                type='text'
                name='nickname'
                value={member.nickname}
                readOnly
              />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              비밀번호:
              <Input
                type='password'
                name='password'
                value={member.password}
                onChange={handleChange}
              />
            </Label>
            <Label>
              재확인:
              <Input
                type='password'
                name='confirmPassword'
                value={member.confirmPassword}
                onChange={handleChange}
              />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              생일:
              <Input
                type='date'
                name='birthday'
                value={member.birthday}
                readOnly
              />
            </Label>
            <Label>
              선호색상:
              <Input type='text' name='color' value={member.color} readOnly />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              선호브랜드:
              <Input type='text' name='brand' value={member.brand} readOnly />
            </Label>
            <Label>
              사이즈:
              <Input type='text' name='size' value={member.size} readOnly />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              계정상태:
              <Input type='text' name='status' value={member.status} readOnly />
            </Label>
            <Label>
              회원타입:
              <Input
                type='text'
                name='memberType'
                value={member.memberType}
                readOnly
              />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              이벤트수신여부:
              <RadioGroup>
                <RadioLabel>
                  <Radio
                    type='radio'
                    name='event'
                    value='agree'
                    checked={member.event === 'agree'}
                    onChange={handleChange}
                  />
                  동의
                </RadioLabel>
                <RadioLabel>
                  <Radio
                    type='radio'
                    name='event'
                    value='disagree'
                    checked={member.event === 'disagree'}
                    onChange={handleChange}
                  />
                  미동의
                </RadioLabel>
              </RadioGroup>
            </Label>
          </FormRow>
        </Form>
        <ActionRow>
          <LeftActionButton onClick={() => navigate('/admin/memberlist')}>
            목록보기
          </LeftActionButton>
          <RightActionButtons>
            <ActionButton onClick={handleSave}>저장하기</ActionButton>
            <ActionButton onClick={handleCancel}>저장취소</ActionButton>
          </RightActionButtons>
        </ActionRow>
        <TabMenu>
          <Tab>배송지 정보</Tab>
          <Tab>이용 내역</Tab>
          <Tab>포인트 내역</Tab>
          <Tab>걸어두기</Tab>
          <Tab>사용후기</Tab>
        </TabMenu>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>배송자명</th>
              <th>수령인</th>
              <th>주소</th>
              <th>연락처</th>
              <th>연락처2</th>
              <th>기본설정</th>
            </tr>
          </thead>
          <tbody>{/* 배송지 정보 데이터 맵핑 */}</tbody>
        </Table>
      </Content>
    </ThemeProvider>
  );
};

export default MemberDetail;

const Content = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const LeftActionButton = styled.button`
  padding: 10px 20px;
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

const RightActionButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
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

const TabMenu = styled.div`
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown2};
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown4};
    color: ${({ theme }) => theme.colors.white};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown2};
  }
`;
