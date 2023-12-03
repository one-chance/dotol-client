import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { Anchor, Button, FlexView, Icon, Text } from '@components/common';
import { SIDE_MENUS } from '@constants/index';
import { Colors } from '@styles/index';

type MenuProps = {
  onClose: () => void;
};

export default function TotalMenuMobile({ onClose }: MenuProps) {
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
          <Icon color={Colors.secondary} name="close" size={24} />
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
                content="between"
                row
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <FlexView gap={12} row>
                  <Icon color={Colors.secondary} name={menus.icon} size={24} />
                  <Text
                    color={Colors.secondary}
                    size="xLarge"
                    weight={showSubMenu ? `bold` : `regular`}
                  >
                    {menus.menu}
                  </Text>
                </FlexView>

                <Icon
                  color={Colors.secondary}
                  name={showSubMenu ? `arrowUp` : `arrowDown`}
                  size={24}
                />
              </FlexView>

              {showSubMenu && (
                <FlexView gap={4}>
                  {menus.sub.map(sub => (
                    <Anchor
                      key={sub.name}
                      color={
                        location.pathname === sub.url
                          ? Colors.primary
                          : Colors.secondary
                      }
                      css={{
                        backgroundColor:
                          location.pathname === sub.url
                            ? Colors.primary10
                            : `transparent`,
                        paddingLeft: `30px`,
                        lineHeight: `40px`,
                      }}
                      href={sub.url}
                      size="large"
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
}
