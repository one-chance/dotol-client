import { createPortal } from 'react-dom';

import { FlexView, Text } from '@components/common';
import { keyframes } from '@emotion/react';
import { Colors } from '@styles/system';

type ToastProps = {
  type: 'success' | 'error' | 'warning';
  message: string;
  isMobile?: boolean;
};

export default ({ type, message, isMobile }: ToastProps) => {
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

  return container
    ? createPortal(
        <FlexView
          content="center"
          css={{
            zIndex: 99999,
            backgroundColor: bgColor[type],
            borderRadius: `4px`,
            position: `absolute`,
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
};
