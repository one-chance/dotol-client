import { ReactNode, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { FlexView, Icon, Button } from '@components/common';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';

interface ModalProps {
  width: number;
  height: number;
  close?: boolean;
  children: ReactNode;
  closePortal: (param: any) => void;
}

export default ({
  width,
  height,
  close,
  children,
  closePortal,
}: ModalProps) => {
  const container = document.getElementById(`root-modal`) as HTMLElement;

  const modalCSS: CSSObject = {
    position: `fixed`,
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
    zIndex: 1000,
    padding: `80px`,
    margin: `auto 0`,
    overflowY: `auto`,
    scrollbarWidth: `none`,
    '::-webkit-scrollbar': { display: `none` },
  };

  const backgoundCSS: CSSObject = {
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: `#0000004D`,
  };

  const contentCSS: CSSObject = {
    maxWidth: `calc(100% - 80px)`,
    width: `${width}px`,
    height: `${height}px`,
    padding: `40px`,
    backgroundColor: `#141414`,
    // border: `1px solid ${Colors.secondary10}`,
    zIndex: 1001,
    overflowY: `auto`,
    scrollbarWidth: `none`,
    '::-webkit-scrollbar': { display: `none` },
  };

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return container
    ? createPortal(
        <FlexView css={modalCSS} center>
          <FlexView
            css={backgoundCSS}
            role="presentation"
            onClick={closePortal}
          />

          <FlexView css={contentCSS}>
            {close && (
              <FlexView items="end">
                <Button aria-label="close" onClick={closePortal}>
                  <Icon color={Colors.secondary} name="close" size={32} />
                </Button>
              </FlexView>
            )}
            {children}
          </FlexView>
        </FlexView>,
        container,
      )
    : null;
};
