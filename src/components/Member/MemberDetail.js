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
  const [activeTab, setActiveTab] = useState('tab_delivery');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();
  const [member, setMember] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    birthday: '',
    color: '',
    brand: '',
    sizeOnePieceSeq: '',
    sizeJacketSeq: '',
    sizeCoatSeq: '',
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
        sizeOnePieceSeq: '',
        sizeJacketSeq: '',
        sizeCoatSeq: '',
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

  const checkDuplicateNickname = () => {
    alert('중복체크 기능을 구현하세요.');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Title>회원 상세정보</Title>
        <FormContainer>
          <LeftForm>
            <FormRow>
              <Label>계정(이메일):</Label>
              <ReadOnlyInput
                type='email'
                name='email'
                value={member.email}
                readOnly
              />
            </FormRow>
            <FormRow>
              <Label>닉네임:</Label>
              <InputWrapper>
                <Input
                  type='text'
                  name='nickname'
                  value={member.nickname}
                  onChange={handleChange}
                />
                <CheckButton onClick={checkDuplicateNickname}>
                  중복체크
                </CheckButton>
              </InputWrapper>
            </FormRow>
            <FormRow>
              <Label>비밀번호:</Label>
              <Input
                type='password'
                name='password'
                value={member.password}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label>재확인:</Label>
              <Input
                type='password'
                name='confirmPassword'
                value={member.confirmPassword}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label>이벤트수신여부:</Label>
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
            </FormRow>
          </LeftForm>
          <RightForm>
            <FormRow>
              <Label>생일:</Label>
              <Input
                type='date'
                name='birthday'
                value={member.birthday}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label>선호색상:</Label>
              <Select name='color' value={member.color} onChange={handleChange}>
                <option value='Black'>Black</option>
                <option value='White'>White</option>
                <option value='Pink'>Pink</option>
                <option value='Navy'>Navy</option>
                <option value='Green'>Green</option>
                <option value='Blue'>Blue</option>
                <option value='Cream'>Cream</option>
                <option value='Yellow'>Yellow</option>
                <option value='Lilac'>Lilac</option>
                <option value='Ivory'>Ivory</option>
                <option value='Olive'>Olive</option>
                <option value='Orange'>Orange</option>
                <option value='Mint'>Mint</option>
                <option value='Grey'>Grey</option>
                <option value='Camel'>Camel</option>
                <option value='Beige'>Beige</option>
                <option value='Red'>Red</option>
                <option value='Sky Blue'>Sky Blue</option>
                <option value='Purple'>Purple</option>
                <option value='Nude'>Nude</option>
                <option value='Khaki'>Khaki</option>
                <option value='Wine'>Wine</option>
                <option value='Brown'>Brown</option>
                <option value='Charcoal'>Charcoal</option>
              </Select>
            </FormRow>
            <FormRow>
              <Label>선호브랜드:</Label>
              <Select name='brand' value={member.brand} onChange={handleChange}>
                <option value='MOJO.S.PHINE'>MOJO.S.PHINE</option>
                <option value='S_Blanc'>S_Blanc</option>
                <option value='CC Collect'>CC Collect</option>
                <option value='Tuo'>Tuo</option>
                <option value='Elunani'>Elunani</option>
                <option value='Billz'>Billz</option>
                <option value='Clair De Lune'>Clair De Lune</option>
                <option value='LUCHA'>LUCHA</option>
                <option value='DOUCAN'>DOUCAN</option>
                <option value='Lazyna'>Lazyna</option>
                <option value='DAYW'>DAYW</option>
                <option value='CADELL'>CADELL</option>
                <option value='Mujatzz'>Mujatzz</option>
                <option value='Mark de niel'>Mark de niel</option>
                <option value='LINE'>LINE</option>
                <option value='MINIMUM'>MINIMUM</option>
                <option value='JILL BY JILLSTUART'>JILL BY JILLSTUART</option>
                <option value='MINE'>MINE</option>
                <option value='ZOOC'>ZOOC</option>
                <option value='O˙2nd'>O˙2nd</option>
                <option value='MAJE'>MAJE</option>
                <option value='SJYP'>SJYP</option>
                <option value='LÄTT BY T'>LÄTT BY T</option>
                <option value='TIME'>TIME</option>
                <option value='DECO'>DECO</option>
                <option value='OLIVE DES OLIVE'>OLIVE DES OLIVE</option>
                <option value='STUDIO TOMBOY'>STUDIO TOMBOY</option>
                <option value='SANDRO'>SANDRO</option>
                <option value='RENEEVON'>RENEEVON</option>
                <option value='SISLEY'>SISLEY</option>
                <option value='S˙SOLEZIA'>S˙SOLEZIA</option>
                <option value='it MICHAA'>it MICHAA</option>
                <option value='MICHAA'>MICHAA</option>
                <option value='SATIN'>SATIN</option>
                <option value='G-CUT'>G-CUT</option>
                <option value='KENNETHLADY'>KENNETHLADY</option>
                <option value='LYNN'>LYNN</option>
                <option value='EGOIST'>EGOIST</option>
                <option value='DEW L'>DEW L</option>
                <option value='THE IZZAT'>THE IZZAT</option>
                <option value='JJ JIGOTT'>JJ JIGOTT</option>
                <option value='THE IZZAT Collection'>
                  THE IZZAT Collection
                </option>
                <option value='JIGOTT'>JIGOTT</option>
                <option value='CLUBMONACO'>CLUBMONACO</option>
                <option value='SJSJ'>SJSJ</option>
                <option value='SYSTEM'>SYSTEM</option>
              </Select>
            </FormRow>
            <FormRow>
              <Label>사이즈:</Label>
              <SizeContainer>
                <SizeSelect
                  name='sizeOnePieceSeq'
                  value={member.sizeOnePieceSeq}
                  onChange={handleChange}
                >
                  <option value=''>원피스(선택)</option>
                  <option value='201'>44(S)</option>
                  <option value='202'>55(M)</option>
                  <option value='203'>66(L)</option>
                  <option value='210'>Free</option>
                </SizeSelect>
                <SizeSelect
                  name='sizeJacketSeq'
                  value={member.sizeJacketSeq}
                  onChange={handleChange}
                >
                  <option value=''>정(선택)</option>
                  <option value='201'>44(S)</option>
                  <option value='202'>55(M)</option>
                  <option value='203'>66(L)</option>
                  <option value='210'>Free</option>
                </SizeSelect>
                <SizeSelect
                  name='sizeCoatSeq'
                  value={member.sizeCoatSeq}
                  onChange={handleChange}
                >
                  <option value=''>아우터(선택)</option>
                  <option value='201'>44(S)</option>
                  <option value='202'>55(M)</option>
                  <option value='203'>66(L)</option>
                  <option value='210'>Free</option>
                </SizeSelect>
              </SizeContainer>
            </FormRow>
            <FormRow>
              <Label>계정상태:</Label>
              <Select
                name='status'
                value={member.status}
                onChange={handleChange}
              >
                <option value='인증대기'>인증대기</option>
                <option value='인증완료'>인증완료</option>
                <option value='계정잠김'>계정잠김</option>
                <option value='탈퇴완료'>탈퇴완료</option>
              </Select>
            </FormRow>
            <FormRow>
              <Label>회원타입:</Label>
              <Select
                name='memberType'
                value={member.memberType}
                onChange={handleChange}
              >
                <option value='일반회원'>일반회원</option>
                <option value='멤버'>멤버</option>
                <option value='단골'>단골</option>
                <option value='KFBA'>KFBA</option>
              </Select>
            </FormRow>
          </RightForm>
        </FormContainer>
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
          <TabItem
            className={activeTab === 'tab_delivery' ? 'active' : ''}
            onClick={() => handleTabClick('tab_delivery')}
          >
            배송지 정보
          </TabItem>
          <TabItem
            className={activeTab === 'tab_review' ? 'active' : ''}
            onClick={() => handleTabClick('tab_review')}
          >
            사용후기
          </TabItem>
          <TabItem
            className={activeTab === 'tab_hook' ? 'active' : ''}
            onClick={() => handleTabClick('tab_hook')}
          >
            걸어두기
          </TabItem>
          <TabItem
            className={activeTab === 'tab_point' ? 'active' : ''}
            onClick={() => handleTabClick('tab_point')}
          >
            포인트 내역
          </TabItem>
          <TabItem
            className={activeTab === 'tab_history' ? 'active' : ''}
            onClick={() => handleTabClick('tab_history')}
          >
            이용 내역
          </TabItem>
        </TabMenu>
        <TabContent>
          {activeTab === 'tab_delivery' && (
            <TabPane>
              <Table>
                <thead>
                  <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>배송자명</th>
                    <th className='text-center'>수령인</th>
                    <th className='text-center'>주소</th>
                    <th className='text-center'>연락처</th>
                    <th className='text-center'>연락처2</th>
                    <th className='text-center'>기본설정</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>1</td>
                    <td className='text-center'>아크로리버</td>
                    <td className='text-center'>이다지</td>
                    <td className='text-center'>
                      서울 서초구 강남대로 159 102동 1103호 (06508)
                    </td>
                    <td className='text-center'>01027374912</td>
                    <td className='text-center'>01037583875</td>
                    <td className='text-center'>Y</td>
                  </tr>
                </tbody>
              </Table>
            </TabPane>
          )}
          {activeTab === 'tab_review' && (
            <TabPane>{/* 사용후기 내용 */}</TabPane>
          )}
          {activeTab === 'tab_hook' && <TabPane>{/* 걸어두기 내용 */}</TabPane>}
          {activeTab === 'tab_point' && (
            <TabPane>{/* 포인트 내역 내용 */}</TabPane>
          )}
          {activeTab === 'tab_history' && (
            <TabPane>{/* 이용 내역 내용 */}</TabPane>
          )}
        </TabContent>
      </Container>
    </ThemeProvider>
  );
};

export default MemberDetail;

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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`;

const ReadOnlyInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  max-width: 300px;
`;

const SizeContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;

const SizeSelect = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  flex: 1;
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

const CheckButton = styled.button`
  padding: 5px 10px;
  min-width: 80px;
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

const TabMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 20px 0;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const TabItem = styled.li`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const TabContent = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
`;

const TabPane = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;
