import { useEffect, useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { deleteCharacter, updateMainCharacter, getMyInfo } from '@apis/index';
import { Button, FlexView, Icon, Text } from '@components/common';
import { toastState } from '@states/index';
import { Colors } from '@styles/index';

interface CharacterListProps {
  isMobile: boolean;
  list: string[];
}

export default function CharacterList({ isMobile, list }: CharacterListProps) {
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastState);
  const [mainCharacter, setMainCharacter] = useState(``);

  const changeMainCharacter = (character: string) => {
    updateMainCharacter(character).then(res => {
      if (res.statusCode === 200) {
        getMyInfo().then(res => setMainCharacter(res.data.mainCharacter));
        setToast({
          open: true,
          message: `대표 캐릭터가 변경되었습니다.`,
          type: `success`,
        });
      }
    });
  };

  const removeCharacter = useMutation({
    mutationFn: deleteCharacter,
    onSuccess: res => {
      if (res.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: [`characterList`] });
        setToast({
          open: true,
          message: `캐릭터가 삭제되었습니다.`,
          type: `success`,
        });
      } else if (res.statusCode === 400) {
        setToast({
          open: true,
          message: `대표 캐릭터는 삭제할 수 없습니다.`,
          type: `error`,
        });
      }
    },
  });

  useEffect(() => {
    getMyInfo().then(res => setMainCharacter(res.data.mainCharacter));
  }, []);

  return (
    <FlexView
      border="lightgray"
      css={{ minWidth: `350px`, padding: `20px` }}
      gap={20}
      radius={4}
    >
      <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
        캐릭터 목록
      </Text>

      {list?.length === 0 ? (
        <FlexView center fill>
          <Text size="large">캐릭터를 인증해주세요.</Text>
        </FlexView>
      ) : (
        list?.map((name: string) => (
          <FlexView key={name} content="between" items="center" row>
            <FlexView gap={4} items="center" row>
              <Text weight="semiBold">{name}</Text>
              {mainCharacter === name && (
                <Icon color={Colors.purple} name="crown" size={16} />
              )}
            </FlexView>

            <FlexView gap={8} items="center" row>
              <Button
                aria-label="대표 변경"
                border="black"
                css={{ width: `72px`, height: `30px` }}
                disabled={mainCharacter === name}
                radius={4}
                onClick={() => changeMainCharacter(name)}
              >
                <Text size="small">대표 변경</Text>
              </Button>
              <Button
                aria-label="삭제"
                border={Colors.red}
                css={{ width: `40px`, height: `30px` }}
                radius={4}
                onClick={() => removeCharacter.mutate(name)}
              >
                <Text color={Colors.red} size="small">
                  삭제
                </Text>
              </Button>
            </FlexView>
          </FlexView>
        ))
      )}
    </FlexView>
  );
}
