import { useState, useEffect } from 'react';

import { Button, FlexView, Image, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    // 정보 가져와서 조건이 되면 서명 추가
  }, []);

  return (
    <FlexView css={{ maxWidth: `980px`, width: `100%`, margin: `20px auto` }}>
      <FlexView gap={40}>
        <Text bold xLarge>
          프로필
        </Text>

        <FlexView content="end" gap={16} items="center" row>
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
            <FlexView css={{ height: `40px` }} items="center" row>
              <Text css={{ minWidth: `120px` }} semiBold>
                {info}
              </Text>
              {index > 4 && editMode ? (
                <Input
                  css={{
                    border: `1px solid lightgray`,
                    borderRadius: `4px`,
                    width: `240px`,
                    height: `40px`,
                  }}
                />
              ) : (
                <Text>123</Text>
              )}
            </FlexView>
          ))}

          <FlexView
            css={{ height: `40px` }}
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
                    border: `1px solid lightgray`,
                    borderRadius: `4px`,
                    width: `240px`,
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
              <Image />
            )}
          </FlexView>
        </FlexView>

        <Button
          color={Colors.red}
          css={{ width: `160px`, height: `40px`, borderRadius: `4px` }}
          onClick={() => navigate(`/user/secession`)}
        >
          <Text color={Colors.white} medium>
            회원 탈퇴
          </Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
