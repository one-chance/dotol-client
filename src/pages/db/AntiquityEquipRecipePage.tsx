import { FlexView } from '@components/common';
import { AntiquityEquipRecipe } from '@components/db-pages';
import { MenuTab } from '@components/layout';
import { ANTIQUITY_EQUIP_TABS } from '@constants/menu';
import { useResponsive } from '@hooks/index';

export default function AntiquityEquipRecipePage() {
  const isMobile = useResponsive(620);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={isMobile ? 20 : 40}>
        <MenuTab isMobile={isMobile} menus={ANTIQUITY_EQUIP_TABS} />

        <AntiquityEquipRecipe />
      </FlexView>
    </FlexView>
  );
}
