import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

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

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  size?: Size;
  weight?: Weight;
  color?: string;
  radius?: number;
  underline?: boolean;
};

export default function Anchor({
  size,
  weight,
  color,
  radius,
  underline,
  ...props
}: AnchorProps) {
  const css: CSSObject = {
    color: color || `black`,
    borderRadius: radius ? `${radius}px` : 0,
    fontSize: FontSizes[size || `normal`],
    fontWeight: FontWeights[weight || `regular`],
    ...(underline && { textDecoration: `underline` }),
  };

  return jsx(`a`, { css, ...props });
}
