import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Theme from '../styles/Theme';

const Analysis = () => {
  return (
    <AnalysisContainer>
      <Header />
      <Content>
        <Title>페이지 분석</Title>
        <Description>
          이 페이지에서는 웹사이트의 성능과 사용자 분석 결과를 확인할 수
          있습니다.
        </Description>
      </Content>
    </AnalysisContainer>
  );
};

export default Analysis;

const AnalysisContainer = styled.div`
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid ${Theme.colors.gray1};
`;

const Content = styled.div`
  padding: 20px;
  background-color: ${Theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${Theme.colors.black};
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${Theme.colors.gray1};
`;
