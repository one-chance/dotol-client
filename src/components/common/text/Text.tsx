import { HTMLAttributes, LabelHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { FontSizes, FontWeights } from '@styles/index';

type Size =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'normal'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

type Weight =
  | `thin`
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'black';

export type TextProps = (
  | HTMLAttributes<HTMLSpanElement>
  | LabelHTMLAttributes<HTMLLabelElement>
) & {
  size?: Size;
  weight?: Weight;
  color?: string;
  start?: boolean;
  center?: boolean;
  fill?: boolean;
  noDrag?: boolean;
  space?: number;
  underline?: boolean;
};

export default ({
  size,
  weight,
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
    backgroundColor: `unset`,
    color: color || `black`,
    lineHeight: 1.25,
    letterSpacing: space ? `${space}px` : `1px`,
    fontSize: FontSizes[size || `normal`],
    fontWeight: FontWeights[weight || `regular`],
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
