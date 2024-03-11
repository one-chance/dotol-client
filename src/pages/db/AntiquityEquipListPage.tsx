import { useState } from 'react';

import { FlexView, Option, Select, Text } from '@components/common';
import { AntiquityEquipList } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];

export default function AntiquityEquipListPage() {
  const isMobile = useResponsive(620);
  const [part, setPart] = useState(EQUIP_PARTS[0]);

  const selectPart = (index: number) => {
    setPart(EQUIP_PARTS[index]);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          신수유물 목록
        </Text>

        <Select label={part} width={100}>
          <Option selected={part} values={EQUIP_PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <AntiquityEquipList part={part} />
    </FlexView>
  );
}
