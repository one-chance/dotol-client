import { useEffect, useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Anchor, Button, FlexView, Icon, Text } from '@components/common';
import { TotalMenuMobile, UserMenuMobile } from '@components/menu-page';
import { LoginModal } from '@components/modal';
import { isLoggedInState, showLoginState } from '@states/index';
import { Colors } from '@styles/index';

export default () => {
  const location = useLocation();
  const infoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [showLogin, setShowLogin] = useRecoilState(showLoginState);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTotalMenu, setShowTotalMenu] = useState(false);

  const openTotalMenu = () => {
    setShowUserMenu(false);
    setShowTotalMenu(true);
  };

  const openUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const closeTotalMenu = () => {
    setShowTotalMenu(false);
  };

  const closeUserMenu = () => {
    setShowUserMenu(false);
  };

  const openLoginModal = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    const closeModal = (e: CustomEvent<MouseEvent>) => {
      if (infoRef.current?.contains(e.target as Node)) return;
      if (showUserMenu && !userMenuRef.current?.contains(e.target as Node))
        setShowUserMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal as EventListener);

    return () =>
      window.removeEventListener(`mousedown`, closeModal as EventListener);
  }, [showUserMenu]);

  useEffect(() => {
    setShowTotalMenu(false);
  }, [location.pathname]);

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
          padding: `20px 12px 15px 12px`,
          borderBottom: `1px solid ${Colors.primary20}}`,
        }}
        items="center"
        row
      >
        <FlexView gap={8} items="center" row>
          <Button aria-label="메뉴" onClick={openTotalMenu}>
            <Icon name="menu" />
          </Button>

          <Anchor
            aria-label="로고"
            css={{
              color: Colors.primary,
              fontFamily: `Red Hat Display`,
              fontSize: `20px`,
              fontWeight: 700,
              lineHeight: `24px`,
              letterSpacing: `-0.96px`,
            }}
            href="/"
          >
            dotol
          </Anchor>
        </FlexView>

        <FlexView items="end">
          <Button
            ref={infoRef}
            aria-label={isLoggedIn ? `내 정보` : `로그인`}
            css={{ height: `24px` }}
            onClick={isLoggedIn ? openUserMenu : openLoginModal}
          >
            <Text
              color={isLoggedIn ? Colors.purple : Colors.black}
              weight="semiBold"
            >
              {isLoggedIn ? `내 정보` : `로그인`}
            </Text>
          </Button>

          {showUserMenu && (
            <UserMenuMobile ref={userMenuRef} close={closeUserMenu} />
          )}
        </FlexView>
      </FlexView>

      {showTotalMenu && <TotalMenuMobile onClose={closeTotalMenu} />}

      {showLogin && <LoginModal close={closeLoginModal} />}
    </header>
  );
};
