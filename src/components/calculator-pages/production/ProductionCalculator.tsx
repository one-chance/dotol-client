import { FlexView, Text } from '@components/common';
import { itemState } from '@states/production';
import { useResponsive } from '@utils/hooks';
import { useRecoilValue } from 'recoil';

import ProductionList from './ProductionList';
import ProductionRecipe from './ProductionRecipe';

export default () => {
  const isMobile = useResponsive(600);
  const item = useRecoilValue(itemState);

  return (
    <FlexView css={{ margin: `0 10px` }} gap={20}>
      <Text large={isMobile} xLarge={!isMobile} bold>
        생산 재료 계산기
      </Text>

      <ProductionList />

      <ProductionRecipe item={item} />
    </FlexView>
  );
};
