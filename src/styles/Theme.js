import { css } from 'styled-components';

export const Theme = {
  fonts: {
    mainTitle: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 54px;
    `,
    heading: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 28px;
    `,
    default: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 20px;
    `,
    helperText: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
    `,
    BigButton: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 600;
      font-size: 30px;
    `,
    SmallButton: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 800;
      font-size: 20px;
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
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};
