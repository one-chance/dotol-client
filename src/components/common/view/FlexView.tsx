import { forwardRef, HTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

export type FlexViewProps = HTMLAttributes<HTMLDivElement> & {
  fit?: boolean;
  fill?: boolean;
  row?: boolean;
  center?: boolean;
  wrap?: boolean;
  fixed?: boolean;
  gap?: number;
  content?: 'start' | 'end' | 'center' | 'between' | 'around';
  items?: 'start' | 'end' | 'center';
  color?: string;
};

const justifyContents = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
};

const alignItems = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
};

const fixedCSS: CSSObject = {
  position: `fixed`,
  top: `3rem`,
  left: 0,
  right: 0,
  bottom: `3rem`,
};

export default forwardRef<HTMLDivElement, FlexViewProps>(
  (
    {
      fit,
      fill,
      row,
      content,
      items,
      center,
      fixed,
      wrap,
      gap,
      color,
      ...props
    }: FlexViewProps,
    ref,
  ) => {
    const css: CSSObject = {
      display: `flex`,
      ...(fit && { width: `fit-content` }),
      ...(fill && { flex: 1 }),
      ...((row && { flexDirection: `row` }) || { flexDirection: `column` }),
      ...(center && { justifyContent: `center`, alignItems: `center` }),
      ...(content && { justifyContent: justifyContents[content] }),
      ...(items && { alignItems: alignItems[items] }),
      ...(fixed && fixedCSS),
      ...(wrap && { flexWrap: `wrap` }),
      ...(gap && { gap: `${gap}px` }),
      ...(color && { backgroundColor: color }),
    };

    return jsx(`div`, { css, ref, ...props });
  },
);
