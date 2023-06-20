import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(360);
  const [email, setEmail] = useState(``);
  const [isEmailFormat, setIsEmailForamt] = useState(false);
  const [userId, setUserId] = useState(``);
  const [notFoundError, setNotFoundError] = useState(false);

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

  const findUserId = () => {
    setNotFoundError(true);
    // 이메일 존재 확인
    // 아이디 찾기
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
        아이디 찾기
      </Text>

      <FlexView css={{ height: `84px` }}>
        <Input
          css={{ height: `40px`, fontSize: `16px` }}
          placeholder="이메일 주소"
          width={300}
          onChange={inputEmail}
        />
      </FlexView>

      <Button
        color="blue"
        css={{ minHeight: `40px` }}
        disabled={!isEmailFormat}
        radius={4}
        onClick={findUserId}
      >
        <Text color={Colors.white} small={isMobile} medium>
          찾기
        </Text>
      </Button>

      {userId && !notFoundError && (
        <Text center>
          해당 이메일로 가입된 계정의 아이디는
          <br />
          <Text color="red" bold>
            xxx
          </Text>
          입니다.
        </Text>
      )}

      {notFoundError && (
        <Text color={Colors.red} center>
          해당 이메일로 가입된 계정이 없습니다.
        </Text>
      )}
    </FlexView>
  );
};
