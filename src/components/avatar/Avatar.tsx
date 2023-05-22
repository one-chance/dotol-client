import { useState, useEffect } from 'react';

import { Button, FlexView, Text, Image } from '@components/common';
import { Colors } from '@styles/system';

import RotateButtons from './RotateButtons';

interface AvatarProps {
  src: string;
  character: string;
}

export default ({ src, character }: AvatarProps) => {
  const [direction, setDirecrtion] = useState(2);
  const [naked, setNaked] = useState<'N' | 'Y'>(`N`);
  const [avatar, setAvatar] = useState(src);

  const changeDirection = (_dir: number) => {
    setDirecrtion(_dir);
  };

  useEffect(() => {
    setAvatar(`${src}&changeDir=${direction}&ed=${naked}`);
  }, [src, direction, naked]);

  return (
    <FlexView
      css={{ border: `1px solid lightgray`, padding: `20px` }}
      gap={16}
      items="center"
      fit
    >
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

      <FlexView gap={16} row>
        <Button
          color={naked === `Y` ? `blue` : `transparent`}
          css={{
            width: `60px`,
            height: `40px`,
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
            height: `40px`,
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
