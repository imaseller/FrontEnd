import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const mockProductData = [
  {
    no: 806,
    productName: '니트 배색 벨트드 짐엡 원피스',
    brand: 'ZOOC',
    category: '원피스',
    color: 'Cream',
    size: '44(S)-0 / 55(M)-1 / 66(L)-1 / Free-0',
    price: '384,300',
    status: '시즌상품',
    use: 'N',
    registerDate: '2023.04.11',
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockProductData.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (no) => {
    navigate(`/admin/productlist/detail/${no}`);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>제품 관리</HeaderTitle>
          <SearchContainer>
            <SearchInput
              type='text'
              placeholder='제품명 검색'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </Header>
        <Container>
          <TotalCount>총 {filteredData.length}개</TotalCount>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>제품명</th>
                <th>브랜드</th>
                <th>분류</th>
                <th>색상</th>
                <th>사이즈</th>
                <th>리테일 금액</th>
                <th>상태</th>
                <th>사용</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((product, index) => (
                <tr key={index}>
                  <td>{product.no}</td>
                  <ProductName onClick={() => handleProductClick(product.no)}>
                    {product.productName}
                  </ProductName>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.color}</td>
                  <td>{product.size}</td>
                  <td>{product.price}</td>
                  <td>{product.status}</td>
                  <td>{product.use}</td>
                  <td>{product.registerDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            <PageButton>«</PageButton>
            <PageButton>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>»</PageButton>
          </Pagination>
        </Container>
      </Content>
    </ThemeProvider>
  );
};

export default ProductList;

const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
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
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;
`;

const TotalCount = styled.div`
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    min-width: 60px;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: center;
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }
`;

const ProductName = styled.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fonts.SmallButton.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  }
`;
