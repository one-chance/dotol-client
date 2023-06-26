import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);

  const [oldPassword, setOldPassword] = useState(``);
  const [newPassword, setNewPassword] = useState(``);

  const inputOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changePassword = () => {
    // 비밀번호 일치 확인
    // 비밀번호 변경
  };

  return (
    <FlexView
      css={{
        maxWidth: `600px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `auto`,
      }}
    >
      <FlexView
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: isMobile ? `20px 10px` : `40px 20px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          비밀번호 변경
        </Text>

        <FlexView gap={32}>
          <FlexView gap={16}>
            <FlexView items="center" row>
              <Text css={{ minWidth: `120px` }} small={isMobile} semiBold>
                기존 비밀번호
              </Text>
              <Input
                height={40}
                type="password"
                value={oldPassword || ``}
                onChange={inputOldPassword}
              />
            </FlexView>

            <FlexView items="center" row>
              <Text css={{ minWidth: `120px` }} small={isMobile} semiBold>
                새 비밀번호
              </Text>
              <Input
                height={40}
                type="password"
                value={newPassword || ``}
                onChange={inputNewPassword}
              />
            </FlexView>
          </FlexView>

          <FlexView content="end" row>
            <Button
              color={Colors.red}
              css={{ width: `160px`, height: `40px` }}
              disabled={oldPassword.length < 8 || newPassword.length < 8}
              radius={4}
              onClick={changePassword}
            >
              <Text color={Colors.white} small={isMobile} medium>
                변경하기
              </Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
