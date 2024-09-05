import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const Modal = ({ isOpen, onClose }) => {
  const brands = [
    'CC Collect',
    'CLUB Monaco',
    'DECO',
    'DEW L',
    'EGOIST',
    'it MICHAA',
    'JIGOTT',
    'JJ JIGOTT',
    'KENNETH LADY',
    'LÄTT BY T',
    'LINE',
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [cancelConfirmationVisible, setCancelConfirmationVisible] =
    useState(false);

  const handleBrandSelect = (brand) => {
    const isSelected = selectedBrands.includes(brand);
    if (isSelected) {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand));
    } else if (selectedBrands.length < 3) {
      setSelectedBrands((prev) => [...prev, brand]);
    }
  };

  const handleCompleteSelection = () => {
    if (selectedBrands.length !== 3) {
      setWarningModalVisible(true);
    } else {
      onClose();
    }
  };

  const closeWarningModal = () => {
    setWarningModalVisible(false);
  };

  const handleCancelClick = () => {
    setCancelConfirmationVisible(true);
  };

  const confirmCancel = () => {
    setCancelConfirmationVisible(false);
    onClose();
  };

  const declineCancel = () => {
    setCancelConfirmationVisible(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              브랜드 선택 <GrayText>(3가지 선택)</GrayText>
            </ModalTitle>
            <GrayLine />
          </ModalHeader>

          <ModalBody>
            <BrandSelectionGrid>
              {brands.map((brand, index) => (
                <BrandOption
                  key={index}
                  selected={selectedBrands.includes(brand)}
                  onClick={() => handleBrandSelect(brand)}
                >
                  {brand}
                </BrandOption>
              ))}
            </BrandSelectionGrid>
          </ModalBody>

          <GrayLine />
          <ButtonRow>
            <CancelButton onClick={handleCancelClick}>취소</CancelButton>
            <CompleteButton onClick={handleCompleteSelection}>
              선택완료
            </CompleteButton>
          </ButtonRow>
        </ModalContent>
      </ModalOverlay>

      {warningModalVisible && (
        <WarningModal>
          <WarningModalContent>
            <ModalHeader>
              <ModalTitle>알림</ModalTitle>
              <GrayLine />
            </ModalHeader>
            <WarningMessage>3가지를 선택해야 합니다!</WarningMessage>
            <GrayLine />
            <ButtonRow>
              <CancelButton onClick={closeWarningModal}>닫기</CancelButton>
            </ButtonRow>
          </WarningModalContent>
        </WarningModal>
      )}

      {cancelConfirmationVisible && (
        <WarningModal>
          <WarningModalContent>
            <ModalHeader>
              <ModalTitle>알림</ModalTitle>
              <GrayLine />
            </ModalHeader>
            <WarningMessage>설정을 취소하시겠습니까?</WarningMessage>
            <GrayLine />
            <ButtonRow>
              <CancelButton onClick={declineCancel}>아니요</CancelButton>
              <CompleteButton onClick={confirmCancel}>네</CompleteButton>
            </ButtonRow>
          </WarningModalContent>
        </WarningModal>
      )}
    </>
  );
};

export default Modal;

// 스타일 정의
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px;
`;

const ModalContent = styled.div`
  background-color: ${Theme.colors.white};
  padding: 20px;
  max-width: 500px;
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.p`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 800;
  font-size: 16px;
`;

const GrayText = styled.span`
  color: ${Theme.colors.gray1};
`;

const GrayLine = styled.hr`
  border: none;
  width: 100%;
  border: 1px solid ${Theme.colors.gray0};
  margin: 20px 0;
`;

const ModalBody = styled.div`
  flex-grow: 1;
`;

const BrandSelectionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const BrandOption = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? Theme.colors.yellow : Theme.colors.white};
  color: ${(props) =>
    props.selected ? Theme.colors.white : Theme.colors.black};
  border: 1px solid ${Theme.colors.gray1};
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: auto;
`;

const CancelButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${Theme.colors.gray1};
  color: ${Theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-family: 'NanumSquare Neo OTF';
  font-weight: 800;
  font-size: 16px;
`;

const CompleteButton = styled(CancelButton)`
  background-color: ${Theme.colors.black};
`;

const WarningModal = styled(ModalOverlay)`
  background-color: rgba(0, 0, 0, 0.7);
`;

const WarningModalContent = styled(ModalContent)`
  max-width: 376px;
  height: 329px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WarningMessage = styled.p`
  color: ${Theme.colors.black};
  font-family: 'NanumSquare Neo OTF';
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  margin: 0;
`;
