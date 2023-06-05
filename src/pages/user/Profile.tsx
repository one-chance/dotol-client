import { useState } from 'react';

import { Button, FlexView, Image, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const isMobile = useResponsive(400);
  const [editMode, setEditMode] = useState(false);

  const INFO_LIST = [
    `아이디`,
    `이메일`,
    `등급`,
    `포인트`,
    `대표 캐릭터`,
    `오픈카톡`,
  ];

  const saveProfile = () => {
    // TODO: save profile
    setEditMode(false);
  };

  return (
    <FlexView
      css={{
        maxWidth: `600px`,
        width: `100%`,
        margin: isMobile ? `0` : `auto`,
      }}
    >
      <FlexView
        css={{
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `40px`,
        }}
        gap={40}
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
          프로필
        </Text>

        <FlexView content="end" gap={16} row>
          <Button
            onClick={() => (editMode ? saveProfile() : setEditMode(true))}
          >
            <Text>{editMode ? `저장` : `수정하기`}</Text>
          </Button>

          {editMode && (
            <Button onClick={() => setEditMode(false)}>
              <Text>취소</Text>
            </Button>
          )}
        </FlexView>

        <FlexView gap={16}>
          {INFO_LIST.map((info: string, index: number) => (
            <FlexView key={info} css={{ height: `40px` }} items="center" row>
              <Text css={{ minWidth: `120px` }} small={isMobile} semiBold>
                {info}
              </Text>

              {index > 4 && editMode ? (
                <Input
                  css={{
                    height: `40px`,
                  }}
                />
              ) : (
                <Text css={{ flex: 1 }} small={isMobile}>
                  123
                </Text>
              )}
            </FlexView>
          ))}

          <FlexView
            css={{ minHeight: `40px` }}
            items={editMode ? `center` : `start`}
            row
          >
            <Text css={{ minWidth: `120px`, margin: `auto 0` }} semiBold>
              서명
            </Text>

            {editMode ? (
              <FlexView gap={8} items="center" row>
                <Input
                  css={{
                    height: `40px`,
                  }}
                  readOnly
                />
                {/* 등급이 일정 이상이어야 수정 가능 */}
                <Button css={{ width: `60px`, height: `40px` }}>
                  <Text>업로드</Text>
                </Button>
              </FlexView>
            ) : (
              <Text>123</Text>
              // <Image />
            )}
          </FlexView>
        </FlexView>

        <FlexView css={{ marginTop: `20px` }}>
          <Button
            color={Colors.red}
            css={{ width: `100px`, height: `40px`, borderRadius: `4px` }}
            onClick={() => navigate(`/user/secession`)}
          >
            <Text color={Colors.white} medium>
              회원 탈퇴
            </Text>
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
