import { forwardRef, InputHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  noBorder?: boolean;
  center?: boolean;
  width?: number;
  height?: number;
};

export default forwardRef<HTMLInputElement, InputProps>(
  ({ noBorder, center, width, height, ...props }: InputProps, ref) => {
    const inputCSS: CSSObject = {
      background: `none`,
      border: `1px solid lightgray`,
      borderRadius: `4px`,
      outline: `none`,
      fontSize: `16px`,
      minHeight: height || `36px`,
      minWidth: 0,
      padding: `0 8px`,
      //   color: 'currentColor',
      //   fontSize: FontSizes.normal,
      //   '::placeholder': {
      //     color: TextColors.textLight
      //   },
      WebkitTapHighlightColor: `transparent`,
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
      ...(noBorder && { border: `none` }),
      ...(width ? { width: `${width}px` } : { flex: 1 }),
      ...(center && { textAlign: `center` }),
    };

    return jsx(`input`, { ref, css: inputCSS, ...props });
  },
);
