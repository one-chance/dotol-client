import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import {
  PetEquipAccuracy,
  PetEquipList,
  PetEquipRecipe,
} from '@components/db-pages/petEquip';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const TABS = [`환수장비 도감`, `명중률 계산기`, `강화 재료`];

export default () => {
  const isMobile = useResponsive(580);
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  const Components: { [key: string]: JSX.Element } = {
    '환수장비 도감': <PetEquipList />,
    '명중률 계산기': <PetEquipAccuracy isMobile={isMobile} />,
    '강화 재료': <PetEquipRecipe />,
  };

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : undefined,
        margin: isMobile ? 0 : `40px auto`,
      }}
      gap={40}
    >
      <FlexView
        color={Colors.primary}
        css={{
          height: `48px`,
          borderRadius: isMobile ? 0 : `4px`,
          padding: isMobile ? `4px 10px` : `4px 20px`,
        }}
        gap={isMobile ? 24 : 32}
        items="center"
        row
      >
        {TABS.map((tab, index) => (
          <FlexView
            key={tab}
            content="center"
            css={{
              minHeight: `40px`,
              borderBottom: tab === selectedTab ? `1px solid white` : undefined,
            }}
          >
            <Button onClick={() => setSelectedTab(TABS[index])}>
              <Text
                color={tab === selectedTab ? Colors.white : Colors.grey}
                small={isMobile}
                bold
              >
                {tab}
              </Text>
            </Button>
          </FlexView>
        ))}
      </FlexView>

      {/* {Components[selectedTab]} */}
      <FlexView css={{ margin: `0 auto` }}>{Components[selectedTab]}</FlexView>

      {/* <FlexView gap={40} fit>
        <PetEquipList />

        <PetEquipAccuracy isMobile={isMobile} />

        <PetEquipRecipe />
      </FlexView> */}
    </FlexView>
  );
};
