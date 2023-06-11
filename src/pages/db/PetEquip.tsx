import { FlexView, Text } from '@components/common';
import { PetEquipAccuracy, PetEquipList } from '@components/db-pages';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(800);

  return (
    <FlexView css={{ margin: `40px auto`, padding: `0 10px` }}>
      <FlexView gap={40}>
        {/* <PetEquipAccuracy isMobile={isMobile} /> */}

        <PetEquipList />
      </FlexView>
    </FlexView>
  );
};
