import { ComponentProps, HTMLAttributes, LabelHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

type TextareaProps = ComponentProps<'textarea'> & {
  resizable?: boolean;
};

export default function TextArea({ resizable, ...props }: TextareaProps) {
  const css: CSSObject = {
    padding: `8px`,
    resize: resizable ? `both` : `none`,
  };

  return jsx(`textarea`, { css, ...props });
}
