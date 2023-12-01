
import { FlexView } from '@components/common';
import { SkillAbilityList } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

export default function SkillAbilityPage() {
  const isMobile = useResponsive(860);

  return (
    <FlexView
      css={{
        maxWidth: `860px`,
        width: `100%`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      gap={40}
      items="center"
    >
      <SkillAbilityList />
    </FlexView>
  );
}
