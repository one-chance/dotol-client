/* eslint-disable no-alert */
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { updatePassword } from '@apis/users';
import { Button, FlexView, Text, TextField } from '@components/common';
import { MenuTab } from '@components/layout';
import { USER_MENU_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(500);
  const [oldPassword, setOldPassword] = useState(``);
  const [newPassword, setNewPassword] = useState(``);
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [isPasswordForm, setIsPasswordForm] = useState(false);

  const inputOldPassword = (_input: string) => {
    setIsCorrectPassword(true);
    setOldPassword(_input);
  };

  const inputNewPassword = (_input: string) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    setNewPassword(_input);

    if (pattern.test(_input)) setIsPasswordForm(true);
    else setIsPasswordForm(false);
  };

  const changePassword = () => {
    if (oldPassword.length < 8 || newPassword.length < 8) return;

    updatePassword(oldPassword, newPassword).then(res => {
      if (res.statusCode === 200) {
        alert(`비밀번호가 변경되었습니다.`);
        navigate(`/`);
      } else if (res.statusCode === 400) {
        setIsCorrectPassword(false);
      }
    });
  };

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={isMobile ? 20 : 40}>
        <MenuTab isMobile={isMobile} menus={USER_MENU_TABS} />

        <FlexView
          css={{
            border: isMobile ? `none` : `1px solid lightgray`,
            borderRadius: `4px`,
            padding: isMobile ? `10px` : `40px`,
          }}
          gap={isMobile ? 24 : 40}
        >
          <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
            비밀번호 변경
          </Text>

          <FlexView gap={16}>
            <TextField
              error={!isCorrectPassword}
              errorMessage="! 비밀번호가 일치하지 않습니다."
              label="기존 비밀번호"
              value={oldPassword}
              isMobile
              password
              onChange={inputOldPassword}
            />

            <TextField
              correct={isPasswordForm}
              error={!isPasswordForm}
              errorMessage="! 최소 8자리 이상 (영문, 숫자, 특수문자의 조합)"
              label="새 비밀번호"
              value={newPassword}
              isMobile
              password
              onChange={inputNewPassword}
              onKeyDown={changePassword}
            />
          </FlexView>

          <Button
            aria-label="변경하기"
            color={Colors.red}
            css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
            disabled={oldPassword.length < 8 || newPassword.length < 8}
            radius={4}
            onClick={changePassword}
          >
            <Text color={Colors.white} small={isMobile} semiBold>
              변경하기
            </Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};

export default ChangePasswordPage;
