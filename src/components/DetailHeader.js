import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TypeAnalysisIcon from '../img/Header/HeaderTypeAnalysis.svg';
import MonitoringIcon from '../img/Header/HeaderMonitoring.svg';
import SettlementIcon from '../img/Header/HeaderCalculateDetail.svg';
import DeliveryIcon from '../img/Header/HeaderShippingDetail.svg';

const DetailHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <IconContainer onClick={() => navigate('/analysis')}>
        <Icon src={TypeAnalysisIcon} alt='유형 분석' />
        <IconText>유형 분석</IconText>
      </IconContainer>
      <IconContainer onClick={() => navigate('/monitoring')}>
        <Icon src={MonitoringIcon} alt='모니터링' />
        <IconText>모니터링</IconText>
      </IconContainer>
      <IconContainer onClick={() => navigate('/settlement')}>
        <Icon src={SettlementIcon} alt='정산 내역' />
        <IconText>정산 내역</IconText>
      </IconContainer>
      <IconContainer onClick={() => navigate('/delivery')}>
        <Icon src={DeliveryIcon} alt='배송 내역' />
        <IconText>배송 내역</IconText>
      </IconContainer>
    </HeaderContainer>
  );
};

export default DetailHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

const IconText = styled.span`
  font-size: 12px;
  color: #333;
`;
