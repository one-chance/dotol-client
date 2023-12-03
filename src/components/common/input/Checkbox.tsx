import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors } from '@styles/index';

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
  size?: number;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};

export default forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { size, checked, disabled, onChange, children, ...props }: CheckboxProps,
    ref,
  ) => {
    const css: CSSObject = {
      borderColor: `red`,
      accentColor: Colors.purple,
      border: `1px solid  ${Colors.primary20}`,
      borderRadius: `4px`,
      width: `${size || 16}px`,
      height: `${size || 16}px`,
      margin: 0,
      outline: `none`,
      appearance: `none`,
      '&:checked': {
        appearance: `checkbox`,
      },
    };

    return jsx(`input`, {
      type: `checkbox`,
      ref,
      css,
      checked,
      onChange,
      disabled,
      children,
      ...props,
    });
  },
);
