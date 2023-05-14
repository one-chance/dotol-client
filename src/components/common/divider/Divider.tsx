import { HTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  size?: number;
  margin: number;
  color?: string;
  round?: boolean;
};

export default ({ size, margin, color, round, ...props }: DividerProps) => {
  const css: CSSObject = {
    border: `none`,
    borderRadius: round ? `10px` : undefined,
    backgroundColor: color || `#000000`,
    margin: `${margin}px 0`,
    width: `100%`,
    height: size || `1px`,
  };

  return jsx(`hr`, { css, ...props });
};
