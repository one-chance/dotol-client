import { useState, useEffect } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useWindowSize } from '@utils/hooks';

export default () => {
  const { width } = useWindowSize();
  const [password, setPassword] = useState(``);
  const [isMobile, setIsMobile] = useState(width < 400);

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (width < 400) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  return (
    <FlexView css={{ margin: isMobile ? `0` : `auto` }}>
      <FlexView
        css={{
          maxWidth: `600px`,
          width: `100%`,
          minWidth: `360px`,
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `20px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          회원탈퇴
        </Text>

        <FlexView gap={8}>
          <Text color={Colors.red}>
            회원탈퇴시 작성했던 게시물, 댓글은 자동으로 삭제되지 않습니다.
          </Text>
          <Text color={Colors.red}>
            회원탈퇴시 개인정보가 삭제되어 추후 계정을 복구할 수 없습니다.
          </Text>
        </FlexView>

        <FlexView gap={8}>
          <Text small={isMobile} semiBold>
            비밀번호 확인
          </Text>
          <FlexView gap={8} items="center" row>
            <Input
              css={{
                width: `100%`,
                height: `40px`,
                border: `1px solid lightgray`,
                borderRadius: `4px`,
              }}
              type="password"
              onChange={inputPassword}
            />
            <Button
              color={Colors.red}
              css={{ width: `60px`, height: `40px`, borderRadius: `4px` }}
              disabled={password.length < 8}
            >
              <Text color={Colors.white}>탈퇴</Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
