import React from 'react';
import styled from 'styled-components';

const ProductDetails = () => {
  const materialInfo = [
    {
      label: '겉감',
      values: [
        { text: '폴리에스터 48%', bgColor: '#AAAAAA' },
        { text: '면 38%', bgColor: '#AAAAAA' },
        { text: '마 14%', bgColor: '#AAAAAA' },
      ],
    },
    {
      label: '안감',
      values: [{ text: '폴리에스터 100%', bgColor: '#AAAAAA' }],
    },
    {
      label: '배색',
      values: [{ text: '폴리에스터 100%', bgColor: '#AAAAAA' }],
    },
    {
      label: '부속',
      values: [
        { text: '레이온 41%', bgColor: '#AAAAAA' },
        { text: '면 39%', bgColor: '#AAAAAA' },
        { text: '나일론 20%', bgColor: '#AAAAAA' },
      ],
    },
  ];

  const productDetails = [
    { label: '품번', value: 'MIO7WOP080' },
    {
      label: '계절감',
      type: 'season',
      values: [
        { text: '봄', bgColor: '#AAAAAA' },
        { text: '여름', bgColor: '#AAAAAA' },
      ],
    },
    { label: '제조사', value: '(주)시선인터내셔널 - (대한민국)' },
    {
      label: '제조연월',
      value: '2024.06 - (품질보증기간은 구입일로부터 1년 이내)',
    },
  ];

  return (
    <Container>
      <Section>
        <Title>제품원단 정보</Title>
        <MaterialInfo>
          {materialInfo.map((item, index) => (
            <MaterialRow key={index}>
              <MaterialLabel>{item.label}</MaterialLabel>
              <MaterialValues>
                {item.values.map((value, idx) => (
                  <MaterialValue key={idx} bgColor={value.bgColor}>
                    {value.text}
                  </MaterialValue>
                ))}
              </MaterialValues>
            </MaterialRow>
          ))}
        </MaterialInfo>
      </Section>

      <Section>
        <Title>제품상세 제공고시</Title>
        <DetailInfo>
          {productDetails.map((item, index) => (
            <InfoRow key={index}>
              <Label>{item.label}</Label>
              {item.type === 'season' ? (
                <SeasonValues>
                  {item.values.map((value, idx) => (
                    <SeasonValue key={idx} bgColor={value.bgColor}>
                      {value.text}
                    </SeasonValue>
                  ))}
                </SeasonValues>
              ) : (
                <Value>{item.value}</Value>
              )}
            </InfoRow>
          ))}
        </DetailInfo>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  margin-bottom: 10px;
`;

const MaterialInfo = styled.div``;

const MaterialRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  padding: 10px;
`;

const MaterialLabel = styled.div`
  width: 50px;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 800;
  font-size: 12px;
  color: #000000;
  text-align: center;
  margin-right: 10px;
`;

const MaterialValues = styled.div`
  display: flex;
  gap: 10px;
`;

const MaterialValue = styled.div`
  background: ${(props) => props.bgColor || '#AAAAAA'};
  border-radius: 2px;
  padding: 5px 10px;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 10px;
  color: #ffffff;
`;

const DetailInfo = styled.div`
  background: #ffffff;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  padding: 10px;
`;

const Label = styled.div`
  width: 50px;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 800;
  font-size: 12px;
  color: #000000;
  text-align: center;
  margin-right: 10px;
`;

const Value = styled.div`
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 10px;
  color: #000000;
`;

const SeasonValues = styled.div`
  display: flex;
  gap: 10px;
`;

const SeasonValue = styled.div`
  background: ${(props) => props.bgColor || '#AAAAAA'};
  border-radius: 2px;
  padding: 5px 10px;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 10px;
  color: #ffffff;
`;

export default ProductDetails;