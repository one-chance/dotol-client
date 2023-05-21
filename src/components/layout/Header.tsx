import { useState } from 'react';

import { Button, FlexView, Text, Link } from '@components/common';
import { MAIN_MENU, TOTAL_MENU } from '@constants/menu';
import { Colors } from '@styles/system';
import { useTranslation } from 'react-i18next';

export default () => {
  const [t] = useTranslation(`header`);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openMenubar, setOpenMenubar] = useState(false);

  return (
    <header
      style={{
        position: `fixed`,
        zIndex: 9999,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <FlexView
        content="between"
        css={{
          backgroundColor: Colors.white,
          padding: `28px 66px`,
          borderBottom: `1px solid #D5D5D5`,
        }}
        items="start"
        row
        onMouseLeave={() => setOpenMenubar(false)}
      >
        <Link to="/">
          <Text>{t(`title`)}</Text>
        </Link>

        <FlexView gap={10}>
          <FlexView content="between" gap={40} items="center" row>
            <FlexView gap={32} items="center" row>
              {MAIN_MENU.map(menu => (
                <FlexView
                  key={menu}
                  css={{ width: `88px`, height: `42px`, cursor: `default` }}
                  center
                  onMouseEnter={() => setOpenMenubar(true)}
                >
                  <Text css={{ fontSize: `18px` }} medium>
                    {menu}
                  </Text>
                </FlexView>
              ))}
            </FlexView>

            <FlexView content="center" row>
              <Button
                css={{
                  width: `80px`,
                  height: `42px`,
                  backgroundColor: `#F2F5F8`,
                }}
              >
                <Text color="#486284">{isLoggedIn ? `알림` : `회원가입`}</Text>
              </Button>
              <Button
                css={{
                  width: `80px`,
                  height: `42px`,
                  backgroundColor: `#486284`,
                }}
              >
                <Text color={Colors.white}>
                  {isLoggedIn ? `내 정보` : `로그인`}
                </Text>
              </Button>
            </FlexView>
          </FlexView>

          {openMenubar && (
            <FlexView css={{ width: `568px`, height: `252px` }} gap={32} row>
              {TOTAL_MENU.map(menus => (
                <FlexView key={menus.menu} gap={18}>
                  {menus.sub.map(menu => (
                    <FlexView
                      key={menu.name}
                      css={{ width: `88px`, height: `27px`, cursor: `pointer` }}
                      center
                    >
                      <Link
                        css={{ color: `#486284` }}
                        to={menu.url}
                        onClick={() => setOpenMenubar(false)}
                      >
                        {menu.name}
                      </Link>
                    </FlexView>
                  ))}
                </FlexView>
              ))}
            </FlexView>
          )}
        </FlexView>
      </FlexView>
    </header>
  );
};
