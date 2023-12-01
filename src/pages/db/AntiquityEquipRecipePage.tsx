import { useState } from 'react';


import { FlexView, Option, Select, Text } from '@components/common';
import { AntiquityEquipRecipe } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];

export default function AntiquityEquipRecipePage() {
  const isMobile = useResponsive(620);
  const [part, setPart] = useState(0);

  const selectPart = (id: number) => {
    setPart(id);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          신수유물 재료
        </Text>

        <Select label={EQUIP_PARTS[part]} width={100}>
          <Option
            selected={EQUIP_PARTS[part]}
            values={EQUIP_PARTS}
            onSelect={selectPart}
          />
        </Select>
      </FlexView>

      <AntiquityEquipRecipe part={part} />
    </FlexView>
  );
}
