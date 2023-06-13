import { FlexView, Text } from '@components/common';
import {
  PetEquipAccuracy,
  PetEquipList,
  PetEquipRecipe,
} from '@components/db-pages';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(800);

  return (
    <FlexView css={{ margin: `40px auto` }}>
      <FlexView gap={40}>
        {/* <PetEquipAccuracy isMobile={isMobile} /> */}

        <PetEquipList />

        {/* <PetEquipRecipe /> */}
      </FlexView>
    </FlexView>
  );
};
