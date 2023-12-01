import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { verifyUser } from '@apis/index';
import { Button, FlexView, Text, TextField } from '@components/common';
import { useResponsive } from '@hooks/index';
import { isLoggedInState, userIdState } from '@states/index';
import { Colors } from '@styles/index';
import { decodeJWT } from '@utils/index';

import Modal from '../Modal';

type ModalProps = {
  close: () => void;
};

export default ({ close }: ModalProps) => {
  const isMobile = useResponsive(600);
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
    <Modal
      closePortal={close}
      height={isMobile ? 385 : 445}
      isLogin={isMobile}
      width={isMobile ? 300 : 440}
    >
      <FlexView
        color={Colors.white}
        css={{
          padding: isMobile ? `40px 30px` : `60px 40px`,
        }}
        radius={4}
      >
        <Text
          css={{
            fontFamily: `Red Hat Display`,
            fontSize: isMobile ? `32px` : `40px`,
            lineHeight: 1,
            letterSpacing: `-0.96px`,
          }}
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
              isMobile={isMobile}
              label="아이디"
              value={userId}
              onChange={inputUserId}
            />

            <TextField
              autoComplete="current-password"
              error={wrongPasswordError}
              errorMessage="! 비밀번호가 일치하지 않습니다."
              isMobile={isMobile}
              label="비밀번호"
              value={password}
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
                fontSize: isMobile ? `14px` : `16px`,
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
                  fontSize: isMobile ? `14px` : `16px`,
                  lineHeight: 1,
                }}
                to="/user/forgot-userId"
                onClick={close}
              >
                아이디
              </Link>
              <Text
                color={Colors.primary60}
                css={{ fontSize: isMobile ? `14px` : `16px`, lineHeight: 1 }}
              >
                /
              </Text>
              <Link
                aria-label="비밀번호 찾기"
                css={{
                  color: Colors.primary60,
                  letterSpacing: `-0.96px`,
                  fontSize: isMobile ? `14px` : `16px`,
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
          css={{ height: isMobile ? `44px` : `50px` }}
          disabled={userId.length < 6 || password.length < 8}
          radius={4}
          onClick={login}
        >
          <Text
            color={Colors.white}
            size={isMobile ? `small` : `normal`}
            weight="semiBold"
          >
            로그인
          </Text>
        </Button>
      </FlexView>
    </Modal>
  );
};
