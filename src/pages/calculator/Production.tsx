import {
  ProductionCalculator,
  ProductionGrade,
} from '@components/calculator-pages/production';
import { FlexView } from '@components/common';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(560);

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={40}>
      <ProductionCalculator />

      <ProductionGrade />
    </FlexView>
  );
};
