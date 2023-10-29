import { FlexView } from '@components/common';
import { SkillAbilityList } from '@components/db-pages';
import { MenuTab } from '@components/layout';
import { SKILL_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';

export default () => {
  const isMobile = useResponsive(960);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      items="center"
      gap={40}
    >
      <MenuTab isMobile={isMobile} menus={SKILL_TABS} />

      <SkillAbilityList />
    </FlexView>
  );
};
