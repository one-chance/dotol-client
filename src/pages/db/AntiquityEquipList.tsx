import { FlexView } from '@components/common';
import { AntiquityEquipList } from '@components/db-pages/antiquityEquip';
import { MenuTab } from '@components/layout';
import { ANTIQUITYEQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(620);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : undefined,
        margin: isMobile ? `0 0 40px 0` : `40px auto`,
      }}
      gap={isMobile ? 20 : 40}
    >
      <MenuTab isMobile={isMobile} menus={ANTIQUITYEQUIP_TABS} />

      <AntiquityEquipList />
    </FlexView>
  );
};
