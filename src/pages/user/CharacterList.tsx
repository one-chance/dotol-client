import { useEffect, useState } from 'react';

import {
  deleteCharacter,
  getCharacterList,
  registerCharacter,
  updateMainCharacter,
} from '@apis/characters';
import {
  Button,
  FlexView,
  Input,
  Image,
  Text,
  Divider,
} from '@components/common';
import { userInfoState } from '@states/login';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';
import { useRecoilValue } from 'recoil';

export default () => {
  const isMobile = useResponsive(510);
  const mainCharacter = useRecoilValue(userInfoState).character;
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(``);

  const inputCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  const addCharacter = () => {
    if (character === ``) return;

    registerCharacter(character).then(res => {
      if (res.statusCode === 200) {
        window.location.reload();
      } else if (res.statusCode === 400) {
        alert(res.message);
      }
    });
  };

  const changeMainCharacter = (id: number) => {
    updateMainCharacter(characters[id]).then(res => {
      if (res.statusCode === 200) {
        window.location.reload();
      }
    });
  };

  const removeCharacter = (id: number) => {
    deleteCharacter(characters[id]).then(res => {
      if (res.statusCode === 200) {
        window.location.reload();
      } else if (res.statusCode === 400) {
        alert(res.message);
      }
    });
  };

  useEffect(() => {
    getCharacterList().then(res => {
      if (res.statusCode === 200) {
        setCharacters(res.data);
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
                ① 인증할 캐릭터의 호패 인사말에 도톨 ID를 저장하세요.
              </Text>
              <Text color={Colors.red}>
                ② 아래에 캐릭터@서버를 입력하고 인증 버튼을 누르세요.
              </Text>
            </FlexView>

            <FlexView content="center" gap={4} items="center" row>
              <Input
                placeholder="캐릭터@서버"
                value={character || ``}
                width={isMobile ? 160 : 240}
                center
                onChange={inputCharacter}
                onKeyDown={e => {
                  if (e.key === `Enter`) addCharacter();
                }}
              />

              <Button
                color={Colors.primary}
                css={{ width: `60px`, minHeight: `36px` }}
                radius={4}
                onClick={addCharacter}
              >
                <Text color={Colors.white}>인증</Text>
              </Button>
            </FlexView>
          </FlexView>
        </FlexView>

        <Divider color="lightgray" margin={40} />

        <FlexView css={{ padding: `0 20px` }} gap={20}>
          <Text bold center xLarge>
            캐릭터 목록
          </Text>

          {characters?.length === 0 && (
            <FlexView css={{ minHeight: `40px` }} center>
              <Text color={Colors.grey} semiBold>
                인증된 캐릭터가 없습니다.
              </Text>
            </FlexView>
          )}

          {characters?.map((name, index) => (
            <FlexView key={name} content="between" gap={20} items="center" row>
              <FlexView gap={4} items="center" row>
                <Text semiBold>{name}</Text>
                {mainCharacter === name && <Text>대표</Text>}
              </FlexView>
              <FlexView gap={8} items="center" row>
                <Button
                  border="black"
                  css={{ width: `40px`, height: `30px` }}
                  radius={4}
                  onClick={() => changeMainCharacter(index)}
                >
                  <Text small>대표</Text>
                </Button>
                <Button
                  border={Colors.red}
                  css={{ width: `40px`, height: `30px` }}
                  radius={4}
                  onClick={() => removeCharacter(index)}
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
