import { useState } from 'react';

import { deleteUser } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(400);
  const [password, setPassword] = useState(``);

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const secesseUser = () => {
    deleteUser().then(res => {
      if (res.statusCode === 200) {
        alert(`회원탈퇴가 완료되었습니다.`);
        navigate(`/`);
      }
    });
  };

  return (
    <FlexView css={{ margin: isMobile ? `0` : `auto` }}>
      <FlexView
        css={{
          maxWidth: `600px`,
          width: `100%`,
          minWidth: `360px`,
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `20px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          회원탈퇴
        </Text>

        <FlexView gap={8}>
          <Text color={Colors.red}>
            회원탈퇴시 작성했던 게시물, 댓글은 자동으로 삭제되지 않습니다.
          </Text>
          <Text color={Colors.red}>
            회원탈퇴시 개인정보가 삭제되어 추후 계정을 복구할 수 없습니다.
          </Text>
        </FlexView>

        <FlexView gap={8}>
          <Text small={isMobile} semiBold>
            비밀번호 확인
          </Text>
          <FlexView gap={8} items="center" row>
            <Input
              css={{
                height: `40px`,
              }}
              type="password"
              onChange={inputPassword}
            />
            <Button
              color={Colors.red}
              css={{ width: `60px`, height: `40px` }}
              disabled={password.length < 8}
              radius={4}
              onClick={secesseUser}
            >
              <Text color={Colors.white}>탈퇴</Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
