import {
  ProductionCalculator,
  ProductionGrade,
} from '@components/calculator-pages/production';
import { FlexView } from '@components/common';

export default () => (
  <FlexView css={{ margin: `40px auto` }} gap={40}>
    <ProductionCalculator />

    <ProductionGrade />
  </FlexView>
);
