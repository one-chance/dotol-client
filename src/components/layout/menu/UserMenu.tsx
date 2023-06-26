import { forwardRef } from 'react';

import { Button, FlexView, Link, Text } from '@components/common';
import { CSSObject } from '@emotion/react';
import { isLoggedInState } from '@states/login';
import { Colors } from '@styles/system';
import { useSetRecoilState } from 'recoil';

const linkCSS: CSSObject = {
  lineHeight: `40px`,
  padding: `0 20px`,
  ':hover': { backgroundColor: `lightgray` },
};

type MenuProps = {
  close: () => void;
};

export default forwardRef<HTMLDivElement, MenuProps>(
  ({ close }: MenuProps, ref) => {
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);

    const signout = () => {
      sessionStorage.removeItem(`accessToken`);
      setIsLoggedIn(false);
      close();
    };

    return (
      <FlexView
        ref={ref}
        color={Colors.white}
        css={{
          position: `absolute`,
          width: `160px`,
          marginTop: `50px`,
          borderRadius: `4px`,
          boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.1)`,
        }}
      >
        <Link
          css={{
            borderTopLeftRadius: `4px`,
            borderTopRightRadius: `4px`,
            ...linkCSS,
          }}
          to="/user/profile"
          onClick={close}
        >
          프로필
        </Link>

        <Link css={linkCSS} to="/user/change-password" onClick={close}>
          비밀번호 변경
        </Link>
        <Link css={linkCSS} to="/user/character" onClick={close}>
          캐릭터 관리
        </Link>
        <Button
          css={{
            height: `40px`,
            borderBottomLeftRadius: `4px`,
            borderBottomRightRadius: `4px`,
            ...linkCSS,
          }}
          onClick={signout}
        >
          <Text fill start>
            로그아웃
          </Text>
        </Button>
      </FlexView>
    );
  },
);
