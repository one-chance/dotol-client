/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { resetPassword } from '@apis/users';
import { Button, FlexView, Text, TextField } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
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
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }}>
      <FlexView
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: isMobile ? `20px 10px` : `40px 20px`,
        }}
        gap={isMobile ? 24 : 40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
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
          css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
          disabled={!isPasswordForm}
          radius={4}
          onClick={changePassword}
        >
          <Text color={Colors.white} small={isMobile} semiBold>
            변경하기
          </Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
