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
    brown1: '#f2dfd3',
    brown2: '#e4c0a8',
    brown3: '#d3a27f',
    brown4: '#c08457',
    brown5: '#ac6730',
    brown6: '#964b00',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default Theme;
