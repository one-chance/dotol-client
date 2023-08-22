import { FlexView } from '@components/common';
import { ClothList } from '@components/costume-pages';
import { MenuTab } from '@components/layout';
import { COSTUME_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(960);

  return (
    <FlexView
      css={{ margin: isMobile ? `0 auto 20px auto` : `60px auto` }}
      gap={isMobile ? 20 : 40}
    >
      <MenuTab isMobile={isMobile} menus={COSTUME_TABS} />

      <ClothList />
    </FlexView>
  );
};
