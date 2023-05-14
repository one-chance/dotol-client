import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { jsx } from '@emotion/react';

export type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default ({ ...props }: ImageProps) => jsx(`img`, { ...props });
