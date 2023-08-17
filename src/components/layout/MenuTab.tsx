import { useEffect, useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useLocation, useNavigate } from 'react-router-dom';

type Menu = {
  name: string;
  path: string;
};

type MenuTabProps = {
  menus: Menu[];
  isMobile?: boolean;
  max?: number;
};

export default ({ menus, isMobile, max }: MenuTabProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(``);

  const selectTab = (tab: Menu) => {
    navigate(tab.path);
  };

  useEffect(() => {
    const path = menus.find(menu => menu.path === location.pathname);
    if (path) {
      setSelectedTab(path.name);
    }
  }, [location.pathname, menus]);

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
      {menus?.map(menu => (
        <FlexView
          key={menu.name}
          content="center"
          css={{
            minHeight: `40px`,
            borderBottom:
              menu.name === selectedTab ? `1px solid white` : undefined,
          }}
        >
          <Button aria-label="메뉴" onClick={() => selectTab(menu)}>
            <Text
              color={menu.name === selectedTab ? Colors.white : Colors.grey}
              small={isMobile}
              bold
            >
              {menu.name}
            </Text>
          </Button>
        </FlexView>
      ))}
    </FlexView>
  );
};
