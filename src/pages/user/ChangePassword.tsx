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
          maxWidth: `360px`,
          width: `100%`,
          minWidth: `360px`,
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `20px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          비밀번호 변경
        </Text>

        <FlexView css={{}} gap={16}>
          <FlexView items="center" row>
            <Text css={{ minWidth: `120px` }} small={isMobile} semiBold>
              기존 비밀번호
            </Text>
            <Input
              css={{
                flex: 1,
                height: `40px`,
                border: `1px solid lightgray`,
                borderRadius: `4px`,
              }}
              type="password"
              onChange={inputPassword}
            />
          </FlexView>

          <FlexView items="center" row>
            <Text css={{ minWidth: `120px` }} small={isMobile} semiBold>
              새 비밀번호
            </Text>
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
          </FlexView>

          <Button
            color={Colors.red}
            css={{ height: `40px`, borderRadius: `4px` }}
            disabled={password.length < 8}
          >
            <Text color={Colors.white} small={isMobile}>
              변경하기
            </Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
