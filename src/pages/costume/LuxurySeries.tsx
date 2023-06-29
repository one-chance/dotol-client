import { FlexView } from '@components/common';
import { LuxuryList } from '@components/costume-pages';
import { MenuTab } from '@components/layout';
import { COSTUME_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(960);

  return (
    <FlexView
      css={{
        width: `960px`,
        margin: isMobile ? `0 auto 40px auto` : `40px auto`,
      }}
      gap={20}
    >
      <MenuTab isMobile={isMobile} menus={COSTUME_TABS} />

      <LuxuryList />
    </FlexView>
  );
};
