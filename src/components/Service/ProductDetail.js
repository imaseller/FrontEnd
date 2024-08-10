import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const mockProductData = [
  {
    id: 806,
    productName: '니트 배색 벨티드 집업 원피스',
    brand: 'ZOOC',
    category: '원피스',
    color: 'Cream',
    size: '44(S)-0 / 55(M)-1 / 66(L)-1 / Free-0',
    priceRetail: '384,300',
    rentPrice3: '40,000',
    rentPrice5: '55,000',
    material: '겉감: 면 53% 나일론 41% 폴리우레탄 6% 안감:폴리에스터100%',
    thickness: '적당',
    elasticity: '약간있음',
    lining: '안감없음',
    texture: '적당',
    transparency: '비침없음',
    realSize: {
      '44(S)': { A: 0, B: 0, C: 0, D: 0, E: 0 },
      '55(M)': { A: 37, B: 90, C: 66, D: 60, E: 113 },
      '66(L)': { A: 39, B: 94, C: 70, D: 62, E: 115 },
    },
    quantity: {
      '44(S)': 0,
      '55(M)': 1,
      '66(L)': 1,
      Free: 0,
    },
    review: {
      video: '',
      image: '',
    },
    thumbnail: '/image.do?dir=item&img=20230411175710_2669.jpg',
    productNumber: 'Z231MSE013',
    description: '가슴부터 허리까지 밴딩소재로 되어있는 캐주얼한 제품입니다.',
    useSeason: ['봄', '가을', '겨울'],
    status: '시즌상품',
    useYn: 'N',
    registerDate: '2023.04.11',
  },
];

const brands = [
  { value: '58', label: 'S_Blanc' },
  { value: '57', label: 'CC Collect' },
  { value: '56', label: 'Tuo' },
];

const categories = [
  { value: 'C01', label: '의류' },
  { value: 'C02', label: '웨딩' },
  { value: 'C03', label: '주얼리' },
  { value: 'C04', label: '가방' },
];

const subCategories = [
  { value: '300', label: '원피스' },
  { value: '303', label: '투피스' },
  { value: '304', label: '상의' },
  { value: '305', label: '하의' },
  { value: '301', label: '정장' },
  { value: '302', label: '아우터' },
];

const seasons = ['봄', '여름', '가을', '겨울'];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = mockProductData.find(
      (item) => item.id.toString() === id
    );
    setProduct(foundProduct);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleCheckboxChange = (name, value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: prevProduct[name] === value ? '' : value,
    }));
  };

  const handleSeasonChange = (season) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      useSeason: prevProduct.useSeason.includes(season)
        ? prevProduct.useSeason.filter((s) => s !== season)
        : [...prevProduct.useSeason, season],
    }));
  };

  const handleSizeChange = (size, key, value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      realSize: {
        ...prevProduct.realSize,
        [size]: {
          ...prevProduct.realSize[size],
          [key]: value,
        },
      },
    }));
  };

  const handleQuantityChange = (size, value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: {
        ...prevProduct.quantity,
        [size]: value,
      },
    }));
  };

  if (!product) {
    return <div>제품을 찾을 수 없습니다.</div>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Title>제품 상세정보</Title>
        <ScrollContainer>
          <FlexContainer>
            <LeftSection>
              <FormGroup>
                <Label>제품명:</Label>
                <Input
                  type='text'
                  name='productName'
                  value={product.productName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>브랜드:</Label>
                <Select
                  name='brand'
                  value={product.brand}
                  onChange={handleChange}
                >
                  {brands.map((brand) => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>분류:</Label>
                <Select
                  name='category'
                  value={product.category}
                  onChange={handleChange}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </Select>
                <CheckboxGroup>
                  {subCategories.map((subCategory) => (
                    <CheckLabel key={subCategory.value}>
                      <input
                        type='checkbox'
                        value={subCategory.value}
                        checked={product.category === subCategory.value}
                        onChange={() => handleChange(subCategory.value)}
                      />
                      {subCategory.label}
                    </CheckLabel>
                  ))}
                </CheckboxGroup>
              </FormGroup>
              <FormGroup>
                <Label>용도:</Label>
                <CheckboxGroup>
                  {seasons.map((season) => (
                    <CheckLabel key={season}>
                      <input
                        type='checkbox'
                        value={season}
                        checked={
                          product.useSeason &&
                          product.useSeason.includes(season)
                        }
                        onChange={() => handleSeasonChange(season)}
                      />
                      {season}
                    </CheckLabel>
                  ))}
                </CheckboxGroup>
              </FormGroup>
              <FormGroup>
                <Label>색상:</Label>
                <Input
                  type='text'
                  name='color'
                  value={product.color}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>가격:</Label>
                <Input
                  type='text'
                  name='priceRetail'
                  value={product.priceRetail}
                  onChange={handleChange}
                  placeholder='리테일 가격'
                />
                <Input
                  type='text'
                  name='rentPrice3'
                  value={product.rentPrice3}
                  onChange={handleChange}
                  placeholder='3회 대여 가격'
                />
                <Input
                  type='text'
                  name='rentPrice5'
                  value={product.rentPrice5}
                  onChange={handleChange}
                  placeholder='5회 대여 가격'
                />
              </FormGroup>
              <FormGroup>
                <Label>제품소재:</Label>
                <TextArea
                  name='material'
                  value={product.material}
                  onChange={handleChange}
                />
              </FormGroup>
            </LeftSection>
            <RightSection>
              <FormGroup>
                <Label>실측사이즈:</Label>
                <SizeGroup>
                  {Object.entries(product.realSize).map(
                    ([size, measurements]) => (
                      <div key={size}>
                        <span>{size}</span>
                        {Object.entries(measurements).map(([key, value]) => (
                          <React.Fragment key={key}>
                            <LabelSmall>{key}</LabelSmall>
                            <InputSmall
                              type='number'
                              value={value}
                              onChange={(e) =>
                                handleSizeChange(size, key, e.target.value)
                              }
                            />
                          </React.Fragment>
                        ))}
                      </div>
                    )
                  )}
                </SizeGroup>
              </FormGroup>
              <FormGroup>
                <Label>사이즈 수량:</Label>
                <SizeQuantityGroup>
                  {Object.entries(product.quantity).map(([size, qty]) => (
                    <SizeQuantityRow key={size}>
                      <span>{size}</span>
                      <InputSmall
                        type='number'
                        value={qty}
                        onChange={(e) =>
                          handleQuantityChange(size, e.target.value)
                        }
                      />
                    </SizeQuantityRow>
                  ))}
                </SizeQuantityGroup>
              </FormGroup>
              <FormGroup>
                <Label>제품리뷰:</Label>
                <FileInput type='file' />
                <ImagePreview>
                  <img src={product.review.image} alt='제품 리뷰 이미지' />
                </ImagePreview>
              </FormGroup>
              <FormGroup>
                <Label>제품이미지:</Label>
                <FileInput type='file' />
                <ImagePreview>
                  <img src={product.thumbnail} alt='제품 이미지' />
                </ImagePreview>
              </FormGroup>
              <FormGroup>
                <Label>노출여부:</Label>
                <CheckboxGroup>
                  <CheckLabel>
                    <input
                      type='checkbox'
                      checked={product.useYn === 'Y'}
                      onChange={() => handleCheckboxChange('useYn', 'Y')}
                    />
                    노출
                  </CheckLabel>
                  <CheckLabel>
                    <input
                      type='checkbox'
                      checked={product.useYn === 'N'}
                      onChange={() => handleCheckboxChange('useYn', 'N')}
                    />
                    비노출
                  </CheckLabel>
                </CheckboxGroup>
              </FormGroup>
              <FormGroup>
                <Label>설명:</Label>
                <TextArea
                  name='description'
                  value={product.description}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>상태:</Label>
                <Input
                  type='text'
                  name='status'
                  value={product.status}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>등록일:</Label>
                <Input
                  type='text'
                  name='registerDate'
                  value={product.registerDate}
                  readOnly
                />
              </FormGroup>
            </RightSection>
          </FlexContainer>
        </ScrollContainer>
      </Container>
    </ThemeProvider>
  );
};

export default ProductDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const ScrollContainer = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 20px;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
`;

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 820px;
  margin: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  width: 150px;
  margin-bottom: 10px;
`;

const LabelSmall = styled.label`
  margin-right: 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  max-width: 160px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const InputSmall = styled.input`
  width: 100px;
  margin-right: 5px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Select = styled.select`
  flex: 1;
  max-width: 160px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const TextArea = styled.textarea`
  flex: 1;
  max-width: 525px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 120px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  label {
    margin-right: 10px;
    margin-bottom: 5px;
  }
  input {
    margin-right: 5px;
  }
`;

const CheckboxGrouprow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  width: 120px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;

const SizeGroup = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }
  span {
    width: 60px;
    margin-right: 10px;
  }
`;

const SizeQuantityGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SizeQuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SizeDescription = styled.div`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
`;

const FileInput = styled.input`
  margin-top: 10px;
`;

const ImagePreview = styled.div`
  margin-top: 10px;
  img {
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
  }
`;
