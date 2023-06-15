import { useState, useEffect } from 'react';

import { Avatar } from '@components/avatar';
import { Chip } from '@components/chip';
import { Button, FlexView, Text } from '@components/common';
import skinList from '@data/tanning.json';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(1000);
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
    <FlexView css={{ margin: `40px auto` }}>
      <FlexView
        gap={32}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar character="협가검@하자" count={40} src={avatar} />

        <FlexView
          css={{
            border: `1px solid lightgray`,
            padding: `20px`,
            maxWidth: `720px`,
          }}
          gap={24}
        >
          <Text large={isMobile} xLarge={!isMobile} bold center>
            태닝 목록
          </Text>

          <FlexView gap={8} row wrap>
            <Button
              css={{
                border: `1px solid red`,
                borderRadius: `4px`,
                padding: `4px 8px`,
              }}
              onClick={() => setSkinNumber(-1)}
            >
              <Text color={Colors.red}>초기화</Text>
            </Button>
            {skinList.map(skin => (
              <Chip
                key={skin.name}
                radius={4}
                text={skin.name}
                clickable
                onClick={() => changeSkin(skin.number)}
              />
            ))}
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
