import { FlexView } from '@components/common';
import { PetEquipAccuracy } from '@components/db-pages/petEquip';
import { MenuTab } from '@components/layout';
import { PETEQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(580);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : undefined,
        margin: isMobile ? `0 0 40px 0` : `40px auto`,
      }}
      gap={isMobile ? 20 : 40}
    >
      <MenuTab isMobile={isMobile} menus={PETEQUIP_TABS} />

      <PetEquipAccuracy />
    </FlexView>
  );
};
