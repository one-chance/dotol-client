import { useState } from 'react';

import { forgotPassword } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);
  const [userId, setUserId] = useState(``);
  const [email, setEmail] = useState(` `);
  const [isEmailFormat, setIsEmailForamt] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const checkEmailFormat = (_email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailRegex.test(_email)) {
      setIsEmailForamt(true);
    } else {
      setIsEmailForamt(false);
    }
  };

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkEmailFormat(e.target.value);
    setEmail(e.target.value);
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const findPassword = () => {
    forgotPassword(userId, email).then(res => {
      if (res.statusCode === 200) setIsSend(true);
    });
  };

  return (
    <FlexView css={{ margin: `auto` }}>
      <FlexView gap={isMobile ? 24 : 48}>
        <Text large={isMobile} xxLarge={!isMobile} bold center>
          비밀번호 찾기
        </Text>

        <FlexView gap={10}>
          <Input
            aria-label="아이디"
            css={{
              border: `none`,
              borderBottom: `1px solid lightgray`,
              borderRadius: 0,
            }}
            height={42}
            placeholder="아이디"
            width={isMobile ? 280 : 360}
            onChange={inputUserId}
          />

          <Input
            aria-label="이메일"
            css={{
              border: `none`,
              borderBottom: `1px solid lightgray`,
              borderRadius: 0,
            }}
            height={42}
            placeholder="이메일"
            width={isMobile ? 280 : 360}
            onChange={inputEmail}
          />
        </FlexView>

        <Button
          aria-label="찾기"
          color={Colors.primary}
          css={{ minHeight: `40px` }}
          disabled={!isEmailFormat || userId.length < 6}
          radius={20}
          onClick={findPassword}
        >
          <Text color={Colors.white} small={isMobile} medium>
            찾기
          </Text>
        </Button>

        {isSend && (
          <FlexView css={{ marginTop: `20px` }} gap={4} items="center">
            <Text bold>{email}</Text>
            <Text>주소로 비밀번호 변경 메일이 전송되었습니다.</Text>
          </FlexView>
        )}
      </FlexView>
    </FlexView>
  );
};
