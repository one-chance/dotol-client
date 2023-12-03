import { useEffect, useState } from 'react';

import { getMyInfo, updateMyInfo } from '@apis/index';
import { Button, FlexView, Input, Link, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { IUser } from '@interfaces/index';
import { Colors } from '@styles/index';

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
        border="lightgray"
        css={{
          width: isMobile ? `350px` : `480px`,
          padding: isMobile ? `20px` : `40px`,
        }}
        gap={20}
        radius={4}
      >
        <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
          프로필
        </Text>

        <FlexView radius={4}>
          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
            >
              아이디
            </Text>

            <Text size={isMobile ? `small` : `normal`} fill>
              {userInfo?.userId}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
            >
              이메일
            </Text>

            <Text size={isMobile ? `small` : `normal`} fill>
              {userInfo?.email}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
            >
              도톨 레벨
            </Text>

            <Text size={isMobile ? `small` : `normal`} fill>
              {userInfo?.grade}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
            >
              도톨 포인트
            </Text>

            <Text size={isMobile ? `small` : `normal`} fill>
              {userInfo?.point}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
            >
              대표 캐릭터
            </Text>

            <Text size={isMobile ? `small` : `normal`} fill>
              {userInfo?.mainCharacter}
            </Text>
          </FlexView>

          <FlexView css={{ height: `40px` }} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `90px` : `120px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
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
              <Text size={isMobile ? `small` : `normal`} fill>
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
              css={{ height: `40px` }}
              radius={4}
              flex
              onClick={() => setEditMode(false)}
            >
              <Text
                color={Colors.purple}
                size={isMobile ? `small` : `normal`}
                weight="semiBold"
              >
                취소
              </Text>
            </Button>

            <Button
              aria-label="저장하기"
              color={Colors.purple}
              css={{ height: `40px` }}
              radius={4}
              flex
              onClick={saveProfile}
            >
              <Text
                color={Colors.white}
                size={isMobile ? `small` : `normal`}
                weight="semiBold"
              >
                저장
              </Text>
            </Button>
          </FlexView>
        ) : (
          <FlexView gap={isMobile ? 8 : 20} items="center" row>
            <Link
              aria-label="회원 탈퇴"
              css={{
                backgroundColor: Colors.red,
                color: Colors.white,
                borderRadius: `4px`,
                lineHeight: `40px`,
                flex: 1,
                fontSize: isMobile ? `small` : `normal`,
                fontWeight: 600,
                textAlign: `center`,
              }}
              to="/user/withdrawal"
            >
              회원 탈퇴
            </Link>

            <Button
              aria-label="정보 수정"
              color={Colors.purple}
              css={{ height: `40px` }}
              radius={4}
              flex
              onClick={() => setEditMode(true)}
            >
              <Text
                color={Colors.white}
                size={isMobile ? `small` : `normal`}
                weight="semiBold"
              >
                정보 수정
              </Text>
            </Button>
          </FlexView>
        )}
      </FlexView>
    </FlexView>
  );
}
