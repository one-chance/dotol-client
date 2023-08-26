/* eslint-disable no-alert */
import { useState } from 'react';

import { deleteUser } from '@apis/users';
import { Button, FlexView, Text, TextField } from '@components/common';
import { MenuTab } from '@components/layout';
import { USER_MENU_TABS } from '@constants/menu';
import { isLoggedInState, userIdState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(500);
  const [password, setPassword] = useState(``);
  const setUserIdState = useSetRecoilState(userIdState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);

  const inputPassword = (_input: string) => {
    setPassword(_input);
  };

  const withdrawUser = () => {
    deleteUser().then(res => {
      if (res.statusCode === 200) {
        sessionStorage.removeItem(`accessToken`);
        setIsLoggedInState(false);
        setUserIdState(``);
        alert(`회원탈퇴가 완료되었습니다.`);
        navigate(`/`);
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

          <TextField
            autoComplete="current-password"
            isMobile={isMobile}
            label="비밀번호"
            value={password}
            password
            onChange={inputPassword}
          />

          <Button
            aria-label="탈퇴"
            color={Colors.red}
            css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
            disabled={password.length < 8}
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