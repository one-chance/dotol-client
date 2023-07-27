import { useState } from 'react';

import { updatePassword } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { Toast } from '@components/toast';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);
  const [oldPassword, setOldPassword] = useState(``);
  const [newPassword, setNewPassword] = useState(``);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);

  const openToast = (message: string) => {
    setToastMessge(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const inputOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changePassword = () => {
    updatePassword(oldPassword, newPassword).then(res => {
      if (res.statusCode === 200) {
        alert(`비밀번호가 변경되었습니다.`);
        // 바뀐 비밀번호로 로그인 시켜야 함
      } else if (res.statusCode === 400) {
        openToast(`기존 비밀번호가 일치하지 않습니다.`);
      }
    });
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
                aria-label="기존 비밀번호"
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
                aria-label="새 비밀번호"
                height={40}
                type="password"
                value={newPassword || ``}
                onChange={inputNewPassword}
              />
            </FlexView>
          </FlexView>

          <FlexView content="end" row>
            <Button
              aria-label="변경하기"
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

      {showToast && <Toast message={toastMessage} type="error" />}
    </FlexView>
  );
};
