import { useState } from 'react';

import { Button, FlexView, Icon, Image, Text, Link } from '@components/common';
import { isLoggedInState } from '@states/login';
import { Colors } from '@styles/system';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { TotalMenuMobile } from './menu';

export default () => {
  const [t] = useTranslation(`header`);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTotalMenu, setShowTotalMenu] = useState(false);

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const openTotalMenu = () => {
    setShowTotalMenu(true);
  };

  const openUserMenu = () => {
    setShowUserMenu(true);
  };

  const closeTotalMenu = () => {
    setShowTotalMenu(false);
  };

  const closeUserMenu = () => {
    setShowUserMenu(false);
  };

  return (
    <header
      style={{
        position: `fixed`,
        zIndex: 999,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <FlexView
        color={Colors.white}
        content="between"
        css={{
          padding: `20px 24px 16px 24px`,
          // boxShadow: `0 2px 4px rgba(0, 0, 0, 0.2)`,
        }}
        items="center"
        row
      >
        <Link css={{ height: `17px` }} to="/">
          <Text>dotol</Text>
        </Link>

        <FlexView gap={8} items="center" row>
          {isLoggedIn ? (
            <Button onClick={openUserMenu}>
              <Image height={24} src="/user.png" width={24} />
            </Button>
          ) : (
            <Link css={{ height: `24px` }} to="/user/signin">
              <Image height={24} src="/user.png" width={24} />
            </Link>
          )}

          <Button onClick={openTotalMenu}>
            <Icon name="menu" />
          </Button>
        </FlexView>
      </FlexView>

      {showTotalMenu && <TotalMenuMobile onClose={closeTotalMenu} />}
    </header>
  );
};
