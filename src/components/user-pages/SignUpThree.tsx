import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { createUser, isDuplicatedUserId } from '@apis/index';
import { Button, FlexView, Text, TextField } from '@components/common';
import { emailState } from '@states/index';
import { Colors } from '@styles/index';

type Phase = 1 | 2 | 3 | 4;

type SignUpProps = {
  isMobile: boolean;
  setPhase: (_phase: Partial<Phase>) => void;
};

export default function SignUpThree({ isMobile, setPhase }: SignUpProps) {
  const email = useRecoilValue(emailState);
  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState(``);

  const [isUniqueId, setIsUniqueId] = useState(false);
  const [isUserIdForm, setIsUserIdForm] = useState(false);
  const [isPasswordForm, setIsPasswordForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    `! 최소 6자리 이상 (영문, 숫자만)`,
  );

  const inputUserId = (_input: string) => {
    const pattern = /^[A-Za-z\d]{6,}$/;

    setUserId(_input);
    setErrorMessage(`! 최소 6자리 이상 (영문, 숫자만)`);

    if (pattern.test(_input)) setIsUserIdForm(true);
    else setIsUserIdForm(false);
  };

  const inputPassword = (_input: string) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    setPassword(_input);

    if (pattern.test(_input)) setIsPasswordForm(true);
    else setIsPasswordForm(false);
  };

  const checkUniqueId = () => {
    isDuplicatedUserId(userId).then(res => {
      if (res.statusCode === 400) {
        setErrorMessage(`이미 사용 중인 아이디입니다.`);
      } else if (res.statusCode === 200) setIsUniqueId(true);
    });
  };

  const nextPhase = () => {
    createUser({ email, userId, password }).then(res => {
      if (res.statusCode === 200) {
        setPhase(4);
      }
    });
  };

  useEffect(() => {
    if (!isUserIdForm) return;

    checkUniqueId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <FlexView gap={isMobile ? 24 : 40}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
        계정 정보 입력
      </Text>

      <FlexView gap={20}>
        <TextField
          autoComplete="off"
          correct={isUniqueId && isUserIdForm}
          error={!isUserIdForm || !isUniqueId}
          errorMessage={errorMessage}
          isMobile={isMobile}
          label="아이디"
          value={userId}
          onChange={inputUserId}
        />

        <TextField
          autoComplete="new-password"
          correct={isPasswordForm}
          error={!isPasswordForm}
          errorMessage="! 최소 8자리 이상 (영문, 숫자, 특수문자의 조합)"
          isMobile={isMobile}
          label="비밀번호"
          value={password}
          password
          onChange={inputPassword}
        />
      </FlexView>

      <Button
        aria-label="다음"
        color={Colors.purple}
        css={{ height: `40px` }}
        disabled={!isUniqueId || !isUserIdForm || !isPasswordForm}
        radius={4}
        onClick={nextPhase}
      >
        <Text
          color={Colors.white}
          size={isMobile ? `small` : `normal`}
          weight="semiBold"
        >
          가입하기
        </Text>
      </Button>
    </FlexView>
  );
}
