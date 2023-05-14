import { HTMLAttributes, LabelHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';
import { fontSizes, fontWeights } from '@styles/system';

export type TextProps = (
  | HTMLAttributes<HTMLSpanElement>
  | LabelHTMLAttributes<HTMLLabelElement>
) & {
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  xxxLarge?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  black?: boolean;
  color?: string;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  fill?: boolean;
  noDrag?: boolean;
  space?: number;
  underline?: boolean;
};

export default ({
  xxSmall,
  xSmall,
  small,
  large,
  xLarge,
  xxLarge,
  xxxLarge,
  light,
  medium,
  semiBold,
  bold,
  black,
  color,
  start,
  center,
  fill,
  noDrag,
  space,
  underline,
  ...props
}: TextProps) => {
  const css: CSSObject = {
    fontFamily: `Noto Sans KR`,
    backgroundColor: `unset`,
    color: color || `black`,
    lineHeight: 1.25,
    letterSpacing: space ? `${space}px` : `1px`,
    ...fontSizes[
      (xxSmall && `xxSmall`) ||
        (xSmall && `xSmall`) ||
        (small && `small`) ||
        (large && `large`) ||
        (xLarge && `xLarge`) ||
        (xxLarge && `xxLarge`) ||
        (xxxLarge && `xxxLarge`) ||
        `normal`
    ],
    ...fontWeights[
      (light && `light`) ||
        (medium && `medium`) ||
        (semiBold && `semiBold`) ||
        (bold && `bold`) ||
        (black && `black`) ||
        `regular`
    ],
    ...(start && { textAlign: `left` }),
    ...(center && { textAlign: `center` }),
    ...(fill && { flex: 1 }),
    ...(noDrag && { userSelect: `none` }),
    ...(underline && {
      textDecoration: `underline`,
      textUnderlinePosition: `under`,
    }),
  };

  return jsx(`span`, { css, ...props });
};
