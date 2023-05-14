import { forwardRef, InputHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const css: CSSObject = {
  border: `none`,
  outline: `none`,
  background: `none`,
  lineHeight: `30px`,
  padding: `0 8px`,
  //   color: 'currentColor',
  //   fontSize: FontSizes.normal,
  //   '::placeholder': {
  //     color: TextColors.textLight
  //   },
  WebkitTapHighlightColor: `transparent`,
  minWidth: 0,
  '&:-webkit-autofill': {
    // WebkitTextFillColor: TextColors.text,
    transition: `background-color 5000s ease-in-out 0s`,
  },
  '&::-webkit-search-decoration': {
    // Remove the padding when type=search.
    appearance: `none`,
  },
  ':focus': {
    outline: `none`,
  },
};

export default forwardRef<HTMLInputElement, InputProps>((props, ref) =>
  jsx(`input`, { ref, css, ...props }),
);
