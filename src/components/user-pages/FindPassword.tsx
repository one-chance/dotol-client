import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(360);
  const [userId, setUserId] = useState(``);
  const [email, setEmail] = useState(``);
  const [isEmailFormat, setIsEmailForamt] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

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
    // 이메일 존재 확인
    // 비밀번호 초기화
  };

  return (
    <FlexView
      css={{
        minHeight: isMobile ? `280px` : `340px`,
        border: `1px solid lightgray`,
        borderRadius: `8px`,
        padding: `20px`,
        boxSizing: `border-box`,
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
        <Input placeholder="사용자 ID" width={300} onChange={inputUserId} />
        <Input placeholder="이메일 주소" width={300} onChange={inputEmail} />
      </FlexView>

      <Button
        color={Colors.primary}
        css={{ minHeight: `40px` }}
        disabled={!isEmailFormat || userId.length < 6}
        radius={20}
        onClick={findPassword}
      >
        <Text color={Colors.white} small={isMobile} medium>
          비밀번호 초기화
        </Text>
      </Button>

      {isInitialized && (
        <Text center>
          입력된 이메일로 비밀번호 초기화
          <br />
          관련 링크가 전송되었습니다.
        </Text>
      )}
    </FlexView>
  );
};
