import { PetEquipAccuracy } from '@components/db-pages/petEquip';

import { FlexView } from '@components/common';
import { MenuTab } from '@components/layout';
import { PET_EQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';

export default () => {
  const isMobile = useResponsive(580);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={isMobile ? 20 : 40}>
        <MenuTab isMobile={isMobile} menus={PET_EQUIP_TABS} />

        <PetEquipAccuracy />
      </FlexView>
    </FlexView>
  );
};
