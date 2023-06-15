import { ReactNode, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { Button, FlexView, Icon } from '@components/common';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';

interface ModalProps {
  children: ReactNode;
  closePortal: (param: any) => void;
  color?: string;
  close?: boolean;
}

export default ({ children, closePortal, color, close }: ModalProps) => {
  const container = document.getElementById(`root-modal`);

  const contentCSS: CSSObject = {
    padding: `16px 10px`,
    backgroundColor: color || Colors.white,
    position: `fixed`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1111,
  };

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return container
    ? createPortal(
        <FlexView css={contentCSS}>
          {close && (
            <FlexView content="end" row>
              <Button aria-label="close" onClick={closePortal}>
                <Icon color={Colors.black} name="close" size={24} />
              </Button>
            </FlexView>
          )}
          {children}
        </FlexView>,
        container,
      )
    : null;
};
