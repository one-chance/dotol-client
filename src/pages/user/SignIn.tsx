import { useEffect, useState } from 'react';

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
  const [notFoundError, setNotFoundError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);
  const setUserIdState = useSetRecoilState(userIdState);

  const inputCSS: CSSObject = {
    height: `40px`,
    border: `none`,
    borderRadius: 0,
    borderBottom: `1px solid ${Colors.primary30}`,
    padding: 0,
    '::placeholder': {
      color: Colors.primary30,
    },
  };

  const openToast = () => {
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
    setNotFoundError(false);
    setPasswordError(false);

    verifyUser(userId, password).then(res => {
      if (res.statusCode === 200) {
        sessionStorage.setItem(`accessToken`, res.data);
        setIsLoggedInState(true);
        setUserIdState(decodeJWT(res.data).userId);
        navigate(-1);
      } else if (res.statusCode === 404) {
        setNotFoundError(true);
      } else if (res.statusCode === 400) {
        setPasswordError(true);
      }
    });
  };

  useEffect(() => {
    openToast();
  }, []);

  return (
    <FlexView color={Colors.white} css={{ margin: `auto` }}>
      <FlexView gap={40}>
        <Text
          css={{
            fontFamily: `Red Hat Display`,
            fontSize: `40px`,
            lineHeight: 1,
          }}
          xLarge={isMobile}
          bold
          center
        >
          dotol
        </Text>

        <FlexView gap={24}>
          <FlexView gap={10}>
            <Input
              autoComplete="username"
              css={inputCSS}
              height={isMobile ? 40 : 42}
              placeholder="아이디"
              value={userId || ``}
              width={isMobile ? 280 : 360}
              onChange={inputUserId}
            />

            <Input
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
            <Link to="/user/signup">
              <Text color={Colors.primary} small={isMobile} semiBold>
                회원가입
              </Text>
            </Link>

            <FlexView gap={2} items="center" row>
              <Link to="/user/forgot-userId">
                <Text color={Colors.primary60} small={isMobile}>
                  아이디
                </Text>
              </Link>
              <Text color={Colors.primary60}>/</Text>
              <Link to="/user/forgot-password">
                <Text color={Colors.primary60} small={isMobile}>
                  비밀번호 찾기
                </Text>
              </Link>
            </FlexView>
          </FlexView>
        </FlexView>

        <FlexView gap={16}>
          <Button
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
        <Toast
          isMobile={isMobile}
          message="비밀번호가 일치하지 않습니다."
          type="error"
        />
      )}
    </FlexView>
  );
};
