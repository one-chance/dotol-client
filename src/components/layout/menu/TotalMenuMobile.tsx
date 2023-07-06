import { useState } from 'react';

import { Button, FlexView, Link, Icon, Text } from '@components/common';
import { TOTAL_MENU, MAIN_MENU } from '@constants/menu';
import { Colors } from '@styles/system';
import { useLocation } from 'react-router-dom';

type MenuProps = {
  onClose: () => void;
};

export default ({ onClose }: MenuProps) => {
  const location = useLocation();

  return (
    <FlexView
      color={Colors.background}
      css={{ position: `fixed`, top: 0, left: 0, right: 0, bottom: 0 }}
      gap={40}
    >
      <FlexView
        content="between"
        css={{ padding: `20px 24px 16px 24px` }}
        items="center"
        row
      >
        <Link css={{ height: `17px` }} to="/">
          <Text>dotol</Text>
        </Link>

        <Button onClick={onClose}>
          <Icon name="close" size={24} />
        </Button>
      </FlexView>

      <FlexView
        css={{
          padding: `0 28px`,
          overflowY: `auto`,
          scrollbarWidth: `none`,
          '::-webkit-scrollbar': { display: `none` },
        }}
        gap={40}
      >
        {MAIN_MENU.map((menu, index) => {
          const [showSubMenu, setShowSubMenu] = useState(false);

          return (
            <FlexView
              key={menu}
              content="center"
              gap={20}
              onClick={() => setShowSubMenu(!showSubMenu)}
            >
              <FlexView
                content="between"
                css={{ minHeight: `30px` }}
                items="center"
                row
              >
                <Text bold={showSubMenu} color={Colors.primary} xLarge>
                  {menu}
                </Text>

                <Icon name={showSubMenu ? `arrowUp` : `arrowDown`} size={16} />
              </FlexView>

              {showSubMenu && (
                <FlexView gap={4}>
                  {TOTAL_MENU[index].sub.map(sub => (
                    <FlexView
                      key={sub.name}
                      color={
                        location.pathname === sub.url
                          ? Colors.primary10
                          : undefined
                      }
                      content="center"
                      css={{ paddingLeft: `16px`, minHeight: `40px` }}
                    >
                      <Link key={sub.name} to={sub.url} onClick={onClose}>
                        <Text
                          color={
                            location.pathname === sub.url
                              ? Colors.primary
                              : Colors.primary50
                          }
                          large
                        >
                          {sub.name}
                        </Text>
                      </Link>
                    </FlexView>
                  ))}
                </FlexView>
              )}
            </FlexView>
          );
        })}
      </FlexView>
    </FlexView>
  );
};
