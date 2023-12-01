import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { registerCharacter } from '@apis/index';
import {
  Button,
  FlexView,
  Image,
  Input,
  Text,
  Select,
  Option,
} from '@components/common';
import { toastState } from '@states/index';
import { Colors } from '@styles/index';

interface AuthCharacterProps {
  isMobile: boolean;
}

const SERVERS = [`연`, `유리`, `무휼`, `하자`, `호동`, `진`];

export default function AuthCharacter({ isMobile }: AuthCharacterProps) {
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastState);

  const [name, setName] = useState(``);
  const [server, setServer] = useState(SERVERS[0]);

  const inputCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = e.target.value;
    if (temp.length > 6) return;

    setName(temp.replace(/\s/g, ``));
  };

  const selectServer = (id: number) => {
    setServer(SERVERS[id]);
  };

  const addCharacter = useMutation({
    mutationFn: registerCharacter,
    onSuccess: res => {
      if (res.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: [`characterList`] });
      } else if (res.statusCode === 400) {
        setToast({ open: true, message: res.message, type: `error` });
      }
    },
  });

  return (
    <FlexView
      border="lightgray"
      css={{ padding: `20px 10px` }}
      gap={16}
      radius={4}
    >
      <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
        캐릭터 인증
      </Text>

      <Image css={{ width: `328px`, height: `115px` }} src="/auth.png" />

      <FlexView gap={4}>
        <Text color={Colors.red} css={{ lineHeight: `150%` }} size="small">
          1) 인증할 캐릭터의 호패 인사말에 도톨ID 저장하기
          <br />
          2) 아래 캐릭터명과 서버를 입력하고 인증버튼 누르기
          <br />
          3) 인증에 성공하면 캐릭터 목록에 추가완료
        </Text>
      </FlexView>

      <FlexView content="center" gap={8} items="center" row>
        <Input
          aria-label="캐릭터명"
          placeholder="캐릭터명"
          value={name}
          width={140}
          center
          onChange={inputCharacterName}
        />

        <Select height={36} label={server} width={80}>
          <Option selected={server} values={SERVERS} onSelect={selectServer} />
        </Select>
      </FlexView>

      <Button
        aria-label="인증"
        color={Colors.primary}
        css={{ height: `36px` }}
        disabled={name.length === 0}
        radius={4}
        onClick={() => addCharacter.mutate(`${name}@${server}`)}
      >
        <Text color={Colors.white} weight="semiBold">
          인증하기
        </Text>
      </Button>
    </FlexView>
  );
}
