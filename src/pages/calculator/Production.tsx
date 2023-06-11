import {
  ProductionCalculator,
  ProductionGrade,
} from '@components/calculator-pages/production';
import { FlexView } from '@components/common';
import { itemState } from '@states/production';
import { useRecoilValue } from 'recoil';

export default () => {
  const item = useRecoilValue(itemState);

  return (
    <FlexView css={{ margin: `40px auto` }} gap={40}>
      <ProductionCalculator />

      <ProductionGrade />
    </FlexView>
  );
};
