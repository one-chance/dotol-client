import { FlexView } from '@components/common';
import {
  ProductionCalculator,
  ProductionGrade,
} from '@components/calculator-pages';
import { useResponsive } from '@hooks/index';

const ProductionPage = () => {
  const isMobile = useResponsive(560);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      gap={40}
      items="center"
    >
      <ProductionCalculator />

      <ProductionGrade />
    </FlexView>
  );
};

export default ProductionPage;
