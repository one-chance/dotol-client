import { FlexView } from '@components/common';
import { RecipeList } from '@components/content-pages';
import { MenuTab } from '@components/layout';
import { BODY_REINFORCE_TABS } from '@constants/menu';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(610);

  return (
    <FlexView css={{ margin: isMobile ? `0 0 40px 0` : `40px auto` }} gap={20}>
      <MenuTab isMobile={isMobile} menus={BODY_REINFORCE_TABS} />

      <RecipeList isMobile={isMobile} />
    </FlexView>
  );
};
