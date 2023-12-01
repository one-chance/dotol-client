import { ButtonHTMLAttributes, forwardRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
  fit?: boolean;
  color?: string;
  border?: string;
  radius?: number;
  flex?: boolean;
  circle?: boolean;
};

export default forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type, fit, color, border, radius, flex, circle, ...props }: ButtonProps,
    ref,
  ) => {
    const css: CSSObject = {
      alignItems: `center`,
      backgroundColor: `unset`,
      border: border ? `1px solid ${border}` : `none`,
      borderRadius: radius || 0,
      color: `unset`,
      display: `inline-flex`,
      justifyContent: `center`,
      outline: `none`,
      padding: 0,
      transition: `filter 0.3s, background 0.3s`,
      userSelect: `none`,
      ':not(:disabled)': {
        cursor: `pointer`,
      },
      ':hover': {
        filter: `brightness(85%)`,
      },
      ':active': {
        filter: `brightness(100%)`,
      },
      ':disabled': {
        filter: `opacity(50%)`,
        pointerEvents: `none`,
      },
      ...(fit && { width: `fit-content` }),
      ...(color && { backgroundColor: color }),
      ...(flex && { flex: 1 }),
      ...(circle && { borderRadius: `50%` }),
    };

    return jsx(`button`, { type: type || `button`, ref, css, ...props });
  },
);
