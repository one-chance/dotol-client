import { useState, useEffect } from 'react';

import { FlexView, Text, Image } from '@components/common';

import RotateButtons from './RotateButtons';

interface AvatarProps {
  equip: string;
  character: string;
}

export default ({ equip, character }: AvatarProps) => {
  const basic = `https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=${character}&is=1&ed=Y`;
  const [direction, setDirecrtion] = useState(2);
  const [avatar, setAvatar] = useState(basic);

  const changeDirection = (_dir: number) => {
    setDirecrtion(_dir);
  };

  useEffect(() => {
    setAvatar(
      `${basic}&changeDir=${direction}${equip ? `&previewEquip=${equip}` : ``}`,
    );
  }, [basic, equip, direction]);

  return (
    <FlexView css={{ padding: `20px` }} gap={16} items="center">
      <RotateButtons
        color="blue"
        selected={direction}
        onClick={changeDirection}
      />

      <FlexView
        color="#E6E5E5"
        css={{ width: `180px`, height: `158px` }}
        center
      >
        <Image src={avatar} />
      </FlexView>

      <Text semiBold>{character}</Text>
    </FlexView>
  );
};
