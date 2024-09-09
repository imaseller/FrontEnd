import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DetailHeader = ({ icons }) => {
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const iconRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (iconRefs.current[selectedIconIndex]) {
      setUnderlineLeft(iconRefs.current[selectedIconIndex].offsetLeft);
    }
  }, [selectedIconIndex]);

  const handleIconClick = (index, route) => {
    setSelectedIconIndex(index);
    navigate(route);
  };

  return (
    <HeaderContainer>
      {icons.map((icon, index) => (
        <IconContainer
          key={icon.alt}
          onClick={() => handleIconClick(index, icon.route)}
          ref={(el) => (iconRefs.current[index] = el)}
        >
          <Icon src={icon.src} alt={icon.alt} />
          <IconText>{icon.alt}</IconText>
        </IconContainer>
      ))}
      <Underline left={underlineLeft} />
    </HeaderContainer>
  );
};

export default DetailHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 30px 10px 0;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
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

const Underline = styled.div`
  position: absolute;
  bottom: -15px;
  left: ${({ left }) => `${left}px`};
  width: 45px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.black};
  transition: left 0.3s ease;
`;
