import { Button, FlexView, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';

type ModalProps = {
  close: () => void;
};

export default ({ close }: ModalProps) => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate(`/user/signin`);
  };

  return (
    <Modal closePortal={close} height={200} width={340}>
      <FlexView content="between" css={{ padding: `20px` }} fill>
        <FlexView center fill>
          <Text bold large>
            로그인이 필요한 기능입니다.
          </Text>
        </FlexView>

        <FlexView content="end" gap={8} row>
          <Button
            aria-label="취소"
            border={Colors.red}
            css={{
              width: `80px`,
              height: `36px`,
            }}
            radius={4}
            onClick={close}
          >
            <Text color="red">취소</Text>
          </Button>

          <Button
            aria-label="로그인"
            border={Colors.primary}
            css={{
              width: `80px`,
              height: `36px`,
            }}
            radius={4}
            onClick={moveToLogin}
          >
            <Text color="blue">로그인</Text>
          </Button>
        </FlexView>
      </FlexView>
    </Modal>
  );
};
