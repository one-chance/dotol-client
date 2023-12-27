import { FlexView, Text } from '@components/common';
import { SkillBook, SkillEnchant } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

export default function EquipSkill() {
  const isMobile = useResponsive(862);

  return (
    <FlexView
      css={{ maxWidth: `852px`, margin: `0 auto 40px auto` }}
      gap={isMobile ? 20 : 40}
    >
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        장비 마법
      </Text>

      <SkillEnchant isMobile={isMobile} />

      <SkillBook isMobile={isMobile} />
    </FlexView>
  );
}
