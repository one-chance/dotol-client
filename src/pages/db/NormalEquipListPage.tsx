import { FlexView } from '@components/common';
import { NormalEquipList } from '@components/db-pages';
import { MenuTab } from '@components/layout';
import { NORMAL_EQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';

const NormalEquipListPage = () => {
  const isMobile = useResponsive(960);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      gap={40}
    >
      <MenuTab isMobile={isMobile} menus={NORMAL_EQUIP_TABS} />

      <NormalEquipList />
    </FlexView>
  );
};

export default NormalEquipListPage;
