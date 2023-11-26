import { useEffect, useState } from 'react';

import { getMyInfo, updateMyInfo } from '@apis/index';
import { Button, FlexView, Input, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { IUser } from '@interfaces/index';
import { Colors } from '@styles/system';

export default function ProfilePage() {
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
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView
        radius={4}
        border="lightgray"
        css={{ padding: '20px' }}
        gap={20}
      >
        <Text large={isMobile} xLarge={!isMobile} bold center>
          프로필
        </Text>

        <FlexView radius={4}>
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
          <FlexView gap={isMobile ? 8 : 20} items="center" row>
            <Button
              aria-label="취소"
              border={Colors.purple}
              css={{ width: isMobile ? `150px` : `210px`, height: `40px` }}
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
              css={{ width: isMobile ? `150px` : `210px`, height: `40px` }}
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
            css={{ width: isMobile ? `308px` : `440px`, height: `40px` }}
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
}
