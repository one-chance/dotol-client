import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

import ProductionList from './ProductionList';
import ProductionRecipe from './ProductionRecipe';

export default () => {
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
};
