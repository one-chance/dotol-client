import { useState, useEffect } from 'react';

import { Avatar } from '@components/avatar';
import { Button, FlexView, Text } from '@components/common';
import skinList from '@data/skinList.json';
import { Colors } from '@styles/system';

export default () => {
  const basic = `https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=협가검@하자&is=1`;
  const [skinNumber, setSkinNumber] = useState(-1);
  const [avatar, setAvatar] = useState(basic);

  const changeSkin = (_skin: number) => {
    setSkinNumber(_skin);
  };

  useEffect(() => {
    setAvatar(`${basic}&sc=${skinNumber}`);
  }, [basic, skinNumber]);

  return (
    <FlexView css={{ maxWidth: `1400px` }} gap={32} row>
      <Avatar character="협가검@하자" src={avatar} />

      <FlexView
        css={{ border: `1px solid lightgray`, padding: `20px` }}
        gap={24}
      >
        <Text bold center xLarge>
          태닝 목록
        </Text>

        <FlexView gap={8} row wrap>
          {skinList.map(skin => (
            <Button
              key={skin.name}
              css={{
                border: `1px solid blue`,
                borderRadius: `4px`,
                padding: `4px`,
              }}
              onClick={() => changeSkin(skin.number)}
            >
              <Text>{skin.name}</Text>
            </Button>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
