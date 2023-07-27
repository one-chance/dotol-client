import { useState } from 'react';

import { verifyUser } from '@apis/users';
import { Button, FlexView, Input, Link, Text } from '@components/common';
import { Toast } from '@components/toast';
import { CSSObject } from '@emotion/react';
import { isLoggedInState, userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { decodeJWT } from '@utils/common';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(600);

  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState(``);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessge] = useState(``);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);
  const setUserIdState = useSetRecoilState(userIdState);

  const inputCSS: CSSObject = {
    height: `40px`,
    border: `none`,
    borderRadius: 0,
    borderBottom: `1px solid ${Colors.primary10}`,
    padding: 0,
    '::placeholder': {
      color: Colors.primary30,
    },
  };

  const openToast = (text: string) => {
    setToastMessge(text);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = () => {
    setToastMessge(``);

    verifyUser(userId, password).then(res => {
      if (res.statusCode === 200) {
        sessionStorage.setItem(`accessToken`, res.data);
        setIsLoggedInState(true);
        setUserIdState(decodeJWT(res.data).userId);
        navigate(-1);
      } else {
        openToast(res.message);
      }
    });
  };

  return (
    <FlexView color={Colors.white} css={{ margin: `auto` }}>
      <FlexView>
        <Text
          css={{
            fontFamily: `Red Hat Display`,
            fontSize: isMobile ? `32px` : `40px`,
            lineHeight: 1,
          }}
          xLarge={isMobile}
          bold
          center
        >
          dotol
        </Text>

        <FlexView
          css={{ margin: isMobile ? `40px 0` : `40px 0 48px 0` }}
          gap={16}
        >
          <FlexView gap={10}>
            <Input
              aria-label="아이디"
              autoComplete="username"
              css={inputCSS}
              height={isMobile ? 40 : 42}
              placeholder="아이디"
              value={userId || ``}
              width={isMobile ? 280 : 360}
              onChange={inputUserId}
            />

            <Input
              aria-label="비밀번호"
              autoComplete="current-password"
              css={inputCSS}
              height={isMobile ? 40 : 42}
              placeholder="비밀번호"
              type="password"
              value={password || ``}
              width={isMobile ? 280 : 360}
              onChange={inputPassword}
            />
          </FlexView>

          <FlexView content="between" items="center" row>
            <Link
              aria-label="회원가입"
              css={{
                color: Colors.primary,
                fontWeight: 600,
                lineHeight: 1,
                textDecoration: `underline`,
                textUnderlineOffset: `2px`,
                fontSize: isMobile ? `14px` : `16px`,
              }}
              to="/user/signup"
            >
              회원가입
            </Link>

            <FlexView gap={4} items="center" row>
              <Link
                aria-label="아이디 찾기"
                css={{
                  color: Colors.primary60,
                  fontSize: isMobile ? `14px` : `16px`,
                  letterSpacing: `-0.96px`,
                }}
                to="/user/forgot-userId"
              >
                아이디
              </Link>
              <Text
                color={Colors.primary60}
                css={{ lineHeight: 1, fontSize: isMobile ? `14px` : `16px` }}
              >
                /
              </Text>
              <Link
                aria-label="비밀번호 찾기"
                css={{
                  color: Colors.primary60,
                  fontSize: isMobile ? `14px` : `16px`,
                  letterSpacing: `-0.96px`,
                }}
                to="/user/forgot-password"
              >
                비밀번호 찾기
              </Link>
            </FlexView>
          </FlexView>
        </FlexView>

        <FlexView gap={16}>
          <Button
            aria-label="로그인"
            color={Colors.purple}
            css={{
              width: isMobile ? `280px` : `360px`,
              height: isMobile ? `44px` : `50px`,
            }}
            // disabled={userId.length < 6 || password.length < 8}
            radius={24}
            onClick={login}
          >
            <Text color={Colors.white} semiBold>
              로그인
            </Text>
          </Button>
        </FlexView>
      </FlexView>

      {showToast && (
        <Toast isMobile={isMobile} message={toastMessage} type="error" />
      )}
    </FlexView>
  );
};
