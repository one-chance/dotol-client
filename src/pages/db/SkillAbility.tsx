import { FlexView } from '@components/common';
import { SkillAbilityList } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

export default () => {
  const isMobile = useResponsive(500);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
      items="center"
    >
      <SkillAbilityList />
    </FlexView>
  );
};
