import { CSSObject, jsx } from '@emotion/react';
import { Colors } from '@styles/system';

interface CheckboxProps {
  size?: number;
}

export default ({ size, ...props }: CheckboxProps) => {
  const css: CSSObject = {
    backgroundColor: Colors.gray,
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

  return jsx(`input`, { type: `checkbox`, css, ...props });
};
