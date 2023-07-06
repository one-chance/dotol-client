import { useState } from 'react';

import { isDuplicatedUserId } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { CSSObject } from '@emotion/react';
import { NewUser } from '@interfaces/users';
import { Colors } from '@styles/system';

type SignUpProps = {
  isMobile: boolean;
  setPhase?: (info: Partial<NewUser>) => void;
};

const btnCSS: CSSObject = {
  width: `80px`,
  height: `40px`,
  borderRadius: `0 4px 4px 0`,
  outline: `none`,
};

export default ({ isMobile, setPhase }: SignUpProps) => {
  const INPUT_WIDTH = isMobile ? 180 : 240;

  const [userId, setUserId] = useState(``);
  const [password, setPassword] = useState(``);
  const [isUniqueId, setIsUniqueId] = useState(false);
  const [isPasswordForm, setIsPasswordForm] = useState(false);

  const inputCSS: CSSObject = {
    borderRadius: `4px 0 0 4px`,
    borderRight: `none`,
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value.replace(/[^a-zA-Z0-9]/g, ``));
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    if (pattern.test(e.target.value)) setIsPasswordForm(true);
    else setIsPasswordForm(false);
  };

  const checkUniqueId = () => {
    isDuplicatedUserId(userId).then(res => {
      if (res.statusCode === 400) alert(`중복된 아이디입니다.`);
      else if (res.statusCode === 200) setIsUniqueId(true);
    });
  };

  const nextPhase = () => {
    if (setPhase) setPhase({ userId, password });
  };

  return (
    <FlexView gap={isMobile ? 40 : 60}>
      <FlexView gap={24}>
        <FlexView items="center" row>
          <Text
            css={{ minWidth: isMobile ? `80px` : `120px` }}
            large={!isMobile}
            medium
          >
            아이디
          </Text>

          <Input
            css={inputCSS}
            height={40}
            placeholder="영문, 숫자 (6자리 이상)"
            readOnly={isUniqueId}
            width={INPUT_WIDTH}
            onChange={inputUserId}
            onKeyDown={e => {
              if (e.key === `Enter`) checkUniqueId();
            }}
          />

          <Button
            color={Colors.primary}
            css={btnCSS}
            disabled={userId.length < 6}
            onClick={checkUniqueId}
          >
            <Text color={Colors.white} small={isMobile}>
              {isUniqueId ? `사용 가능` : `중복 확인`}
            </Text>
          </Button>
        </FlexView>

        <FlexView items="center" row>
          <Text
            css={{
              minWidth: isMobile ? `80px` : `120px`,
            }}
            large={!isMobile}
            medium
          >
            비밀번호
          </Text>
          <Input
            css={inputCSS}
            height={40}
            placeholder="영문, 숫자, 특수문자 (8자리 이상)"
            type="password"
            value={password || ``}
            width={INPUT_WIDTH}
            onChange={inputPassword}
          />

          <FlexView
            css={{
              ...btnCSS,
              backgroundColor: isPasswordForm ? `green` : `red`,
            }}
            center
          >
            <Text color={Colors.white}>{isPasswordForm ? `맞음` : `틀림`}</Text>
          </FlexView>
        </FlexView>
      </FlexView>
      <FlexView content="center" row>
        <Button
          color={Colors.primary}
          css={{
            width: isMobile ? `200px` : `280px`,
            height: `40px`,
            borderRadius: `20px`,
          }}
          disabled={!isUniqueId || !isPasswordForm}
          onClick={nextPhase}
        >
          <Text color={Colors.white}>다음</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
