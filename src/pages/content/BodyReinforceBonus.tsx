import { FlexView } from '@components/common';
import { BonusList } from '@components/content-pages';
import { MenuTab } from '@components/layout';
import { BODY_REINFORCE_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(610);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={20}>
        <MenuTab isMobile={isMobile} menus={BODY_REINFORCE_TABS} />

        <BonusList isMobile={isMobile} />
      </FlexView>
    </FlexView>
  );
};
