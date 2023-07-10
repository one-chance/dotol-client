import { FlexView, Text } from '@components/common';
import { useResponsive } from '@utils/hooks';

import ProductionList from './ProductionList';
import ProductionRecipe from './ProductionRecipe';

export default () => {
  const isMobile = useResponsive(560);

  return (
    <FlexView css={{ margin: isMobile ? `0 10px` : undefined }} gap={20}>
      <Text large={isMobile} xLarge={!isMobile} bold>
        생산 재료 계산기
      </Text>

      <ProductionList />

      <ProductionRecipe isMobile={isMobile} />
    </FlexView>
  );
};
