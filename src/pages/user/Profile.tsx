import { useEffect, useState } from 'react';

import { getMyInfo, updateMyInfo } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { IUser } from '@interfaces/users';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(400);
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser>({
    index: 0,
    userId: ``,
    password: ``,
    email: ``,
    grade: 0,
    point: 0,
    mainCharacter: ``,
    openTalk: ``,
    createdAt: ``,
    updatedAt: ``,
  });

  const inputOpenTalk = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, openTalk: e.target.value });
  };

  const saveProfile = () => {
    setEditMode(false);
    updateMyInfo(userInfo);
  };

  useEffect(() => {
    getMyInfo().then(res => {
      if (res.statusCode === 200) {
        setUserInfo(res.data);
      }
    });
  }, []);

  return (
    <FlexView
      css={{
        maxWidth: `600px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `auto`,
      }}
    >
      <FlexView
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `8px`,
          padding: isMobile ? `0 5px` : `40px`,
        }}
        gap={isMobile ? 20 : 40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
          프로필
        </Text>

        <FlexView content="end" row>
          {editMode && (
            <Button
              aria-label="취소"
              css={{ width: `60px`, height: `30px` }}
              onClick={() => setEditMode(false)}
            >
              <Text>취소</Text>
            </Button>
          )}

          <Button
            aria-label={editMode ? `저장` : `수정`}
            css={{ width: `60px`, height: `30px` }}
            onClick={() => (editMode ? saveProfile() : setEditMode(true))}
          >
            <Text color={Colors.primary}>{editMode ? `저장` : `수정`}</Text>
          </Button>
        </FlexView>

        <FlexView>
          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              아이디
            </Text>

            <Text small={isMobile}>{userInfo?.userId}</Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              이메일
            </Text>

            <Text small={isMobile}>{userInfo?.email}</Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              도톨 레벨
            </Text>

            <Text small={isMobile}>{userInfo?.grade}</Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              도톨 포인트
            </Text>

            <Text small={isMobile}>{userInfo?.point}</Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              대표 캐릭터
            </Text>

            <Text small={isMobile}>{userInfo?.mainCharacter}</Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              오픈 카톡
            </Text>

            {editMode ? (
              <Input
                aria-label="오픈톡 주소"
                height={40}
                isMobile={isMobile}
                value={userInfo?.openTalk}
                onChange={inputOpenTalk}
              />
            ) : (
              <Text css={{ letterSpacing: 0 }} small={isMobile}>
                {userInfo?.openTalk}
              </Text>
            )}
          </FlexView>

          {/* <FlexView
            css={{ minHeight: `40px` }}
            items={editMode ? `center` : `start`}
            row
          >
            <Text css={{ minWidth: `120px`, margin: `auto 0` }} semiBold>
              서명
            </Text>

            {editMode ? (
              <FlexView gap={8} items="center" fill row>
                <Input aria-label="서명 주소" height={40} readOnly />

                <Button
                  aria-label="업로드"
                  border={Colors.primary}
                  css={{ width: `60px`, height: `40px` }}
                  radius={4}
                >
                  <Text>업로드</Text>
                </Button>
              </FlexView>
            ) : (
              <FlexView content="center" css={{ minHeight: `40px` }}>
                <Text>123</Text>
              </FlexView>
              // <Image />
            )}
          </FlexView> */}
        </FlexView>

        <FlexView content="end" css={{ margin: `0 10px` }} row>
          <Button
            aria-label="회원 탈퇴"
            color={Colors.red}
            css={{ width: `100px`, height: `40px` }}
            radius={4}
            onClick={() => navigate(`/user/secession`)}
          >
            <Text color={Colors.white} small={isMobile} semiBold>
              회원 탈퇴
            </Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
