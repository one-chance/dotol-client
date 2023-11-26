import { createPortal } from 'react-dom';
import { keyframes } from '@emotion/react';

import { FlexView, Text } from '@components/common';
import { Colors } from '@styles/system';
import { ToastType } from '@interfaces/index';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { toastState } from '@states/toast';

type ToastProps = {
  type: ToastType;
  message: string;
  isMobile?: boolean;
};

export default function Toast({ type, message, isMobile }: ToastProps) {
  const [toast, setToast] = useRecoilState(toastState);
  const container = document.getElementById(`root-modal`) as HTMLElement;

  const slideUpAnimation = keyframes`
  0% {
    top: ${isMobile ? `130px` : `170px`};
  }
  100% {
    top: ${isMobile ? `80px` : `120px`};
  }
  `;

  const bgColor = {
    success: Colors.purple,
    error: Colors.red,
    warning: Colors.secondary,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({ ...toast, open: false });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast, setToast]);

  return container
    ? createPortal(
        <FlexView
          content="center"
          css={{
            zIndex: 99999,
            backgroundColor: bgColor[type],
            borderRadius: `4px`,
            position: `fixed`,
            left: `50%`,
            padding: `4px 16px`,
            width: `fit-content`,
            minHeight: `36px`,
            userSelect: `none`,
            transform: `translateX(-50%)`,
            animationName: slideUpAnimation,
            animationDuration: `0.5s`,
            animationFillMode: `forwards`,
            boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.3)`,
            whiteSpace: `nowrap`,
          }}
        >
          <Text color={Colors.white} xSmall={isMobile} semiBold small>
            {message}
          </Text>
        </FlexView>,
        container,
      )
    : null;
}
