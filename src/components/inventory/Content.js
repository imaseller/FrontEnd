import React from 'react';
import styled from 'styled-components';
import SettingIcon from '../../img/inventory/Setting.svg';
import Theme from '../../styles/Theme.js';

const Content = ({ item }) => {
  return (
    <ContentContainer>
      <ImageWrapper>
        <ImageContainer>
          <Image src={item.image} alt='Item' />
          <TextOverlay>
            <SmallText>Fashion Brand</SmallText>
            <LargeText>{item.imgtitle}</LargeText>
          </TextOverlay>
          <SettingsIcon src={SettingIcon} alt='Settings' />
        </ImageContainer>
        <DescriptionBox>
          <Title>{item.title}</Title>
          <Details>
            <Container>
              <DescriptionLine>
                <Label>원피스</Label>
                <Data>{item.dressSize}</Data>
              </DescriptionLine>
              <Separator>|</Separator>
              <DescriptionLine>
                <Label>상의</Label>
                <Data>{item.topSize}</Data>
              </DescriptionLine>
              <Separator>|</Separator>
              <DescriptionLine>
                <Label>하의</Label>
                <Data>{item.bottomSize}</Data>
              </DescriptionLine>
            </Container>
            <Container>
              <DescriptionLine>
                <Label>브랜드</Label>
                <Data>{item.brand}</Data>
              </DescriptionLine>
            </Container>
            <Container>
              <DescriptionLine>
                <Label>상품 노출수</Label>
                <Data>{item.exposure}회</Data>
              </DescriptionLine>
              <Separator>|</Separator>
              <DescriptionLine>
                <Label>노출기간</Label>
                <Data>월 {item.period}회</Data>
              </DescriptionLine>
            </Container>
          </Details>
        </DescriptionBox>
      </ImageWrapper>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  height: 100%;
  margin-right: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 360px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 150px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SmallText = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 11px;

  color: #000000;
`;

const LargeText = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 350;
  font-size: 30px;
  line-height: 33px;

  color: #ffffff;
`;

const SettingsIcon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'NanumSquare Neo OTF';
  font-size: 12px;
  line-height: 13px;
  border-left: 1px solid ${Theme.colors.gray1};
  border-right: 1px solid ${Theme.colors.gray1};
  border-top: 1px solid ${Theme.colors.gray1};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  border-bottom: 1px solid ${Theme.colors.gray1};
`;

const DescriptionLine = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-weight: 400;
  color: #000;
`;

const Data = styled.span`
  font-weight: 900;
  color: #000;
  margin-left: 5px;
`;

const Separator = styled.span`
  margin: 0 10px;
  color: ${Theme.colors.gray1};
`;

const Title = styled.h2`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 15px;
  margin-bottom: 10px;
`;
