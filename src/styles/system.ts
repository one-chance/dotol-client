import { CSSObject } from '@emotion/react';

export const fontSizes: { [key: string]: CSSObject } = {
  xxSmall: { fontSize: `0.625rem` }, // 10px
  xSmall: { fontSize: `0.75rem` }, // 12px
  small: { fontSize: `0.875rem` }, // 14px
  normal: { fontSize: `1rem` }, // 16px
  large: { fontSize: `1.25rem` }, // 20px
  xLarge: { fontSize: `1.5rem` }, // 24px
  xxLarge: { fontSize: `1.75rem` }, // 28px
  xxxLarge: { fontSize: `2rem` }, // 32px
};

export const FontSizes = {
  xxSmall: `0.625rem`, // 10px
  xSmall: `0.75rem`, // 12px
  small: `0.875rem`, // 14px
  normal: `1rem`, // 16px
  large: `1.25rem`, // 20px
  xLarge: `1.5rem`, // 24px
  xxLarge: `1.75rem`, // 28px
  xxxLarge: `2rem`, // 32pt
};

export const fontWeights: { [key: string]: CSSObject } = {
  thin: { fontWeight: 100 },
  extraLight: { fontWeight: 200 },
  light: { fontWeight: 300 },
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semiBold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
  extraBold: { fontWeight: 800 },
  black: { fontWeight: 900 },
};

export const FontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const BreakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const Colors = {
  primary: `#1DCEC9`,
  secondary: `#F4F4F4`,
  point: `#FE9000`,
  black: `#141414`,
  white: `#FFFFFF`,
  green: `#79cb20`,
  red: `#FB4E4E`,
  gray: `#BEBFC0`,
};
