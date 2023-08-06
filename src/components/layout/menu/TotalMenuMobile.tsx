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
        css={{ padding: `20px 12px 16px 12px` }}
        gap={8}
        items="center"
        row
      >
        <Button aria-label="닫기" onClick={onClose}>
          <Icon name="close" size={24} />
        </Button>

        {/* <Link
          aria-label="로고"
          css={{
            fontFamily: `Red Hat Display`,
            fontSize: `20px`,
            fontWeight: 700,
            letterSpacing: `-0.96px`,
            lineHeight: 1,
          }}
          to="/"
        >
          dotol
        </Link> */}
      </FlexView>

      <FlexView
        css={{
          padding: `0 28px 40px 28px`,
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
                <Text
                  bold={showSubMenu}
                  color={Colors.primary}
                  css={{ lineHeight: 1 }}
                  xLarge
                >
                  {menu}
                </Text>

                <Icon name={showSubMenu ? `arrowUp` : `arrowDown`} size={24} />
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
                      <Link
                        key={sub.name}
                        aria-label="메뉴"
                        to={sub.url}
                        onClick={onClose}
                      >
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
