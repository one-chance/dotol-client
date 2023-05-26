import { forwardRef } from 'react';

import { Button, FlexView, Link, Text } from '@components/common';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';

const linkCSS: CSSObject = {
  lineHeight: `40px`,
  fontSize: `12px`,

  ':hover': { backgroundColor: `lightgray` },
};

type MenuProps = {
  close: () => void;
};

export default forwardRef<HTMLDivElement, MenuProps>(
  ({ close }: MenuProps, ref) => {
    const a = 1;

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
        <FlexView
          content="between"
          css={{
            minHeight: `40px`,
            padding: `0 8px`,
            borderBottom: `1px solid lightgray`,
          }}
          items="center"
          row
        >
          <Link
            css={{
              borderTopLeftRadius: `4px`,
              borderTopRightRadius: `4px`,
              fontSize: `12px`,
              ':hover': {
                textDecoration: `underline`,
              },
            }}
            to="/user/profile"
            onClick={close}
          >
            댓글이 달렸습니다.
          </Link>

          <Button>
            <Text>x</Text>
          </Button>
        </FlexView>

        <Link css={linkCSS} to="/user/change-password" onClick={close}>
          비밀번호 변경
        </Link>
        <Link css={linkCSS} to="/" onClick={close}>
          대표 캐릭터
        </Link>
      </FlexView>
    );
  },
);
