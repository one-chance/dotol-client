import { useEffect, useRef, useState } from 'react';

import { Button, FlexView, Icon, Image, Text, Link } from '@components/common';
import { LoginModal } from '@components/modal';
import { isLoggedInState, showLoginState } from '@states/login';
import { Colors } from '@styles/system';
import { useRecoilState, useRecoilValue } from 'recoil';

import { TotalMenuMobile } from './menu';
import UserMenuMobile from './menu/UserMenuMobile';

export default () => {
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
        css={{ padding: `20px 24px 16px 24px` }}
        items="center"
        row
      >
        <FlexView gap={8} items="center" row>
          <Button aria-label="메뉴" onClick={openTotalMenu}>
            <Icon name="menu" />
          </Button>

          <Link
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
          </Link>
        </FlexView>

        <FlexView items="end">
          <Button
            ref={infoRef}
            aria-label={isLoggedIn ? `사용자` : `로그인`}
            onClick={isLoggedIn ? openUserMenu : openLoginModal}
          >
            <Text color={isLoggedIn ? Colors.purple : Colors.black} semiBold>
              {isLoggedIn ? `내 정보` : `로그인`}
            </Text>
            {/* <Image height={24} src="/user.png" width={24} /> */}
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
