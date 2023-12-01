import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CSSObject } from '@emotion/react';

import { FlexView } from '@components/common';

interface ModalProps {
  children: ReactNode;
  closePortal: (param: any) => void;
}

export default function Modal({ children, closePortal }: ModalProps) {
  const container = document.getElementById(`root-modal`) as HTMLElement;

  const modalCSS: CSSObject = {
    zIndex: 1000,
    overflowY: `auto`,
    scrollbarWidth: `none`,
    '::-webkit-scrollbar': { display: `none` },
  };

  const backgoundCSS: CSSObject = {
    zIndex: 999,
    backgroundColor: `#0000004D`,
  };

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return container
    ? createPortal(
        <FlexView css={modalCSS} items="center" center fixed>
          <FlexView
            css={backgoundCSS}
            role="presentation"
            fixed
            onClick={closePortal}
          />
          {children}
        </FlexView>,
        container,
      )
    : null;
}
