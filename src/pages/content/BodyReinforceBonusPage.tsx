import { useState } from 'react';
import { FlexView, Option, Select, Text } from '@components/common';
import { BonusList } from '@components/content-pages';
import { useResponsive } from '@hooks/index';

const PARTS = [
  `무기`,
  `갑옷`,
  `투구`,
  `왼손`,
  `오른손`,
  `목/어깨`,
  `신발`,
  `망토`,
];

export default function BodyReinforceBonusPage() {
  const isMobile = useResponsive(610);
  const [part, setPart] = useState(0);

  const selectPart = (index: number) => {
    setPart(index);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" row items="center">
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신체강화 보너스
        </Text>

        <Select label={PARTS[part]} width={100}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <BonusList isMobile={isMobile} part={part} />
    </FlexView>
  );
}
