import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { Anchor, Button, FlexView, Icon, Text } from '@components/common';
import { SIDE_MENUS } from '@constants/menu';
import { Colors } from '@styles/system';

type MenuProps = {
  onClose: () => void;
};

export default ({ onClose }: MenuProps) => {
  const location = useLocation();

  return (
    <FlexView
      color={Colors.primary}
      css={{ position: `fixed`, top: 0, left: 0, right: 0, bottom: 0 }}
      gap={40}
    >
      <FlexView
        css={{ padding: `20px 12px 16px 12px` }}
        gap={8}
        items="center"
        row
      >
        <Button aria-label="닫기" onClick={onClose}>
          <Icon name="close" size={24} color={Colors.secondary} />
        </Button>
      </FlexView>

      <FlexView
        css={{
          padding: `0 28px 40px 28px`,
          overflowY: `auto`,
          scrollbarWidth: `none`,
          '::-webkit-scrollbar': { display: `none` },
        }}
        gap={24}
      >
        {SIDE_MENUS.map(menus => {
          const [showSubMenu, setShowSubMenu] = useState(false);

          return (
            <FlexView key={menus.menu} gap={24}>
              <FlexView
                row
                content="between"
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <FlexView row gap={12}>
                  <Icon name={menus.icon} size={24} color={Colors.secondary} />
                  <Text bold={showSubMenu} xLarge color={Colors.secondary}>
                    {menus.menu}
                  </Text>
                </FlexView>

                <Icon
                  name={showSubMenu ? `arrowUp` : `arrowDown`}
                  size={24}
                  color={Colors.secondary}
                />
              </FlexView>

              {showSubMenu && (
                <FlexView gap={4}>
                  {menus.sub.map(sub => (
                    <Anchor
                      css={{
                        backgroundColor:
                          location.pathname === sub.url
                            ? Colors.primary10
                            : `transparent`,
                        color:
                          location.pathname === sub.url
                            ? Colors.primary
                            : Colors.secondary,
                        fontSize: `20px`,
                        paddingLeft: `30px`,
                        lineHeight: `40px`,
                      }}
                      href={sub.url}
                      onClick={onClose}
                    >
                      {sub.name}
                    </Anchor>
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
