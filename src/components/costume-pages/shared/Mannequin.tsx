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

  const equipList = equip ? `&previewEquip=${encodeURI(equip)}` : ``;

  const changeDirection = (_dir: number) => {
    setDirecrtion(_dir);
  };

  useEffect(() => {
    setAvatar(`${basic}&changeDir=${direction}${equipList}`);
  }, [basic, equipList, direction]);

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
        {character && <Image src={avatar} />}
      </FlexView>

      <Text weight="semiBold">{character || `아이디@서버`}</Text>
    </FlexView>
  );
};
