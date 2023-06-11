import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import DATA from '@data/pet-equip.json';
import { CSSObject } from '@emotion/react';
import { useResponsive } from '@utils/hooks';

const EQUIP_TYPES = [
  `황룡 장비`,
  `청룡 장비`,
  `주작 장비`,
  `백호 장비`,
  `현무 장비`,
  `공통 장비`,
  `강화 재료`,
];

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

export default () => {
  const isMobile = useResponsive(600);
  const [selectedType, setSelectedType] = useState(0);
  const myData = DATA[selectedType];

  const cellCSS: CSSObject = {
    width: isMobile ? `54px` : `64px`,
    textAlign: `center`,
    fontSize: isMobile ? `14px` : `16px`,
  };

  const selectType = (idx: number) => {
    setSelectedType(idx);
  };

  return (
    <FlexView gap={8}>
      <FlexView content="between" items="center" row>
        <Text semiBold xxLarge>
          환수 장비 도감
        </Text>

        <Select name={EQUIP_TYPES[selectedType]} width={160}>
          <Option
            selected={EQUIP_TYPES[selectedType]}
            values={EQUIP_TYPES}
            onSelect={selectType}
          />
        </Select>
      </FlexView>

      <FlexView
        css={{
          border: `1px solid lightgray`,
          minWidth: `500px`,
          overflowX: `auto`,
        }}
      >
        <FlexView items="center" row>
          {EQUIP_PARTS.map((part, index) => (
            <FlexView
              key={part}
              color="lightgray"
              css={{ width: index === 0 ? `80px` : `64px`, height: `36px` }}
              center
            >
              <Text semiBold>{part}</Text>
            </FlexView>
          ))}
        </FlexView>

        <FlexView>
          {myData.map((data, index) => (
            <FlexView
              key={data.장비}
              color={data.장비.includes(`세트`) ? `pink` : undefined}
              css={{ minHeight: `32px` }}
              items="center"
              row
            >
              <Text css={{ ...cellCSS, width: `80px` }}>{data.장비}</Text>
              <Text css={cellCSS}>{data.방어}</Text>
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
    </FlexView>
  );
};
