import React from 'react';
import styled from 'styled-components';

const SizeSelectionSection = () => (
  <>
    <Label>평소 입는 원피스(사이즈)</Label>
    <Select name='sizeOnePieceSeq' id='sizeOnePieceSeq' required>
      <option value='' disabled selected>
        사이즈를 선택하세요
      </option>
      <option value='201'>S (44)</option>
      <option value='202'>M (55)</option>
      <option value='203'>L (66)</option>
    </Select>

    <Label>평소 입는 정장(사이즈)</Label>
    <Select name='sizeJacketSeq' id='sizeJacketSeq' required>
      <option value='' disabled selected>
        사이즈를 선택하세요
      </option>
      <option value='201'>S (44)</option>
      <option value='202'>M (55)</option>
      <option value='203'>L (66)</option>
    </Select>

    <Label>평소 입는 아우터(사이즈)</Label>
    <Select name='sizeCoatSeq' id='sizeCoatSeq' required>
      <option value='' disabled selected>
        사이즈를 선택하세요
      </option>
      <option value='201'>S (44)</option>
      <option value='202'>M (55)</option>
      <option value='203'>L (66)</option>
    </Select>
  </>
);

export default SizeSelectionSection;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  width: 20vw;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;