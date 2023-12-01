import { useState } from 'react';


import { FlexView, Option, Select, Text } from '@components/common';
import { RecipeList } from '@components/content-pages';
import { useResponsive } from '@hooks/index';

const PARTS = [`무기 ~ 오른손`, `목/어깨`, `신발, 망토`];

export default function BodyReinforceRecipePage() {
  const isMobile = useResponsive(510);
  const [part, setPart] = useState(0);

  const selectPart = (index: number) => {
    setPart(index);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          신체강화 재료
        </Text>

        <Select isMobile={isMobile} label={PARTS[part]} width={120}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <RecipeList isMobile={isMobile} part={part} />
    </FlexView>
  );
}
