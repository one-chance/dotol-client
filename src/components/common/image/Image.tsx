import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { jsx } from '@emotion/react';

export type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function Image({ ...props }: ImageProps) {
  return jsx(`img`, { ...props });
}
