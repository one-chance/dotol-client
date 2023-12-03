import { SVGProps } from 'react';

import { CSSObject } from '@emotion/react';

export type SvgProps = SVGProps<SVGSVGElement>;

const DEFAULT_VIEW_BOX_SIZE = 24;

const css: CSSObject = {
  width: `auto`,
  height: `100%`,
};

export default function Svg({ width, height, ...props }: SvgProps) {
  return (
    <svg
      css={css}
      focusable="false"
      pointerEvents="none"
      viewBox={`0 0 ${width || DEFAULT_VIEW_BOX_SIZE} ${
        height || DEFAULT_VIEW_BOX_SIZE
      }`}
      {...props}
    />
  );
}
