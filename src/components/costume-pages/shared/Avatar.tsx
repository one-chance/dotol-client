import { useState, useEffect } from 'react';

import { Button, FlexView, Text, Image } from '@components/common';
import { Colors } from '@styles/index';

import RotateButtons from './RotateButtons';

interface AvatarProps {
  character: string | undefined;
  count?: number | any;
  skin?: number;
  equip?: string;
}

type Naked = 'n' | 'y';

export default function Avatar({ character, count, skin, equip }: AvatarProps) {
  const basic = `https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=${character}&is=1`;

  const [direction, setDirecrtion] = useState(2);
  const [isNaked, setIsNaked] = useState<Naked>(`n`);
  const [avatar, setAvatar] = useState(basic);

  const skinColor = skin ? `&sc=${skin}` : ``;
  const equipList = equip ? `&previewEquip=${encodeURI(equip)}` : ``;

  const changeDirection = (_dir: number) => {
    setDirecrtion(_dir);
  };

  useEffect(() => {
    setAvatar(
      `${basic}&changeDir=${direction}&ed=${isNaked}${skinColor}${equipList}`,
    );
  }, [basic, direction, isNaked, skinColor, equipList]);

  return (
    <FlexView
      css={{ border: `1px solid lightgray`, padding: `19px` }}
      gap={16}
      items="center"
    >
      {count !== -1 && (
        <Text color="blue" size="large" weight="semiBold">
          남은 횟수: {count}
        </Text>
      )}

      <RotateButtons
        color="blue"
        selected={direction}
        onClick={changeDirection}
      />

      <FlexView
        color="#EBE7E2"
        css={{ width: `180px`, height: `158px` }}
        center
      >
        {character && (
          <Image css={{ backgroundColor: `#EBE7E2` }} src={avatar} />
        )}
      </FlexView>

      <Text weight="semiBold">{character || `아이디@서버`}</Text>

      <FlexView gap={16} row>
        <Button
          aria-label="벗기"
          color={isNaked === `y` ? `blue` : `transparent`}
          css={{
            width: `60px`,
            height: `36px`,
            border: `1px solid blue`,
          }}
          radius={4}
          onClick={() => setIsNaked(`y`)}
        >
          <Text color={isNaked === `y` ? Colors.white : `blue`}>벗기</Text>
        </Button>
        <Button
          aria-label="입기"
          color={isNaked === `n` ? `blue` : `transparent`}
          css={{
            width: `60px`,
            height: `36px`,
            border: `1px solid blue`,
          }}
          radius={4}
          onClick={() => setIsNaked(`n`)}
        >
          <Text color={isNaked === `n` ? Colors.white : `blue`}>입기</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
}
