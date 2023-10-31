import { FlexView } from '@components/common';
import { RecipeList } from '@components/content-pages';
import { MenuTab } from '@components/layout';
import { BODY_REINFORCE_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';

const BodyReinforceRecipePage = () => {
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

        <RecipeList isMobile={isMobile} />
      </FlexView>
    </FlexView>
  );
};

export default BodyReinforceRecipePage;
