/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { resetPassword } from '@apis/index';
import { Button, FlexView, Text, TextField } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

export default function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useResponsive(500);

  const [token, setToken] = useState(``);
  const [newPassword, setNewPassword] = useState(``);
  const [isPasswordForm, setIsPasswordForm] = useState(false);

  const inputNewPassword = (_input: string) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    setNewPassword(_input);

    if (pattern.test(_input)) setIsPasswordForm(true);
    else setIsPasswordForm(false);
  };

  const changePassword = () => {
    resetPassword(token, newPassword).then(res => {
      if (res.statusCode === 200) {
        alert(`비밀번호가 변경되었습니다.`);
        navigate(`/`);
      }
    });
  };

  useEffect(() => {
    setToken(location.pathname.split(`reset-password/`)[1] ?? ``);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexView css={{ margin: `0 auto` }}>
      <FlexView
        border="lihgtgray"
        css={{
          width: isMobile ? `350px` : `440px`,
          padding: isMobile ? `20px` : `40px`,
        }}
        gap={isMobile ? 24 : 40}
        radius={4}
      >
        <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
          비밀번호 변경
        </Text>

        <TextField
          autoComplete="new-password"
          correct={isPasswordForm}
          error={!isPasswordForm}
          errorMessage="! 최소 8자리 이상 (영문, 숫자, 특수문자의 조합)"
          isMobile={isMobile}
          label="새 비밀번호"
          value={newPassword}
          password
          onChange={inputNewPassword}
        />

        <Button
          aria-label="변경하기"
          color={Colors.red}
          css={{ height: `40px` }}
          disabled={!isPasswordForm}
          radius={4}
          onClick={changePassword}
        >
          <Text
            color={Colors.white}
            size={isMobile ? `small` : `normal`}
            weight="semiBold"
          >
            변경하기
          </Text>
        </Button>
      </FlexView>
    </FlexView>
  );
}
