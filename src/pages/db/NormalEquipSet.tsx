import { FlexView } from '@components/common';
import { NormalEquipSet } from '@components/db-pages';
import { MenuTab } from '@components/layout';
import { NORMAL_EQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(980);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `0 0 40px 0` : `40px auto`,
      }}
      gap={40}
    >
      <MenuTab isMobile={isMobile} menus={NORMAL_EQUIP_TABS} />

      <NormalEquipSet />
    </FlexView>
  );
};
