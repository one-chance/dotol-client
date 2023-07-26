import { useEffect, useState } from 'react';

import {
  deleteCharacter,
  getCharacterList,
  registerCharacter,
  updateMainCharacter,
} from '@apis/characters';
import { getMyInfo } from '@apis/users';
import {
  Button,
  FlexView,
  Input,
  Image,
  Text,
  Divider,
} from '@components/common';
import { Colors } from '@styles/system';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(510);
  const queryClient = useQueryClient();
  const [newCharacter, setNewCharacter] = useState(``);
  const [mainCharacter, setMainCharacter] = useState(``);

  const { data: characterList } = useQuery(
    [`characterList`],
    () => getCharacterList().then(res => res.data),
    { initialData: [] },
  );

  const addCharacter = useMutation(() => registerCharacter(newCharacter), {
    onSuccess: res => {
      if (res.statusCode === 200) {
        queryClient.invalidateQueries([`characterList`]);
      } else if (res.statusCode === 400) {
        alert(res.message);
      }
    },
  });

  const changeMainCharacter = useMutation(updateMainCharacter, {
    onSuccess: res => {
      if (res.statusCode === 200) {
        window.location.reload();
      }
    },
  });

  const removeCharacter = useMutation(deleteCharacter, {
    onSuccess: res => {
      if (res.statusCode === 200) {
        queryClient.invalidateQueries([`characterList`]);
      } else if (res.statusCode === 400) {
        alert(res.message);
      }
    },
  });

  const inputCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCharacter(e.target.value);
  };

  useEffect(() => {
    getMyInfo().then(res => {
      if (res.statusCode === 200) {
        setMainCharacter(res.data.mainCharacter);
      }
    });
  }, []);

  return (
    <FlexView css={{ margin: isMobile ? `40px auto` : `auto` }}>
      <FlexView
        css={{
          padding: isMobile ? `10px` : `40px`,
          border: isMobile ? undefined : `1px solid lightgray`,
          borderRadius: `4px`,
        }}
      >
        <FlexView gap={20}>
          <Text bold center xLarge>
            캐릭터 인증
          </Text>

          <FlexView gap={16}>
            <FlexView>
              <Image
                css={{ maxWidth: isMobile ? `320px` : `420px` }}
                src="/auth.png"
              />
            </FlexView>
            <FlexView gap={4}>
              <Text color={Colors.red}>
                1) 인증할 캐릭터의 호패 인사말에 도톨 ID를 저장하세요.
              </Text>
              <Text color={Colors.red}>
                2) 아래에 캐릭터@서버를 입력하고 인증 버튼을 누르세요.
              </Text>
              <Text color={Colors.red}>
                3) 인증이 완료되면 보안을 위해 인사말의 ID를 지워주세요.
              </Text>
            </FlexView>

            <FlexView content="center" gap={4} items="center" row>
              <Input
                aria-label="캐릭터@서버"
                placeholder="캐릭터@서버"
                value={newCharacter || ``}
                width={isMobile ? 160 : 240}
                center
                onChange={inputCharacter}
                onKeyDown={e => {
                  if (e.key === `Enter`) addCharacter.mutate();
                }}
              />

              <Button
                aria-label="인증"
                color={Colors.primary}
                css={{ width: `60px`, minHeight: `36px` }}
                radius={4}
                onClick={() => addCharacter.mutate()}
              >
                <Text color={Colors.white}>인증</Text>
              </Button>
            </FlexView>
          </FlexView>
        </FlexView>

        <Divider color="lightgray" margin={40} />

        <FlexView
          css={{ padding: isMobile ? `0 10px` : `0 20px` }}
          gap={isMobile ? 10 : 20}
        >
          <Text bold center xLarge>
            캐릭터 목록
          </Text>

          {characterList?.length === 0 && (
            <FlexView css={{ minHeight: `40px` }} center>
              <Text color={Colors.grey} semiBold>
                인증된 캐릭터가 없습니다.
              </Text>
            </FlexView>
          )}

          {characterList?.map((name: string, index: number) => (
            <FlexView key={name} content="between" gap={20} items="center" row>
              <FlexView gap={4} items="center" row>
                <Text semiBold>{name}</Text>
                {mainCharacter === name && <Text>대표</Text>}
              </FlexView>
              <FlexView gap={8} items="center" row>
                <Button
                  aria-label="대표 변경"
                  border="black"
                  css={{ width: `72px`, height: `30px` }}
                  radius={4}
                  onClick={() =>
                    changeMainCharacter.mutate(characterList[index])
                  }
                >
                  <Text small>대표 변경</Text>
                </Button>
                <Button
                  aria-label="삭제"
                  border={Colors.red}
                  css={{ width: `40px`, height: `30px` }}
                  radius={4}
                  onClick={() => removeCharacter.mutate(characterList[index])}
                >
                  <Text color={Colors.red} small>
                    삭제
                  </Text>
                </Button>
              </FlexView>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
