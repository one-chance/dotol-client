import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  color?: string;
  underline?: boolean;
};

export default ({ color, underline, ...props }: AnchorProps) => {
  const css: CSSObject = {
    ...(color && { color: `${color}` }),
    ...(underline && { textDecoration: `underline` }),
  };

  return jsx(`a`, { css, ...props });
};
