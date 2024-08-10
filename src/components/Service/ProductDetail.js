import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

// 모의 데이터를 가져옵니다.
const mockProductData = {
  806: {
    no: 806,
    productName: '니트 배색 벨트드 짐엡 원피스',
    brand: 'ZOOC',
    category: '원피스',
    color: 'Cream',
    size: '44(S)-0 / 55(M)-1 / 66(L)-1 / Free-0',
    price: '384,300',
    description: '가슴부터 허리까지 배색된 스트랩이 돋보이는 제품입니다.',
    image: '/mnt/data/image.png', // 사용자가 업로드한 이미지 경로
    status: '시즌상품',
    use: 'N',
    registerDate: '2023.04.11',
  },
  // 다른 제품 데이터 추가 가능
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProductData[id];

  if (!product) {
    return <div>제품을 찾을 수 없습니다.</div>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header>제품관리</Header>
        <Form>
          <Row>
            <Label>제품명</Label>
            <Input
              type='text'
              value={`${product.productName} (${product.color})`}
              readOnly
            />
          </Row>
          <Row>
            <Label>분류</Label>
            <Select value={product.category} readOnly>
              <option value='원피스'>원피스</option>
              <option value='투피스'>투피스</option>
              {/* 다른 옵션 추가 가능 */}
            </Select>
          </Row>
          <Row>
            <Label>색상</Label>
            <Input type='text' value={product.color} readOnly />
          </Row>
          <Row>
            <Label>가격</Label>
            <Input type='text' value={product.price} readOnly />
          </Row>
          <Row>
            <Label>제품설명</Label>
            <Textarea value={product.description} readOnly />
          </Row>
          <Row>
            <Label>이미지</Label>
            <Image src={product.image} alt='제품 이미지' />
          </Row>
          <ButtonContainer>
            <Button primary>저장하기</Button>
            <Button>삭제하기</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default ProductDetail;

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;

const Select = styled.select`
  flex: 1;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  height: 100px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.blue : theme.colors.red};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.darkBlue : theme.colors.darkRed};
  }
`;
