import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/Main/BottomNav.js';

const DetailLayout = () => {
  return (
    <div>
      {/* 메인 콘텐츠 영역 */}
      <div style={{ paddingBottom: '60px' }}>
        {' '}
        {/* BottomNav 높이 만큼 패딩 추가 */}
        <Outlet /> {/* 여기에서 내부 페이지가 렌더링됩니다. */}
      </div>
      <BottomNav /> {/* 항상 고정된 BottomNav */}
    </div>
  );
};

export default DetailLayout;
