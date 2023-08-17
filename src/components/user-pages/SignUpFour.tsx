import { Button, FlexView, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';

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
      <Text bold center xxLarge>
        가입 완료
      </Text>

      <FlexView gap={4}>
        <Text small={isMobile}>
          내 정보 - 캐릭터 관리를 통해 캐릭터를 등록해주세요.
        </Text>
        <Text small={isMobile}>
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
        <Text color={Colors.white} small={isMobile} semiBold>
          홈으로
        </Text>
      </Button>
    </FlexView>
  );
};
