import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getBodyReinforceAbilityJSON } from '@apis/index';
import { FlexView, Text, Select, Option } from '@components/common';
import { BodyReinforceAbility } from '@components/content-pages';
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

export default function BodyReinforceAbilityPage() {
  const isMobile = useResponsive(610);
  const [part, setPart] = useState(0);

  const { data: abilityList = [] } = useQuery({
    queryKey: [`abilityList`],
    queryFn: () => getBodyReinforceAbilityJSON(),
  });

  const selectPart = (id: number) => {
    setPart(id);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" gap={10} items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          신체강화 능력치
        </Text>

        <Select label={PARTS[part]} width={100}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <BodyReinforceAbility
        isMobile={isMobile}
        list={abilityList[part]?.ability}
      />
    </FlexView>
  );
}
