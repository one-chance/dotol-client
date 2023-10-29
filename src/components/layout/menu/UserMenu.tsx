import { forwardRef } from 'react';

import { CSSObject } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import { Button, FlexView, Link, Text } from '@components/common';
import { isLoggedInState, userIdState } from '@states/index';
import { Colors } from '@styles/system';

const linkCSS: CSSObject = {
  lineHeight: `40px`,
  padding: `0 20px`,
  color: Colors.white,
  ':hover': { backgroundColor: Colors.primary80 },
};

type MenuProps = {
  close: () => void;
};

export default forwardRef<HTMLDivElement, MenuProps>(
  ({ close }: MenuProps, ref) => {
    const setIsLoggedInState = useSetRecoilState(isLoggedInState);
    const setUserIdState = useSetRecoilState(userIdState);

    const signout = () => {
      sessionStorage.removeItem(`accessToken`);
      setIsLoggedInState(false);
      setUserIdState(``);
      close();
    };

    return (
      <FlexView
        ref={ref}
        color={Colors.primary}
        css={{
          position: `absolute`,
          width: `160px`,
          marginTop: `50px`,
          borderRadius: `4px`,
          boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.1)`,
        }}
      >
        <Link
          aria-label="프로필"
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

        {/* <Link
          aria-label="비밀번호 변경"
          css={linkCSS}
          to="/user/change-password"
          onClick={close}
        >
          비밀번호 변경
        </Link> */}

        <Link
          aria-label="캐릭터 관리"
          css={linkCSS}
          to="/user/character"
          onClick={close}
        >
          캐릭터 관리
        </Link>

        <Button
          aria-label="로그아웃"
          css={{
            height: `40px`,
            borderBottomLeftRadius: `4px`,
            borderBottomRightRadius: `4px`,
            ...linkCSS,
          }}
          onClick={signout}
        >
          <Text color={Colors.white} fill start>
            로그아웃
          </Text>
        </Button>
      </FlexView>
    );
  },
);
