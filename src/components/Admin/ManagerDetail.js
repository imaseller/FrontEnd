import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const ManagerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [manager, setManager] = useState({});

  useEffect(() => {
    if (id !== 'new') {
      // 기존 관리자 정보를 불러오는 로직을 추가
      // 예시: fetch(`/api/managers/${id}`).then(response => response.json()).then(data => setManager(data));
      setManager({
        id,
        상태: '정상',
        아이디: 'dbalsrl7648',
        이름: '유민기',
        이메일: 'dbalsrl7648@gmail.com',
        권한등급: '서비스 관리자',
      });
    }
  }, [id]);

  const handleSave = () => {
    // 수정 또는 등록 처리 로직 추가
    // 예시: fetch(`/api/managers/${id}`, { method: 'PUT', body: JSON.stringify(manager) });
    navigate('/admin/managerlist');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManager((prevManager) => ({ ...prevManager, [name]: value }));
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>
            {id === 'new' ? '관리자 등록' : '관리자 수정'}
          </HeaderTitle>
        </Header>
        <Form>
          <Label>
            아이디:
            <Input
              type='text'
              name='아이디'
              value={manager.아이디 || ''}
              onChange={handleChange}
            />
          </Label>
          <Label>
            이름:
            <Input
              type='text'
              name='이름'
              value={manager.이름 || ''}
              onChange={handleChange}
            />
          </Label>
          <Label>
            이메일:
            <Input
              type='email'
              name='이메일'
              value={manager.이메일 || ''}
              onChange={handleChange}
            />
          </Label>
          <Label>
            권한등급:
            <Input
              type='text'
              name='권한등급'
              value={manager.권한등급 || ''}
              onChange={handleChange}
            />
          </Label>
          <ActionButton onClick={handleSave}>
            {id === 'new' ? '등록' : '수정'}
          </ActionButton>
        </Form>
      </Content>
    </ThemeProvider>
  );
};

export default ManagerDetail;

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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.brown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.brown6};
  }
`;
