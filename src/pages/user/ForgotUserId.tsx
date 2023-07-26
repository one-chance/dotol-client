import { useState } from 'react';

import { forgotUserId } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(400);

  const [email, setEmail] = useState(``);
  const [isEmailFormat, setIsEmailForamt] = useState(false);
  const [userId, setUserId] = useState(`quwieo`);
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
    forgotUserId(email).then(res => {
      if (res.statusCode === 200) {
        setUserId(res.data);
      } else if (res.statusCode === 404) {
        setNotFoundError(true);
      }
    });
  };

  return (
    <FlexView css={{ margin: `auto` }} gap={60}>
      <FlexView gap={isMobile ? 24 : 40}>
        <Text large={isMobile} xxLarge={!isMobile} bold center>
          아이디 찾기
        </Text>

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

        <Button
          aria-label="찾기"
          color={Colors.primary}
          css={{ minHeight: `40px` }}
          disabled={!isEmailFormat}
          radius={20}
          onClick={findUserId}
        >
          <Text color={Colors.white} small={isMobile} medium>
            찾기
          </Text>
        </Button>
      </FlexView>

      <FlexView>
        {userId !== `` && !notFoundError && (
          <FlexView gap={isMobile ? 24 : 40}>
            <Text center>
              해당 이메일로 가입된 아이디는
              <br />
              <Text bold>{userId}</Text>
              입니다.
            </Text>

            <FlexView gap={10} items="center" row>
              <Button
                aria-label="비밀번호 찾기"
                border={Colors.red}
                css={{ width: isMobile ? `135px` : `175px`, height: `40px` }}
                radius={4}
                onClick={() => navigate(`/user/forgot-password`)}
              >
                <Text color={Colors.red} small={isMobile} semiBold>
                  비밀번호 찾기
                </Text>
              </Button>

              <Button
                aria-label="로그인"
                border={Colors.purple}
                css={{ width: isMobile ? `135px` : `175px`, height: `40px` }}
                radius={4}
                onClick={() => navigate(`/user/signin`)}
              >
                <Text color={Colors.purple} small={isMobile} semiBold>
                  로그인
                </Text>
              </Button>
            </FlexView>
          </FlexView>
        )}

        {notFoundError && (
          <Text center>해당 이메일로 가입된 계정이 없습니다.</Text>
        )}
      </FlexView>
    </FlexView>
  );
};
