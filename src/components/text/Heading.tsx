import { HTMLAttributes } from 'react';

import { jsx } from '@emotion/react';
import { fontSizes, fontWeights } from '@styles/system';

type HeadingPRops = HTMLAttributes<HTMLHeadingElement> & {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  black?: boolean;
  color?: string;
  start?: boolean;
  center?: boolean;
  fill?: boolean;
  noDrag?: boolean;
};

export default ({
  component,
  text,
  xxSmall,
  xSmall,
  small,
  large,
  xLarge,
  xxLarge,
  light,
  medium,
  semiBold,
  bold,
  black,
  color,
  center,
  noDrag,
  ...props
}: HeadingPRops) => {
  const css = {
    lineHeight: `150%`,
    ...fontSizes[
      (xxSmall && `xxSmall`) ||
        (xSmall && `xSmall`) ||
        (small && `small`) ||
        (large && `large`) ||
        (xLarge && `xLarge`) ||
        (xxLarge && `xxLarge`) ||
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
    margin: 0,
    whiteSpace: `pre-wrap`,
    color: color || `black`,
    textAlign: center ? `center` : `left`,
    userSelect: noDrag ? `none` : `auto`,
  };

  return jsx(component, { css, children: text, ...props });
};
