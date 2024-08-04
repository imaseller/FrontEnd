import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const ReviewDetail = () => {
  const navigate = useNavigate();
  const { no } = useParams();

  const [review, setReview] = useState({
    productName: '투인원 스트라이프 원피스',
    brand: 'MAJE',
    rating: 5,
    usagePeriod: '2024.06.04 - 2024.06.07',
    size: '66(L)',
    color: 'Blue',
    content: '잘 입었어요.',
    exposure: '공개',
  });

  const handleSave = () => {
    console.log('저장하기');
  };

  const handleCancel = () => {
    navigate('/admin/reviewlist');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>사용후기 상세</HeaderTitle>
        </Header>
        <DetailContainer>
          <DetailTable>
            <tbody>
              <tr>
                <DetailTitle>제품명</DetailTitle>
                <DetailContent>{review.productName}</DetailContent>
                <DetailTitle>브랜드</DetailTitle>
                <DetailContent>{review.brand}</DetailContent>
              </tr>
              <tr>
                <DetailTitle>평가</DetailTitle>
                <DetailContent>{review.rating}</DetailContent>
                <DetailTitle>이용기간</DetailTitle>
                <DetailContent>{review.usagePeriod}</DetailContent>
              </tr>
              <tr>
                <DetailTitle>사이즈</DetailTitle>
                <DetailContent>{review.size}</DetailContent>
                <DetailTitle>색상</DetailTitle>
                <DetailContent>{review.color}</DetailContent>
              </tr>
              <tr>
                <DetailTitle>내용</DetailTitle>
                <DetailContent colSpan={3}>
                  <Textarea
                    value={review.content}
                    onChange={(e) =>
                      setReview({ ...review, content: e.target.value })
                    }
                  />
                </DetailContent>
              </tr>
              <tr>
                <DetailTitle>비공개여부</DetailTitle>
                <DetailContent colSpan={3}>
                  <RadioGroup>
                    <label>
                      <input
                        type='radio'
                        value='공개'
                        checked={review.exposure === '공개'}
                        onChange={(e) =>
                          setReview({ ...review, exposure: e.target.value })
                        }
                      />
                      공개
                    </label>
                    <label>
                      <input
                        type='radio'
                        value='비공개'
                        checked={review.exposure === '비공개'}
                        onChange={(e) =>
                          setReview({ ...review, exposure: e.target.value })
                        }
                      />
                      비공개
                    </label>
                  </RadioGroup>
                </DetailContent>
              </tr>
            </tbody>
          </DetailTable>
          <ButtonGroup>
            <ActionButton onClick={handleSave}>저장하기</ActionButton>
            <ActionButton onClick={handleCancel}>저장취소</ActionButton>
          </ButtonGroup>
        </DetailContainer>
      </Content>
    </ThemeProvider>
  );
};

export default ReviewDetail;

const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.WhiteBrown5};
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.heading.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 26px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

const DetailContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.default.fontSize};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 12px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }
`;

const DetailTitle = styled.th`
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;

const DetailContent = styled.td``;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  resize: none;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  }
`;
