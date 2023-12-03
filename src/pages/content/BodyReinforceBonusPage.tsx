import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getBodyReinforceBonusJSON } from '@apis/content';
import { FlexView, Option, Select, Text } from '@components/common';
import { BodyReinforceBonus } from '@components/content-pages';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

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

  const { data: bonusList = [] } = useQuery({
    queryKey: [`bonusList`],
    queryFn: () => getBodyReinforceBonusJSON(),
  });

  const selectPart = (index: number) => {
    setPart(index);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          신체강화 보너스
        </Text>

        <Select label={PARTS[part]} width={100}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <FlexView gap={10}>
        <BodyReinforceBonus isMobile={isMobile} list={bonusList[part]?.bonus} />

        <Text color={Colors.red} size="small">
          ● 선택한 능력 강화에 따라 보너스 능력치가 결정됩니다.
        </Text>
      </FlexView>
    </FlexView>
  );
}
