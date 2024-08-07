// Theme.js
import { css } from 'styled-components';

const Theme = {
  fonts: {
    mainTitle: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 600;
      font-size: 54px;
      line-height: 1.2;
    `,
    heading: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 500;
      font-size: 28px;
      line-height: 1.3;
    `,
    default: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
    `,
    helperText: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.4;
    `,
    BigButton: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 600;
      font-size: 30px;
      line-height: 1.2;
    `,
    SmallButton: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 800;
      font-size: 20px;
      line-height: 1.2;
    `,
    subTitle: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
    `,
  },
  colors: {
    red1: '#B37371',
    red2: '#CD9191',
    red3: '#EECBCA',
    pink1: '#FDEFEE',
    pink2: '#F7A29D',
    pink3: '#F77770',
    pink4: '#F85959',
    pink5: '#E93C3C',
    gray: '#B1B1B1',
    black: '#000000',
    white: '#FFFFFF',
    blue: '#004DFF',
    yellow: '#FFF375',
    WhiteBrown1: '#f7e9e3',
    WhiteBrown2: '#eed4c8',
    WhiteBrown3: '#e5bfae',
    WhiteBrown4: '#daaa94',
    WhiteBrown5: '#cf967b',
    WhiteBrown6: '#c38262',
    DarkBrown1: '#a06b51',
    DarkBrown2: '#7e5542',
    DarkBrown3: '#5e4032',
    DarkBrown4: '#3f2c23',
    DarkBrown5: '#231a16',
    DarkBrown6: '#000000',
    PinkBrown1: '#d19482',
    PinkBrown2: '#dda89f',
    PinkBrown3: '#e8bdba',
    PinkBrown4: '#f1d2d3',
    PinkBrown5: '#f9e8ea',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default Theme;
