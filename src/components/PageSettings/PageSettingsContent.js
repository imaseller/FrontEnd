import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import Theme from '../../styles/Theme';

const PageSettingsContent = ({
  profileName,
  eventDate,
  eventPeriod,
  eventDescription,
  items,
}) => {
  return (
    <ContentContainer>
      <Header>
        <ProfileSection>
          <ProfileImage />
          <ProfileInfo>
            <ProfileName>{profileName}</ProfileName>
          </ProfileInfo>
        </ProfileSection>
        <EventSection>
          <EventBox>
            <EventRow>
              <EventDate>{eventDate}</EventDate>
              <EventText>
                <EventPeriod>{eventPeriod}</EventPeriod>
                <EventDescription>{eventDescription}</EventDescription>
              </EventText>
            </EventRow>
          </EventBox>
        </EventSection>
      </Header>

      <Description>👉 직접 입어보고 맘에 드는 것만 소개해드려요 👈</Description>

      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>
            <ItemImage src={item.imageSrc} alt={item.text} />
            <ItemText>{item.text}</ItemText>
            <ArrowIcon />
          </Item>
        ))}
      </ItemList>
    </ContentContainer>
  );
};

export default PageSettingsContent;

// Styled Components
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  border: 1px solid ${Theme.colors.gray1};
  background-color: ${Theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${Theme.colors.gray3};
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const EventSection = styled.div`
  margin-top: 20px;
`;

const EventBox = styled.div`
  width: 375px;
  height: 80px;
  border: 0.5px solid #f6ae24;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* 왼쪽 상단에 정렬 */
`;

const EventRow = styled.div`
  display: flex;
  align-items: flex-start; /* 왼쪽 상단 정렬 */
  width: 100%;
`;

const EventDate = styled.span`
  color: #ffffff;
  background: #000000;
  padding: 5px 10px;
  width: 65px;
  margin-right: 10px;
  clip-path: polygon(0 0, 80% 0, 90% 50%, 80% 100%, 0 100%);

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
`;

const EventText = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventPeriod = styled.span`
  font-size: 14px;
  color: ${Theme.colors.gray2};
`;

const EventDescription = styled.span`
  font-size: 14px;
  color: ${Theme.colors.black};
  margin-top: 5px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  padding: 20px 0;
  color: ${Theme.colors.black};
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 375px;
  height: 70px;
  padding: 10px;
  border: 0.5px solid #cccccc;
  border-radius: 35px;
  margin: 0 auto;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${Theme.colors.gray3};
`;

const ItemText = styled.span`
  font-size: 14px;
  color: ${Theme.colors.black};
  flex: 1;
`;

const ArrowIcon = styled(FaChevronRight)`
  color: ${Theme.colors.gray2};
  font-size: 19px;
`;
