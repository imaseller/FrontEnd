import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const PageSettingsContent = () => {
  return (
    <ContentContainer>
      <h1>유형 분석</h1>
      <p>여기에서 사용자의 유형을 분석할 수 있습니다.</p>
    </ContentContainer>
  );
};

export default PageSettingsContent;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  padding: 125px 27px 0 27px;
  border: 1px solid ${Theme.colors.gray1};
`;
