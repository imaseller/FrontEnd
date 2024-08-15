import React, { useState } from 'react';
import styled from 'styled-components';

const AgreementSection = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState({
    agree1: false,
    agree2: false,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleAllChecked = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setIndividualChecks({
      agree1: newValue,
      agree2: newValue,
    });
  };

  const handleIndividualCheck = (e) => {
    const { id, checked } = e.target;
    setIndividualChecks((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleViewDetails = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <AgreementWrapper>
      <AllAgreeWrapper>
        <Checkbox
          type='checkbox'
          id='agreeAll'
          checked={allChecked}
          onChange={handleAllChecked}
        />
        <Label htmlFor='agreeAll'>전체동의</Label>
      </AllAgreeWrapper>

      <ContentContainer>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id='agree1'
            required
            checked={individualChecks.agree1}
            onChange={handleIndividualCheck}
          />
          <Label htmlFor='agree1'>이용약관 동의 (필수)</Label>
        </CheckboxWrapper>
        <InputWrapper>
          <DescriptionWrapper>
            <Description>이용 전 필수사항 및 주의사항 안내.</Description>
          </DescriptionWrapper>
          <ViewDetailsButton onClick={() => handleViewDetails('이용약관 내용')}>
            전체보기
          </ViewDetailsButton>
        </InputWrapper>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id='agree2'
            required
            checked={individualChecks.agree2}
            onChange={handleIndividualCheck}
          />
          <Label htmlFor='agree2'>개인정보수집 동의 (필수)</Label>
        </CheckboxWrapper>
        <InputWrapper>
          <DescriptionWrapper>
            <Description>서비스 이용에 필요한 개인정보 수집 안내.</Description>
          </DescriptionWrapper>
          <ViewDetailsButton
            onClick={() => handleViewDetails('개인정보수집 내용')}
          >
            전체보기
          </ViewDetailsButton>
        </InputWrapper>
      </ContentContainer>

      {modalVisible && (
        <Modal>
          <ModalContent>
            <p>{modalContent}</p>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </AgreementWrapper>
  );
};

export default AgreementSection;

const AgreementWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

const AllAgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px;
  position: relative;
`;

const Checkbox = styled.input`
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  accent-color: ${({ theme }) => theme.colors.pink5};
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.black};
`;

const ViewDetailsButton = styled.button`
  width: 69px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 10px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.helperText};
  margin: 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.pink5};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
