import { Button, FlexView, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';

type SignUpProps = {
  isMobile: boolean;
};

export default ({ isMobile }: SignUpProps) => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/user/signin`);
  };

  return (
    <FlexView gap={32} items="center">
      <FlexView gap={4}>
        <Text small={isMobile}>회원가입이 완료되었습니다.</Text>
        <Text small={isMobile}>
          대표 캐릭터를 등록하고 모든 기능을 사용해보세요.
        </Text>
      </FlexView>

      <Button
        aria-label="로그인"
        color={Colors.primary}
        css={{ width: `160px`, height: `40px`, borderRadius: `4px` }}
        onClick={goLogin}
      >
        <Text color={Colors.white} semiBold>
          로그인
        </Text>
      </Button>
    </FlexView>
  );
};
