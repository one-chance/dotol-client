import { FlexView } from '@components/common';
import { LuxuryList } from '@components/costume-pages';
import { MenuTab } from '@components/layout';
import { COSTUME_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';

export default function LuxuryListPage() {
  const isMobile = useResponsive(960);

  return (
    <FlexView
      css={{
        width: `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      gap={isMobile ? 20 : 40}
    >
      <MenuTab isMobile={isMobile} menus={COSTUME_TABS} />

      <LuxuryList />
    </FlexView>
  );
}
