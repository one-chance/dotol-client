import { useEffect, useState } from 'react';

import { getMyInfo, updateMyInfo } from '@apis/users';
import { Button, FlexView, Input, Text } from '@components/common';
import { MenuTab } from '@components/layout';
import { USER_MENU_TABS } from '@constants/menu';
import { IUser } from '@interfaces/users';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser | undefined>();

  const inputOpenTalk = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userInfo) setUserInfo({ ...userInfo, openTalk: e.target.value });
  };

  const saveProfile = () => {
    if (userInfo) updateMyInfo(userInfo);
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
        width: isMobile ? `100%` : undefined,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      gap={isMobile ? 20 : 40}
    >
      <MenuTab isMobile={isMobile} menus={USER_MENU_TABS} />

      <FlexView
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: isMobile ? `10px` : `40px`,
        }}
        gap={isMobile ? 40 : 60}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
          프로필
        </Text>

        <FlexView gap={8}>
          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              아이디
            </Text>

            <Text small={isMobile} fill>
              {userInfo?.userId}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              이메일
            </Text>

            <Text small={isMobile} fill>
              {userInfo?.email}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              도톨 레벨
            </Text>

            <Text small={isMobile} fill>
              {userInfo?.grade}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              도톨 포인트
            </Text>

            <Text small={isMobile} fill>
              {userInfo?.point}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              small={isMobile}
              semiBold
            >
              대표 캐릭터
            </Text>

            <Text small={isMobile} fill>
              {userInfo?.mainCharacter}
            </Text>
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
                aria-label="오픈 카톡"
                autoFocus={editMode}
                isMobile={isMobile}
                value={userInfo?.openTalk}
                width={isMobile ? 230 : 320}
                onChange={inputOpenTalk}
              />
            ) : (
              <Text small={isMobile} fill>
                {userInfo?.openTalk}
              </Text>
            )}
          </FlexView>
        </FlexView>

        {editMode ? (
          <FlexView gap={isMobile ? 10 : 20} items="center" row>
            <Button
              aria-label="취소"
              border={Colors.purple}
              css={{ width: isMobile ? `155px` : `210px`, height: `40px` }}
              radius={4}
              onClick={() => setEditMode(false)}
            >
              <Text color={Colors.purple} small={isMobile} semiBold>
                취소
              </Text>
            </Button>

            <Button
              aria-label="저장하기"
              color={Colors.purple}
              css={{ width: isMobile ? `155px` : `210px`, height: `40px` }}
              radius={4}
              onClick={saveProfile}
            >
              <Text color={Colors.white} small={isMobile} semiBold>
                저장
              </Text>
            </Button>
          </FlexView>
        ) : (
          <Button
            aria-label="수정하기"
            color={Colors.purple}
            css={{ width: isMobile ? `320px` : `440px`, height: `40px` }}
            radius={4}
            onClick={() => setEditMode(true)}
          >
            <Text color={Colors.white} small={isMobile} semiBold>
              수정하기
            </Text>
          </Button>
        )}
      </FlexView>
    </FlexView>
  );
};
