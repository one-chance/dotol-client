import { DetailedHTMLProps, HTMLAttributes } from 'react';

import * as Icons from '@assets/images/Icons';
import { CSSObject } from '@emotion/react';

export type IconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  name: string;
  color?: string;
  size?: number;
};

export default ({ name, color, size, ...props }: IconProps) => {
  const RenderIcon = () =>
    Icons[name as keyof typeof Icons](color || `#515355`);

  const css: CSSObject = {
    display: `inline-flex`,
    overflow: `hidden`,
    width: `fit-content`,
    height: size || 24,
    fill: color,
  };

  return (
    <span css={css} {...props}>
      <RenderIcon />
    </span>
  );
};
