import { FlexView } from '@components/common';
import {
  AntiquityEquipList,
  AntiquityEquipRecipe,
} from '@components/db-pages/antiquityEquip';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(620);

  return (
    <FlexView
      css={{
        margin: isMobile ? `20px auto` : `40px auto`,
        padding: isMobile ? `0 4px` : `01 0`,
      }}
      gap={40}
    >
      <AntiquityEquipList />

      <AntiquityEquipRecipe />
    </FlexView>
  );
};
