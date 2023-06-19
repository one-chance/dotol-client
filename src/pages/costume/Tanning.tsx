import { useState } from 'react';

import { Avatar } from '@components/avatar';
import { Chip } from '@components/chip';
import { Button, FlexView, Text } from '@components/common';
import skinList from '@data/tanning.json';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(1000);
  const [skinNumber, setSkinNumber] = useState(-1);

  const changeSkin = (_skin: number) => {
    setSkinNumber(_skin);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        태닝 미리보기
      </Text>

      <FlexView
        gap={32}
        items={isMobile ? `center` : undefined}
        row={!isMobile}
      >
        <Avatar character="협가검@하자" count={40} skin={skinNumber} />

        <FlexView
          content="center"
          css={{
            border: `1px solid lightgray`,
            padding: `20px`,
            maxWidth: `720px`,
          }}
        >
          <FlexView gap={8} row wrap>
            <Button
              color={Colors.red}
              css={{
                borderRadius: `4px`,
                padding: `4px 8px`,
              }}
              onClick={() => changeSkin(-1)}
            >
              <Text color={Colors.white} medium>
                초기화
              </Text>
            </Button>

            {skinList.map(skin => (
              <Button
                key={skin.name}
                color={
                  skin.number === skinNumber ? Colors.primary : Colors.white
                }
                css={{
                  height: `28px`,
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: `4px`,
                  padding: `0 8px`,
                }}
                onClick={() => changeSkin(skin.number)}
              >
                <Text
                  color={
                    skin.number === skinNumber ? Colors.white : Colors.primary
                  }
                >
                  {skin.name}
                </Text>
              </Button>
            ))}
          </FlexView>
        </FlexView>
      </FlexView>

      <Text color="red" css={{ margin: `0 4px` }} small={isMobile} medium>
        * 착용 중인 장비를 벗은 상태로 확인해보세요.
      </Text>
    </FlexView>
  );
};
