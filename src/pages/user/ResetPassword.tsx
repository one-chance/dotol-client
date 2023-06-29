import { useEffect, useState } from 'react';

import { forgotPassword } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useResponsive(400);

  const [userId, setUserId] = useState(``);
  const [newPassword, setNewPassword] = useState(``);
  const [isPasswordForm, setIsPasswordForm] = useState(false);

  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (pattern.test(e.target.value)) setIsPasswordForm(true);
    else setIsPasswordForm(false);
  };

  const changePassword = () => {
    forgotPassword(userId, newPassword).then(res => {
      if (res.statusCode === 200) {
        alert(`비밀번호가 재설정되었습니다.`);
        navigate(`/users/signin`);
      } else if (res.statusCode === 400) alert(`유효하지 않은 링크입니다.`);
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setUserId(params.get(`userId`) || ``);
  }, [location.search]);

  return (
    <FlexView css={{ margin: isMobile ? `40px auto` : `auto` }}>
      <FlexView
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: isMobile ? 0 : `40px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          비밀번호 재설정
        </Text>

        <FlexView gap={16}>
          <Input
            css={{
              '::placeholder': {
                fontSize: isMobile ? `14px` : `16px`,
              },
            }}
            height={40}
            placeholder="문자, 숫자, 특수문자의 조합으로 6자리 이상"
            type="password"
            value={newPassword || ``}
            width={isMobile ? 300 : 360}
            onChange={inputNewPassword}
          />

          <FlexView content="end" row>
            <Button
              color={Colors.red}
              css={{ width: isMobile ? `300px` : `360px`, height: `40px` }}
              disabled={!isPasswordForm}
              radius={4}
              onClick={changePassword}
            >
              <Text color={Colors.white} small={isMobile} semiBold>
                비밀번호 변경
              </Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
