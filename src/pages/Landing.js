// src/components/Landing/Landing.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import LandingPage1 from '../components/Landing/LandingPage1.js';
import LandingPage2 from '../components/Landing/LandingPage2.js';
import LandingPage3 from '../components/Landing/LandingPage3.js';
import LandingPage4 from '../components/Landing/LandingPage4.js';
import LandingPage5 from '../components/Landing/LandingPage5.js';

const Landing = () => {
  return (
    <ThemeProvider theme={Theme}>
      <LandingContainer>
        <LandingPage1 />
        <LandingPage2 />
        <LandingPage3 />
        <LandingPage4 />
        <LandingPage5 />
      </LandingContainer>
    </ThemeProvider>
  );
};

export default Landing;

// 스타일 컴포넌트 정의
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;
