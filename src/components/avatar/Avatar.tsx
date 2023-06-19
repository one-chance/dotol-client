import { useState, useEffect } from 'react';

import { Button, FlexView, Text, Image } from '@components/common';
import { Colors } from '@styles/system';

import RotateButtons from './RotateButtons';

interface AvatarProps {
  character: string;
  count: number;
  skin?: number;
  equip?: string;
}

export default ({ character, count, skin, equip }: AvatarProps) => {
  const basic = `https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=${character}&is=1`;

  const [direction, setDirecrtion] = useState(2);
  const [naked, setNaked] = useState<'N' | 'Y'>(`N`);
  const [avatar, setAvatar] = useState(basic);

  const skinColor = skin ? `&sc=${skin}` : ``;
  const equipList = equip ? `&previewEquip=${equip}` : ``;

  const changeDirection = (_dir: number) => {
    setDirecrtion(_dir);
  };

  useEffect(() => {
    setAvatar(
      `${basic}&changeDir=${direction}&ed=${naked}${skinColor}${equipList}`,
    );
  }, [basic, direction, naked, skinColor, equipList]);

  return (
    <FlexView
      css={{ border: `1px solid lightgray`, padding: `19px` }}
      gap={16}
      items="center"
    >
      <Text color="blue" large semiBold>
        잔여: {count}
      </Text>

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
        <Image css={{ backgroundColor: `#EBE7E2` }} src={avatar} />
      </FlexView>

      <Text semiBold>{character}</Text>

      <FlexView gap={16} row>
        <Button
          color={naked === `Y` ? `blue` : `transparent`}
          css={{
            width: `60px`,
            height: `36px`,
            border: `1px solid blue`,
            borderRadius: `4px`,
          }}
          onClick={() => setNaked(`Y`)}
        >
          <Text color={naked === `Y` ? Colors.white : `blue`}>벗기</Text>
        </Button>
        <Button
          color={naked === `N` ? `blue` : `transparent`}
          css={{
            width: `60px`,
            height: `36px`,
            border: `1px solid blue`,
            borderRadius: `4px`,
          }}
          onClick={() => setNaked(`N`)}
        >
          <Text color={naked === `N` ? Colors.white : `blue`}>입기</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
