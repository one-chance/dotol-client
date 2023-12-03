import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getBodyReinforceRecipeJSON } from '@apis/content';
import { FlexView, Option, Select, Text } from '@components/common';
import { BodyReinforceRecipe } from '@components/content-pages';
import { useResponsive } from '@hooks/index';

const PARTS = [`무기 ~ 오른손`, `목/어깨`, `신발 ~ 망토`];

export default function BodyReinforceRecipePage() {
  const isMobile = useResponsive(510);
  const [part, setPart] = useState(0);

  const { data: recipeList = [] } = useQuery({
    queryKey: [`recipeList`],
    queryFn: () => getBodyReinforceRecipeJSON(),
  });

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

      <BodyReinforceRecipe
        isMobile={isMobile}
        list={recipeList[part]?.recipe}
      />
    </FlexView>
  );
}
