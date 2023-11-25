import { PetEquipRecipe } from '@components/db-pages';
import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function PetEquipRecipePage() {
  const isMobile = useResponsive(580);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text large={isMobile} xLarge={!isMobile} bold>
        환수장비 강화재료
      </Text>

      <PetEquipRecipe />
    </FlexView>
  );
}
