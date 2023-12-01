import { useNavigate } from 'react-router-dom';

import { Button, FlexView, Text } from '@components/common';
import { Colors } from '@styles/index';

type SignUpProps = {
  isMobile: boolean;
};

export default ({ isMobile }: SignUpProps) => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/`);
  };

  return (
    <FlexView gap={isMobile ? 24 : 40}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
        가입 완료
      </Text>

      <FlexView gap={4}>
        <Text size={isMobile ? `small` : `normal`}>
          내 정보 - 캐릭터 관리를 통해 캐릭터를 등록해주세요.
        </Text>
        <Text size={isMobile ? `small` : `normal`}>
          대표 캐릭터를 등록하면 모든 기능을 사용할 수 있습니다.
        </Text>
      </FlexView>

      <Button
        aria-label="홈"
        color={Colors.purple}
        css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
        radius={4}
        onClick={goLogin}
      >
        <Text
          color={Colors.white}
          size={isMobile ? `small` : `normal`}
          weight="semiBold"
        >
          홈으로
        </Text>
      </Button>
    </FlexView>
  );
};
