import { useState } from 'react';

import { Button, FlexView, Input, Link, Text } from '@components/common';
import { CSSObject } from '@emotion/react';
import { isLoggedInState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export default () => {
  const INPUT_WIDTH = 320;
  const navigate = useNavigate();
  const isMobile = useResponsive(600);

  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState(``);
  const [notFoundError, setNotFoundError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const inputCSS: CSSObject = {
    height: `40px`,
    borderRadius: `4px`,
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signinUser = () => {
    // 아이디 존재 확인
    // 비밀번호 일치 확인
    // 로그인
    navigate(-1);
    setIsLoggedIn(true);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `auto` }}>
      <FlexView
        css={{
          border: isMobile ? undefined : `1px solid lightgray`,
          borderRadius: `8px`,
          padding: isMobile ? `10px` : `20px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} bold center xxLarge>
          로그인
        </Text>

        <FlexView gap={notFoundError ? 12 : 0}>
          <FlexView gap={4}>
            <Input
              css={inputCSS}
              placeholder="아이디"
              width={INPUT_WIDTH}
              onChange={inputUserId}
            />

            <Text
              color={Colors.red}
              css={{ paddingLeft: `4px`, minHeight: `15px` }}
              noDrag
              xSmall
            >
              {notFoundError ? `가입되지 않은 아이디입니다.` : ``}
            </Text>
          </FlexView>

          <FlexView gap={4}>
            <Input
              css={inputCSS}
              placeholder="비밀번호"
              type="password"
              width={INPUT_WIDTH}
              onChange={inputPassword}
            />

            <Text
              color={Colors.red}
              css={{ paddingLeft: `4px`, minHeight: `15px` }}
              xSmall
            >
              {passwordError ? `비밀번호가 일치하지 않습니다.` : ``}
            </Text>
          </FlexView>
        </FlexView>

        <FlexView gap={16}>
          <Button
            color="blue"
            css={{ borderRadius: `4px`, minHeight: `40px` }}
            disabled={userId.length < 6 || password.length < 8}
            onClick={signinUser}
          >
            <Text color={Colors.white} semiBold>
              로그인
            </Text>
          </Button>

          <FlexView content="between" items="center" row>
            <Link to="/user/signup">
              <Text small>회원가입</Text>
            </Link>

            <Link to="/user/find-account">
              <Text small>ID/PW 찾기</Text>
            </Link>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
