import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CSSObject } from '@emotion/react';

import { Button, FlexView, Icon } from '@components/common';
import { Colors } from '@styles/index';

interface ModalProps {
  children: ReactNode;
  closePortal: (param: any) => void;
  color?: string;
}

export default function ModalM({ children, closePortal, color }: ModalProps) {
  const container = document.getElementById(`root-modal`);

  const contentCSS: CSSObject = {
    padding: `20px`,
    backgroundColor: color || Colors.white,
    zIndex: 1000,
  };

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return container
    ? createPortal(
        <FlexView color={Colors.white} css={contentCSS} fixed>
          <FlexView content="end" row>
            <Button aria-label="닫기" onClick={closePortal}>
              <Icon color={Colors.black} name="close" size={24} />
            </Button>
          </FlexView>
          {children}
        </FlexView>,
        container,
      )
    : null;
}
