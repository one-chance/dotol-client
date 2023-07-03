import { useState } from 'react';

import { createUser } from '@apis/users';
import { FlexView, Text } from '@components/common';
import { SignUpOne, SignUpTwo, SignUpThree } from '@components/user-pages';
import { NewUser } from '@interfaces/users';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(600);

  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [userInfo, setUserInfo] = useState<NewUser>({
    userId: ``,
    password: ``,
    email: ``,
  });

  const goPhaseTwo = (info: Partial<NewUser>) => {
    setUserInfo({ ...userInfo, ...info });
    setPhase(2);
  };

  const goPhaseThree = (info: Partial<NewUser>) => {
    setUserInfo({ ...userInfo, ...info });
    createUser(userInfo).then(res => {
      if (res.statusCode === 200) {
        setPhase(3);
      }
    });
  };

  const Phase = {
    1: <SignUpOne isMobile={isMobile} setPhase={goPhaseTwo} />,
    2: <SignUpTwo isMobile={isMobile} setPhase={goPhaseThree} />,
    3: <SignUpThree isMobile={isMobile} />,
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `auto` }}>
      <FlexView
        css={{
          border: isMobile ? undefined : `1px solid lightgray`,
          borderRadius: `8px`,
          padding: isMobile ? `10px` : `40px`,
        }}
      >
        <Text
          css={{ marginBottom: isMobile ? `40px` : `60px` }}
          xLarge={isMobile}
          bold
          center
          xxLarge
        >
          회원가입
        </Text>

        {Phase[phase]}
      </FlexView>
    </FlexView>
  );
};
