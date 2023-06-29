import { useState } from 'react';

import { forgotPassword } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(360);
  const [userId, setUserId] = useState(``);
  const [email, setEmail] = useState(``);
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
    <FlexView
      css={{
        minHeight: isMobile ? `280px` : `340px`,
        border: `1px solid lightgray`,
        borderRadius: `8px`,
        padding: `20px`,
      }}
      fill={isMobile}
      gap={isMobile ? 12 : 24}
    >
      <Text
        css={{ marginBottom: `20px` }}
        large={isMobile}
        xxLarge={!isMobile}
        bold
        center
      >
        비밀번호 찾기
      </Text>

      <FlexView gap={12}>
        <Input
          height={40}
          placeholder="아이디"
          width={300}
          onChange={inputUserId}
        />
        <Input
          height={40}
          placeholder="이메일"
          width={300}
          onChange={inputEmail}
        />
      </FlexView>

      <Button
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
        <Text center>
          입력된 이메일로 비밀번호 초기화
          <br />
          관련 메일이 전송되었습니다.
        </Text>
      )}
    </FlexView>
  );
};
