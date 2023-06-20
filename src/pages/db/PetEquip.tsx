import { useState } from 'react';

import { FlexView } from '@components/common';
import {
  PetEquipAccuracy,
  PetEquipList,
  PetEquipRecipe,
} from '@components/db-pages/petEquip';
import { MenuTab } from '@components/layout';
import { useResponsive } from '@utils/hooks';

const TABS = [`환수장비 도감`, `명중률 계산기`, `강화 재료`];

export default () => {
  const isMobile = useResponsive(580);
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const Components: { [key: string]: JSX.Element } = {
    '환수장비 도감': <PetEquipList />,
    '명중률 계산기': <PetEquipAccuracy isMobile={isMobile} />,
    '강화 재료': <PetEquipRecipe />,
  };

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : undefined,
        margin: isMobile ? `0 0 20px 0` : `40px auto`,
      }}
      gap={40}
    >
      <MenuTab isMobile={isMobile} menus={TABS} onClick={selectTab} />

      {Components[selectedTab]}
    </FlexView>
  );
};
