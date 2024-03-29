import { useState } from 'react';

import { forgotPassword } from '@apis/index';
import { Button, FlexView, Text, TextField } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

export default function ForgotPasswordPage() {
  const isMobile = useResponsive(500);

  const [userId, setUserId] = useState(``);
  const [email, setEmail] = useState(``);

  const [isEmailForm, setIsEmailForm] = useState(false);
  const [nonExistError, setNonExistError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(``);
  const [isSent, setIsSent] = useState(false);

  const inputEmail = (_input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailErrorMessage(`! 올바른 이메일 형식이 아닙니다.`);
    setEmail(_input);

    if (emailRegex.test(_input)) setIsEmailForm(true);
    else setIsEmailForm(false);
  };

  const inputUserId = (_input: string) => {
    setNonExistError(false);
    setUserId(_input);
  };

  const findPassword = () => {
    forgotPassword(userId, email).then(res => {
      if (res.statusCode === 404) {
        setNonExistError(true);
      } else if (res.statusCode === 400) {
        setEmailErrorMessage(`! 이메일이 일치하지 않습니다.`);
      }
      if (res.statusCode === 200) setIsSent(true);
    });
  };

  return (
    <FlexView css={{ margin: `0 auto` }}>
      <FlexView
        border="lightgray"
        css={{
          width: isMobile ? `350px` : `440px`,
          padding: isMobile ? `20px` : `40px`,
        }}
        gap={isMobile ? 24 : 40}
        radius={4}
      >
        <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
          비밀번호 찾기
        </Text>

        <FlexView gap={16}>
          <TextField
            autoComplete="username"
            error={nonExistError}
            errorMessage="! 등록되지 않은 계정입니다."
            label="아이디"
            value={userId}
            onChange={inputUserId}
          />

          <TextField
            autoComplete="email"
            error={!isEmailForm}
            errorMessage={emailErrorMessage}
            label="이메일"
            value={email}
            onChange={inputEmail}
          />
        </FlexView>

        <Button
          aria-label="확인"
          color={Colors.purple}
          css={{ height: `40px` }}
          disabled={!isEmailForm || userId.length < 6}
          radius={4}
          onClick={findPassword}
        >
          <Text
            color={Colors.white}
            size={isMobile ? `small` : `normal`}
            weight="semiBold"
          >
            확인
          </Text>
        </Button>

        {isSent && (
          <Text size={isMobile ? `small` : `normal`} weight="semiBold" center>
            비밀번호 초기화 메일이 전송되었습니다.
          </Text>
        )}
      </FlexView>
    </FlexView>
  );
}
