import { createPortal } from 'react-dom';

import { FlexView, Text } from '@components/common';

type ToastProps = {
  type: 'success' | 'error' | 'warning';
  message: string;
};

export default ({ type, message }: ToastProps) => {
  const container = document.getElementById(`root-modal`) as HTMLElement;

  return container
    ? createPortal(
        <FlexView css={{ position: `absolute`, top: 100 }}>
          <Text>{message}</Text>
        </FlexView>,
        container,
      )
    : null;
};
