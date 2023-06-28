import { FlexView } from '@components/common';
import { PetEquipList } from '@components/db-pages/petEquip';
import { MenuTab } from '@components/layout';
import { PETEQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(580);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : undefined,
        margin: isMobile ? `0 0 20px 0` : `40px auto`,
      }}
      gap={40}
    >
      <MenuTab isMobile={isMobile} menus={PETEQUIP_TABS} />

      <PetEquipList />
    </FlexView>
  );
};
