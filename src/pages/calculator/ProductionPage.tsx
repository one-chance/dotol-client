
import {
  ProductionCalculator,
  ProductionGrade,
} from '@components/calculator-pages';
import { FlexView } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function ProductionPage() {
  const isMobile = useResponsive(560);

  return (
    <FlexView
      css={{
        maxWidth: isMobile ? `100%` : `960px`,
        margin: `0 auto`,
      }}
      gap={40}
    >
      <ProductionCalculator />

      <ProductionGrade />
    </FlexView>
  );
}
