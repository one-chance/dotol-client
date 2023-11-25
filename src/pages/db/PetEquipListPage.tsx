import { useState } from 'react';
import { PetEquipList } from '@components/db-pages';
import { FlexView, Option, Select, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

const EQUIP_TYPES = [
  `황룡 장비`,
  `청룡 장비`,
  `주작 장비`,
  `백호 장비`,
  `현무 장비`,
  `공통 장비`,
];

export default function PetEquipListPgae() {
  const isMobile = useResponsive(580);
  const [type, setType] = useState(0);

  const selectType = (idx: number) => {
    setType(idx);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row>
        <Text large={isMobile} xLarge={!isMobile} bold>
          환수장비 도감
        </Text>

        <Select label={EQUIP_TYPES[type]} width={isMobile ? 120 : 140}>
          <Option
            selected={EQUIP_TYPES[type]}
            values={EQUIP_TYPES}
            onSelect={selectType}
          />
        </Select>
      </FlexView>

      <PetEquipList type={type} />
    </FlexView>
  );
}
