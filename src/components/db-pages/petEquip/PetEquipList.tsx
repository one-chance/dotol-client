import EQUIP_DATA from '@data/pet-equip.json';
import { CSSObject } from '@emotion/react';

import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

const EQUIP_PARTS = [
  `장비`,
  `방어`,
  `명중`,
  `명회`,
  `방관`,
  `방무`,
  `마증`,
  `마치`,
];

interface PetEquipListProps {
  type: number;
}

export default function PetEquipList({ type }: PetEquipListProps) {
  const isMobile = useResponsive(580);

  const myData = EQUIP_DATA[type];

  const cellCSS: CSSObject = {
    width: isMobile ? `44px` : `70px`,
    textAlign: `center`,
    fontSize: isMobile ? `14px` : `16px`,
    letterSpacing: isMobile ? -1 : 0,
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView
        css={{
          borderLeft: `1px solid lightgray`,
          borderRight: `1px solid lightgray`,
        }}
        wrap
      >
        <FlexView items="center" row>
          {EQUIP_PARTS.map((part, index) => (
            <FlexView
              key={part}
              color="lightgray"
              css={{
                width: isMobile ? `44px` : `70px`,
                height: `36px`,
                ...(index === 0 && { width: isMobile ? `60px` : `90px` }),
                ...(index === 1 && { width: isMobile ? `34px` : `48px` }),
              }}
              center
            >
              <Text
                css={{ letterSpacing: isMobile ? -1 : 0 }}
                size={isMobile ? `small` : `normal`}
                weight="semiBold"
              >
                {part}
              </Text>
            </FlexView>
          ))}
        </FlexView>

        <FlexView>
          {myData.map(data => (
            <FlexView
              key={data.장비}
              color={data.장비.includes(`세트`) ? `pink` : undefined}
              css={{ minHeight: `32px` }}
              items="center"
              row
            >
              <Text css={{ ...cellCSS, width: isMobile ? `60px` : `90px` }}>
                {data.장비}
              </Text>
              <Text css={{ ...cellCSS, width: isMobile ? `34px` : `48px` }}>
                {data.방어}
              </Text>
              <Text css={cellCSS}>{data.명중}</Text>
              <Text css={cellCSS}>{data.명회}</Text>
              <Text css={cellCSS}>{data.방관}</Text>
              <Text css={cellCSS}>{data.방무}</Text>
              <Text css={cellCSS}>{data.마증}</Text>
              <Text css={cellCSS}>{data.마치}</Text>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>

      <Text color={Colors.red} size={isMobile ? `small` : `normal`}>
        ● 괄호 안의 숫자는 강화석으로 올릴 수 있는 최대치입니다.
      </Text>
    </FlexView>
  );
}
