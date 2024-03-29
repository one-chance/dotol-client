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
  border?: string;
  radius?: number;
  content?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  items?: 'start' | 'end' | 'center' | `stretch`;
  color?: string;
};

const justifyContents = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
  evenly: `space-evenly`,
};

const alignItems = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  stretch: `stretch`,
};

const fixedCSS: CSSObject = {
  position: `fixed`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const FlexView = forwardRef<HTMLDivElement, FlexViewProps>(
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
      border,
      radius,
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
      ...(border && { border: `1px solid ${border}` }),
      ...(radius && { borderRadius: `${radius}px` }),
    };

    return jsx(`div`, { css, ref, ...props });
  },
);

export default FlexView;
