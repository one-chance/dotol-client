import { FlexView } from '@components/common';
import { Privacy, Service } from '@components/terms';
import { useResponsive } from '@utils/hooks';

import Modal from './Modal';
import ModalM from './ModalM';

type ModalProps = {
  type: 'terms' | 'privacy';
  close: () => void;
};

type Policy = 'terms' | 'privacy';

const desktopModal = (type: Policy, close: () => void, isMobile: boolean) => (
  <Modal closePortal={close} height={720} width={1080} close>
    <FlexView css={{ padding: `20px`, overflowY: `auto` }}>
      {type === `terms` ? (
        <Service isMobile={isMobile} />
      ) : (
        <Privacy isMobile={isMobile} />
      )}
    </FlexView>
  </Modal>
);

const mobileModal = (type: Policy, close: () => void, isMobile: boolean) => (
  <ModalM closePortal={close} close>
    <FlexView css={{ padding: `10px`, overflowY: `auto` }}>
      {type === `terms` ? (
        <Service isMobile={isMobile} />
      ) : (
        <Privacy isMobile={isMobile} />
      )}
    </FlexView>
  </ModalM>
);

export default ({ type, close }: ModalProps) => {
  const isMobile = useResponsive(600);

  return isMobile
    ? mobileModal(type, close, isMobile)
    : desktopModal(type, close, isMobile);
};
