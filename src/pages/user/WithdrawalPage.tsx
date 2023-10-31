/* eslint-disable no-alert */
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { deleteUser } from '@apis/index';
import { Button, FlexView, Text, TextField } from '@components/common';
import { MenuTab } from '@components/layout';
import { USER_MENU_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';
import { isLoggedInState, userIdState } from '@states/index';
import { Colors } from '@styles/system';

const WithdrawalPage = () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(500);
  const setUserIdState = useSetRecoilState(userIdState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [isEmailForm, setIsEmailForm] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(``);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(``);

  const inputEmail = (_input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailErrorMessage(`! 올바른 이메일 형식이 아닙니다.`);
    setEmail(_input);

    if (emailRegex.test(_input)) setIsEmailForm(true);
    else setIsEmailForm(false);
  };
  const inputPassword = (_input: string) => {
    setIsCorrectPassword(true);
    setPassword(_input);
  };

  const withdrawUser = () => {
    deleteUser(email, password).then(res => {
      if (res.statusCode === 200) {
        sessionStorage.removeItem(`accessToken`);
        setIsLoggedInState(false);
        setUserIdState(``);
        alert(`회원탈퇴가 완료되었습니다.`);
        navigate(`/`);
      } else if (res.statusCode === 400) {
        setIsEmailForm(false);
        setEmailErrorMessage(`! 이메일이 일치하지 않습니다.`);
      } else if (res.statusCode === 401) {
        setIsCorrectPassword(false);
        setPasswordErrorMessage(`! 비밀번호가 일치하지 않습니다.`);
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
            회원 탈퇴
          </Text>

          <FlexView gap={8}>
            <Text color={Colors.red} small={isMobile}>
              작성한 게시물, 댓글은 자동으로 삭제되지 않습니다.
            </Text>
            <Text color={Colors.red} small={isMobile}>
              탈퇴하면 계정을 복구할 수 없습니다.
            </Text>
          </FlexView>

          <FlexView gap={12}>
            <TextField
              autoComplete="email"
              correct={isEmailForm}
              error={!isEmailForm}
              errorMessage={emailErrorMessage}
              label="이메일"
              value={email}
              onChange={inputEmail}
            />

            <TextField
              autoComplete="current-password"
              error={!isCorrectPassword}
              errorMessage={passwordErrorMessage}
              isMobile={isMobile}
              label="비밀번호"
              value={password}
              password
              onChange={inputPassword}
            />
          </FlexView>

          <Button
            aria-label="탈퇴"
            color={Colors.red}
            css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
            disabled={password.length < 8 || !isEmailForm}
            radius={4}
            onClick={withdrawUser}
          >
            <Text color={Colors.white} small={isMobile} semiBold>
              탈퇴하기
            </Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};

export default WithdrawalPage;
