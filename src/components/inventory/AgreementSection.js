import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const AgreementSection = () => {
  const [individualChecks, setIndividualChecks] = useState({
    agree1: false,
    agree2: false,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [cancelConfirmationVisible, setCancelConfirmationVisible] =
    useState(false);
  const [modalContent, setModalContent] = useState('');
  const [brands, setBrands] = useState([
    { name: 'CC Collect', selected: false },
    { name: 'CLUB Monaco', selected: false },
    { name: 'DECO', selected: false },
    { name: 'DEW L', selected: false },
    { name: 'EGOIST', selected: false },
    { name: 'it MICHAA', selected: false },
    { name: 'JIGOTT', selected: false },
    { name: 'JJ JIGOTT', selected: false },
    { name: 'KENNETH LADY', selected: false },
    { name: 'LÄTT BY T', selected: false },
    { name: 'LINE', selected: false },
  ]);

  const [warningModalVisible, setWarningModalVisible] = useState(false);

  const handleBrandSelect = (index) => {
    const selectedCount = brands.filter((brand) => brand.selected).length;
    if (selectedCount < 3 || brands[index].selected) {
      setBrands((prevBrands) =>
        prevBrands.map((brand, i) =>
          i === index ? { ...brand, selected: !brand.selected } : brand
        )
      );
    }
  };

  const handleViewDetails = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCompleteSelection = () => {
    const selectedCount = brands.filter((brand) => brand.selected).length;
    if (selectedCount !== 3) {
      setWarningModalVisible(true);
    } else {
      closeModal();
    }
  };

  const closeWarningModal = () => {
    setWarningModalVisible(false);
  };

  const handleCancelSelection = () => {
    setCancelConfirmationVisible(true);
  };

  const confirmCancel = () => {
    setCancelConfirmationVisible(false);
    closeModal();
  };

  const declineCancel = () => {
    setCancelConfirmationVisible(false);
  };

  return (
    <AgreementWrapper>
      <ContentContainer>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id='agree1'
            required
            checked={individualChecks.agree1}
            onChange={(e) =>
              setIndividualChecks({
                ...individualChecks,
                agree1: e.target.checked,
              })
            }
          />
          <Label htmlFor='agree1'>
            정보입력 동의 <RequiredText>(필수)</RequiredText>
          </Label>
        </CheckboxWrapper>
        <InputWrapper>
          <DescriptionWrapper>
            <Description>설정에 필요한 정보입력 동의 안내.</Description>
          </DescriptionWrapper>
          <ViewDetailsButton
            onClick={() => handleViewDetails('내용을 입력하세요.')}
          >
            전체보기
          </ViewDetailsButton>
        </InputWrapper>
      </ContentContainer>

      {modalVisible && (
        <Modal>
          <ModalContent>
            <ContentWrapper>
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
                      selected={brand.selected}
                      onClick={() => handleBrandSelect(index)}
                    >
                      {brand.name}
                    </BrandOption>
                  ))}
                </BrandSelectionGrid>
              </ModalBody>
              <GrayLine />
              <ButtonRow>
                <CancelButton onClick={handleCancelSelection}>
                  취소
                </CancelButton>
                <CompleteButton onClick={handleCompleteSelection}>
                  선택완료
                </CompleteButton>
              </ButtonRow>
            </ContentWrapper>
          </ModalContent>
        </Modal>
      )}

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
    </AgreementWrapper>
  );
};

export default AgreementSection;

const AgreementWrapper = styled.div`
  background-color: ${Theme.colors.white};
  margin-bottom: 20px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  background-color: ${Theme.colors.lightgray};
  border: 1px solid ${Theme.colors.gray0};
  padding: 20px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${Theme.colors.white};
  border: 1px solid ${Theme.colors.gray3};
  padding: 10px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  appearance: none;
  background-color: ${Theme.colors.white};
  border: 1px solid ${Theme.colors.gray2};
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: ${Theme.colors.white};
    border-color: ${Theme.colors.gray1};
  }

  &:checked::before {
    content: '✔';
    color: ${Theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Label = styled.label`
  ${Theme.fonts.default};
  color: ${Theme.colors.black};
`;

const RequiredText = styled.span`
  color: ${Theme.colors.gray2};
`;

const ViewDetailsButton = styled.button`
  width: 69px;
  height: 34px;
  background-color: ${Theme.colors.black};
  color: ${Theme.colors.white};
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 800;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
`;

const Description = styled.p`
  color: ${Theme.colors.gray};
  margin: 0;
  font-weight: 700;
  font-size: 12px;
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
  justify-content: flex-end; // Ensures content is at the bottom
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Separates content and button row
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.p`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-weight: 800;
  font-size: 16px;
  margin-top: 20px;
`;

const GrayText = styled.span`
  color: ${Theme.colors.gray1};
`;

const ModalBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BrandSelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`;

const BrandOption = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? Theme.colors.yellow : Theme.colors.white};
  border: 1px solid ${Theme.colors.gray1};
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const GrayLine = styled.hr`
  border: none;
  width: 100%;
  border: 1px solid ${Theme.colors.gray0};
  margin: 20px 0;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: auto; // Ensures button row stays at the bottom
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
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;

  text-align: center;

  color: #ffffff;
`;

const CompleteButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${Theme.colors.black};
  color: ${Theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  text-align: center;

  color: #ffffff;
`;

const WarningModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 27px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  justify-content: center;
  margin: 0; // Ensures proper centering
`;

const CloseButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${Theme.colors.gray2};
  color: ${Theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
`;
