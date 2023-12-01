import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import * as Icons from '@assets/icons';

export type IconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  name: string;
  color?: string;
  size?: number;
};

export default function Icon({ name, color, size, ...props }: IconProps) {
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
}
