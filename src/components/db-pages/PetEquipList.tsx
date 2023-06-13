import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import EQUIP_DATA from '@data/pet-equip.json';
import { CSSObject } from '@emotion/react';
import { useResponsive } from '@utils/hooks';

const EQUIP_TYPES = [
  `황룡 장비`,
  `청룡 장비`,
  `주작 장비`,
  `백호 장비`,
  `현무 장비`,
  `공통 장비`,
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
  const isMobile = useResponsive(580);
  const [selectedType, setSelectedType] = useState(0);
  const myData = EQUIP_DATA[selectedType];

  const cellCSS: CSSObject = {
    width: isMobile ? `44px` : `70px`,
    textAlign: `center`,
    fontSize: isMobile ? `14px` : `16px`,
    letterSpacing: isMobile ? -1 : 0,
  };

  const selectType = (idx: number) => {
    setSelectedType(idx);
  };

  return (
    <FlexView gap={20}>
      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 10px` : 0 }}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} semiBold>
          환수 장비 도감
        </Text>

        <Select name={EQUIP_TYPES[selectedType]} width={isMobile ? 120 : 160}>
          <Option
            selected={EQUIP_TYPES[selectedType]}
            values={EQUIP_TYPES}
            onSelect={selectType}
          />
        </Select>
      </FlexView>

      <FlexView css={{ border: `1px solid lightgray` }} wrap>
        <FlexView items="center" row>
          {EQUIP_PARTS.map((part, index) => (
            <FlexView
              key={part}
              color="lightgray"
              css={{
                width: isMobile ? `44px` : `70px`,
                height: `36px`,
                ...(index === 0 && { width: isMobile ? `68px` : `90px` }),
                ...(index === 1 && { width: isMobile ? `28px` : `48px` }),
              }}
              center
            >
              <Text
                css={{ letterSpacing: isMobile ? -1 : 0 }}
                small={isMobile}
                semiBold
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
              <Text css={{ ...cellCSS, width: isMobile ? `68px` : `90px` }}>
                {data.장비}
              </Text>
              <Text css={{ ...cellCSS, width: isMobile ? `28px` : `48px` }}>
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

      <Text color="blue" css={{ letterSpacing: -0.5 }} small={isMobile}>
        * 괄호 안의 숫자는 강화석으로 올릴 수 있는 최대치입니다.
      </Text>
    </FlexView>
  );
};
