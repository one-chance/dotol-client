import { HTMLAttributes, InputHTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';
import { Colors } from '@styles/system';

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
  size?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default ({ size, disabled, onChange, ...props }: CheckboxProps) => {
  const css: CSSObject = {
    backgroundColor: Colors.grey,
    borderRadius: `5px`,
    width: `${size || 20}px`,
    height: `${size || 20}px`,
    margin: 0,
    outline: `none`,
    appearance: `none`,
    '&:checked': {
      backgroundColor: Colors.black,
      //   backgroundImage: `URL("./checked.svg")`,
      backgroundSize: `cover`,
      borderColor: Colors.primary,
    },
  };

  return jsx(`input`, { type: `checkbox`, css, onChange, disabled, ...props });
};
