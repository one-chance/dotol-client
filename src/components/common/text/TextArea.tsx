import { HTMLAttributes, LabelHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

type TextareaProps = (
  | HTMLAttributes<HTMLTextAreaElement>
  | LabelHTMLAttributes<HTMLLabelElement>
) & {
  resizable?: boolean;
};

export default ({ resizable, ...props }: TextareaProps) => {
  const css: CSSObject = {
    padding: `8px`,
    resize: resizable ? `both` : `none`,
  };

  return jsx(`textarea`, { css, ...props });
};
