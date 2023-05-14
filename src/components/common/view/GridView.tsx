import { forwardRef, HTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

export type GridViewProps = HTMLAttributes<HTMLDivElement> & {
  rows: string;
  cols: string;
  rowGap: number;
  colGap: number;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  center?: boolean;
  fill?: boolean;
};

const justifyContents = {
  start: `start`,
  end: `end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
  evenly: `space-evenly`,
};

const alignContents = {
  start: `start`,
  end: `end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
  evenly: `space-evenly`,
};

export default forwardRef<HTMLDivElement, GridViewProps>(
  (
    {
      rows,
      cols,
      rowGap,
      colGap,
      justifyContent,
      alignContent,
      center,
      fill,
      ...props
    }: GridViewProps,
    ref,
  ) => {
    const css: CSSObject = {
      display: `grid`,
      gridTemplateColumns: `${cols}`,
      gridTemplateRows: `${rows}`,
      rowGap: `${rowGap}px`,
      columnGap: `${colGap}px`,
      ...(fill && { flex: 1 }),
      ...(justifyContent && {
        justifyContent: justifyContents[justifyContent],
      }),
      ...(alignContent && { alignContent: alignContents[alignContent] }),
      ...(center && { placeContent: `center` }),
    };

    return jsx(`div`, { css, ref, ...props });
  },
);
