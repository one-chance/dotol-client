import { useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { verifyUser } from '@apis/users';
import { Button, FlexView, Link, Text, TextField } from '@components/common';
import { ModalM } from '@components/modal';
import { isLoggedInState, userIdState } from '@states/loginState';
import { Colors } from '@styles/token';
import { decodeJWT } from '@utils/index';

type ModalProps = {
  close: () => void;
};

export default function LoginMobileModal({ close }: ModalProps) {
  const setUserIdState = useSetRecoilState(userIdState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);

  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState(``);

  const [nonExistError, setNonExistError] = useState(false);
  const [wrongPasswordError, setWrongPasswordError] = useState(false);

  const inputUserId = (_input: string) => {
    setNonExistError(false);
    setUserId(_input);
  };

  const inputPassword = (_input: string) => {
    setWrongPasswordError(false);
    setPassword(_input);
  };

  const login = () => {
    if (userId.length < 6 || password.length < 8) return;

    verifyUser(userId, password).then(res => {
      if (res.statusCode === 404) {
        setNonExistError(true);
      } else if (res.statusCode === 400) {
        setWrongPasswordError(true);
      } else if (res.statusCode === 200) {
        sessionStorage.setItem(`accessToken`, res.data);
        setIsLoggedInState(true);
        setUserIdState(decodeJWT(res.data).userId);
        close();
      }
    });
  };

  return (
    <ModalM closePortal={close}>
      <FlexView
        css={{
          maxWidth: `480px`,
          width: `100%`,
          margin: `0 auto`,
          padding: `0 20px`,
        }}
      >
        <Text
          css={{
            fontFamily: `Red Hat Display`,
            lineHeight: 1,
            letterSpacing: `-0.96px`,
          }}
          size="xxxLarge"
          weight="bold"
          center
        >
          dotol
        </Text>

        <FlexView css={{ margin: `40px 0` }} gap={24}>
          <FlexView gap={16}>
            <TextField
              autoComplete="username"
              error={nonExistError}
              errorMessage="! 존재 하지 않는 아이디입니다."
              label="아이디"
              value={userId}
              isMobile
              onChange={inputUserId}
            />

            <TextField
              autoComplete="current-password"
              error={wrongPasswordError}
              errorMessage="! 비밀번호가 일치하지 않습니다."
              label="비밀번호"
              value={password}
              isMobile
              password
              onChange={inputPassword}
              onKeyDown={login}
            />
          </FlexView>

          <FlexView content="between" items="center" row>
            <Link
              aria-label="회원가입"
              css={{
                color: Colors.primary,
                fontSize: `14px`,
                fontWeight: 600,
                lineHeight: 1,
                textDecoration: `underline`,
                textUnderlineOffset: `2px`,
              }}
              to="/user/signup"
              onClick={close}
            >
              회원가입
            </Link>

            <FlexView gap={4} items="center" row>
              <Link
                aria-label="아이디 찾기"
                css={{
                  color: Colors.primary60,
                  letterSpacing: `-0.96px`,
                  fontSize: `14px`,
                  lineHeight: 1,
                }}
                to="/user/forgot-userId"
                onClick={close}
              >
                아이디
              </Link>
              <Text
                color={Colors.primary60}
                css={{ fontSize: `14px`, lineHeight: 1 }}
              >
                /
              </Text>
              <Link
                aria-label="비밀번호 찾기"
                css={{
                  color: Colors.primary60,
                  letterSpacing: `-0.96px`,
                  fontSize: `14px`,
                  lineHeight: 1,
                }}
                to="/user/forgot-password"
                onClick={close}
              >
                비밀번호 찾기
              </Link>
            </FlexView>
          </FlexView>
        </FlexView>

        <Button
          aria-label="로그인"
          color={Colors.purple}
          css={{ height: `44px` }}
          disabled={userId.length < 6 || password.length < 8}
          radius={4}
          onClick={login}
        >
          <Text color={Colors.white} size="small" weight="semiBold">
            로그인
          </Text>
        </Button>
      </FlexView>
    </ModalM>
  );
}
