import {
  ProductionList,
  ProductionRecipe,
  ProductionGrade,
} from '@components/calculator-pages/production';
import { FlexView, Text } from '@components/common';
import { itemState } from '@states/production';
import { useRecoilValue } from 'recoil';

export default () => {
  const item = useRecoilValue(itemState);

  return (
    // <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
    <FlexView css={{ margin: `40px auto` }}>
      <FlexView gap={20}>
        <Text bold xLarge>
          생산 재료 계산기
        </Text>

        {/* <ProductionList /> */}

        <ProductionRecipe item={item} />
      </FlexView>

      <FlexView gap={20}>
        <Text bold xLarge>
          생산 단계업 재료
        </Text>

        <ProductionGrade />
      </FlexView>
    </FlexView>
  );
};
