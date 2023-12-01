import { ProductionList, ProductionRecipe } from '@components/calculator-pages';
import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function ProductionCalculator() {
  const isMobile = useResponsive(560);

  return (
    <FlexView gap={20}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        생산 재료 계산기
      </Text>

      <ProductionList />

      <ProductionRecipe isMobile={isMobile} />
    </FlexView>
  );
}
