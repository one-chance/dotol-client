import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { forgotUserId } from '@apis/index';
import { Button, FlexView, Text, TextField } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

export default function ForgotUserIdPage() {
  const navigate = useNavigate();
  const isMobile = useResponsive(500);

  const [email, setEmail] = useState(``);
  const [userId, setUserId] = useState(``);
  const [isEmailForm, setIsEmailForm] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(``);

  const inputEmail = (_input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailErrorMessage(`! 올바른 이메일 형식이 아닙니다.`);
    setEmail(_input);

    if (emailRegex.test(_input)) setIsEmailForm(true);
    else setIsEmailForm(false);
  };

  const findUserId = () => {
    forgotUserId(email).then(res => {
      if (res.statusCode === 200) {
        setUserId(res.data);
      } else if (res.statusCode === 404) {
        setEmailErrorMessage(`! 해당 이메일로 가입된 계정이 없습니다.`);
      }
    });
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `60px auto` }} gap={60}>
      <FlexView
        radius={4}
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          padding: isMobile ? `20px 10px` : `40px 20px`,
        }}
        gap={isMobile ? 24 : 40}
      >
        <Text large={isMobile} xxLarge={!isMobile} bold center>
          아이디 찾기
        </Text>

        {userId === `` ? (
          <FlexView gap={isMobile ? 24 : 40}>
            <TextField
              correct={isEmailForm}
              error={!isEmailForm}
              errorMessage={emailErrorMessage}
              label="이메일"
              value={email}
              onChange={inputEmail}
            />

            <Button
              aria-label="확인"
              color={Colors.purple}
              css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
              disabled={!isEmailForm}
              radius={4}
              onClick={findUserId}
            >
              <Text color={Colors.white} small={isMobile} semiBold>
                확인
              </Text>
            </Button>
          </FlexView>
        ) : (
          <FlexView gap={isMobile ? 24 : 40}>
            <FlexView>
              <Text small={isMobile} center>
                해당 이메일로 가입된 아이디는
              </Text>
              <Text small={isMobile} center>
                <Text color={Colors.red} bold>
                  {userId}
                </Text>
                입니다.
              </Text>
            </FlexView>

            <Button
              aria-label="비밀번호 찾기"
              color={Colors.purple}
              css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
              radius={4}
              onClick={() => navigate(`/user/forgot-password`)}
            >
              <Text color={Colors.white} small={isMobile} semiBold>
                비밀번호 찾기
              </Text>
            </Button>
          </FlexView>
        )}
      </FlexView>
    </FlexView>
  );
}
