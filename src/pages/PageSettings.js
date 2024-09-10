import React from 'react';
import styled from 'styled-components';
import Content from '../components/PageSettings/PageSettingsContent.js';
import BottomNav from '../components/Home/BottomNav';
import Theme from '../styles/Theme';
import ExIMG1 from '../img/Home/ExIMG1.svg';

const PageSettings = () => {
  const data = {
    profileName: 'Mr J',
    eventDate: 'D-DAY',
    eventPeriod: '09.03(오전 0시) - 09.05(오전 0시)',
    eventDescription: 'SANDRO 언발 플레어 미니원피스 공구',
    items: [
      { imageSrc: ExIMG1, text: 'SANDRO 언발 플레어 미니원피스' },
      { imageSrc: ExIMG1, text: 'ZOOC 볼륨소매 랩 카라 블라우스' },
      {
        imageSrc: ExIMG1,
        text: 'MICHA 테일러드 카라 머메이드 원피스',
      },
      {
        imageSrc: ExIMG1,
        text: 'CC Collect 프릴 디테일 로우웨이스트 원피스',
      },
    ],
  };

  return (
    <AnalysisContainer>
      <ContentWrapper>
        <Content
          profileName={data.profileName}
          eventDate={data.eventDate}
          eventPeriod={data.eventPeriod}
          eventDescription={data.eventDescription}
          items={data.items}
        />
      </ContentWrapper>
      <BottomNav />
    </AnalysisContainer>
  );
};

export default PageSettings;

// Styled Components
const AnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid ${Theme.colors.gray1};

  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
