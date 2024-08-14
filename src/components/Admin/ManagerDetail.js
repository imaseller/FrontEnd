import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
import { getAdminById } from '../../api/admin/AdminIdGet';

const ManagerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [manager, setManager] = useState({
    아이디: '',
    비밀번호: '',
    비밀번호확인: '',
    이메일: '',
    이름: '',
    권한등급: 'admin',
    상태: 'active',
    등록일: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchManager = async () => {
      if (id !== 'new') {
        try {
          const data = await getAdminById(id);
          if (data.statusCode === 404) {
            setError('관리자를 찾을 수 없습니다.');
          } else {
            setManager({
              아이디: data.id,
              이메일: data.email,
              이름: '', // 이름 데이터가 없는 경우 처리
              권한등급: data.role,
              상태: data.status === 'active' ? '정상' : '블럭',
              등록일: new Date(data.createdAt).toLocaleDateString('ko-KR'),
            });
          }
        } catch (error) {
          setError('관리자 정보를 가져오는 중 오류가 발생했습니다.');
          console.error('Failed to fetch manager data:', error);
        }
      }
    };

    fetchManager();
  }, [id]);

  const handleSave = () => {
    // 여기에 저장 로직 추가
    navigate('/admin');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManager((prevManager) => ({ ...prevManager, [name]: value }));
  };

  const handleList = () => {
    navigate('/admin');
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Title>{id === 'new' ? '관리자 등록' : '관리자 수정'}</Title>
        <FormContainer>
          <LeftForm>
            <FormRow>
              <Label>아이디:</Label>
              <Input
                type='text'
                name='아이디'
                value={manager.아이디}
                onChange={handleChange}
                disabled={id !== 'new'}
              />
            </FormRow>
            <FormRow>
              <Label>이름:</Label>
              <Input
                type='text'
                name='이름'
                value={manager.이름}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label>비밀번호:</Label>
              <Input
                type='password'
                name='비밀번호'
                value={manager.비밀번호}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label>비밀번호 확인:</Label>
              <Input
                type='password'
                name='비밀번호확인'
                value={manager.비밀번호확인}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label>이메일:</Label>
              <Input
                type='email'
                name='이메일'
                value={manager.이메일}
                onChange={handleChange}
              />
            </FormRow>
          </LeftForm>
          <RightForm>
            <FormRow>
              <Label>권한등급:</Label>
              <Select
                name='권한등급'
                value={manager.권한등급}
                onChange={handleChange}
              >
                <option value='admin'>시스템 관리자</option>
                <option value='service_admin'>서비스 관리자</option>
              </Select>
            </FormRow>
            <FormRow>
              <Label>상태:</Label>
              <RadioGroup>
                <RadioLabel>
                  <Radio
                    type='radio'
                    name='상태'
                    value='정상'
                    checked={manager.상태 === '정상'}
                    onChange={handleChange}
                  />
                  정상
                </RadioLabel>
                <RadioLabel>
                  <Radio
                    type='radio'
                    name='상태'
                    value='블럭'
                    checked={manager.상태 === '블럭'}
                    onChange={handleChange}
                  />
                  블럭
                </RadioLabel>
              </RadioGroup>
            </FormRow>
            {id !== 'new' && (
              <FormRow>
                <Label>등록일:</Label>
                <Input type='text' value={manager.등록일} disabled />
              </FormRow>
            )}
          </RightForm>
        </FormContainer>
        <ActionRow>
          <LeftActionButton onClick={handleList}>목록보기</LeftActionButton>
          <RightActionButtons>
            <ActionButton onClick={handleSave}>
              {id === 'new' ? '저장하기' : '수정하기'}
            </ActionButton>
            <ActionButton onClick={handleList}>저장취소</ActionButton>
          </RightActionButtons>
        </ActionRow>
      </Container>
    </ThemeProvider>
  );
};

export default ManagerDetail;
const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;

const LeftForm = styled.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightForm = styled.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  min-width: 120px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  max-width: 300px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
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
