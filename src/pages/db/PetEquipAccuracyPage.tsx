import { FlexView, Text } from '@components/common';
import { PetEquipAccuracy } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

export default function PetEquipAccuracyPage() {
  const isMobile = useResponsive(580);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text large={isMobile} xLarge={!isMobile} bold>
        환수 명중률 계산기
      </Text>

      <PetEquipAccuracy />
    </FlexView>
  );
}
