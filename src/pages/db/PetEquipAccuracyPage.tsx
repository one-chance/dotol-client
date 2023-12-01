
import { FlexView, Text } from '@components/common';
import { PetEquipAccuracy } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

export default function PetEquipAccuracyPage() {
  const isMobile = useResponsive(580);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        환수장비 - 명중률
      </Text>

      <PetEquipAccuracy />
    </FlexView>
  );
}
