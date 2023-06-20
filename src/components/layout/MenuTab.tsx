import { useState } from 'react';

import { Button, FlexView, Link, Text } from '@components/common';
import { Colors } from '@styles/system';

type MenuTabProps = {
  menus: string[];
  isMobile?: boolean;
  onClick: (tab: string) => void;
};

export default ({ menus, isMobile, onClick }: MenuTabProps) => {
  const [selectedTab, setSelectedTab] = useState(menus[0]);

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
    onClick(tab);
  };

  return (
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
      {menus?.map((tab, index) => (
        <FlexView
          key={tab}
          content="center"
          css={{
            minHeight: `40px`,
            borderBottom: tab === selectedTab ? `1px solid white` : undefined,
          }}
        >
          <Button onClick={() => selectTab(menus[index])}>
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
  );
};
