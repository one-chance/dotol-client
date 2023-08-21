import { useState, useEffect, useRef, MouseEvent } from 'react';

import { Anchor, Button, FlexView, Text, Icon } from '@components/common';
import { LoginModal } from '@components/modal';
import { MAIN_MENU } from '@constants/menu';
import { CSSObject } from '@emotion/react';
import { isLoggedInState, showLoginState } from '@states/login';
import { Colors } from '@styles/system';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { TotalMenu, UserMenu } from './menu';

const btnCSS: CSSObject = {
  width: `90px`,
  height: `42px`,
};

const tab: { [key: string]: string } = {
  costume: `코디`,
  db: `도감`,
  content: `콘텐츠`,
  calculator: `계산기`,
  board: `게시판`,
};

export default () => {
  const location = useLocation();
  const infoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [showLogin, setShowLogin] = useRecoilState(showLoginState);

  const [selectedMenu, setSelectedMenu] = useState(``);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTotalMenu, setShowTotalMenu] = useState(false);

  const closeUserMenu = () => {
    setShowUserMenu(false);
  };

  const openTotalMenu = () => {
    setShowTotalMenu(true);
  };

  const closeTotalMenu = () => {
    setShowTotalMenu(false);
  };

  const openLoginModal = () => {
    closeTotalMenu();
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
    const mainmenu = location.pathname.split(`/`)[1];
    setSelectedMenu(mainmenu ?? ``);

    document.title = `바람의나라 도톨 | ${tab[mainmenu]}`;

    setShowLogin(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header
      style={{
        position: `fixed`,
        zIndex: 1001,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <FlexView
        color={Colors.white}
        content="between"
        css={{
          padding: `18.5px 60px`,
          borderBottom: `1px solid ${Colors.primary20}}`,
        }}
        items="start"
        row
        onMouseLeave={() => setShowTotalMenu(false)}
      >
        <FlexView css={{ height: `42px` }} center>
          <Anchor
            aria-label="로고"
            css={{
              color: Colors.primary,
              fontFamily: `Red Hat Display`,
              fontSize: `32px`,
              fontWeight: 700,
              lineHeight: `40px`,
              letterSpacing: `-0.96px`,
            }}
            href="/"
          >
            dotol
          </Anchor>
        </FlexView>

        <FlexView gap={10}>
          <FlexView content="between" gap={40} items="center" row>
            <FlexView gap={32} items="center" row>
              {MAIN_MENU.map(menu => (
                <FlexView
                  key={menu}
                  css={{
                    width: `88px`,
                    height: `42px`,
                    cursor: `default`,
                  }}
                  center
                  onMouseEnter={openTotalMenu}
                >
                  <Text
                    color={selectedMenu === menu ? Colors.primary : Colors.grey}
                    css={{ fontSize: `18px`, letterSpacing: `=1px` }}
                    medium
                  >
                    {menu}
                  </Text>
                </FlexView>
              ))}
            </FlexView>

            <FlexView items="end">
              {isLoggedIn ? (
                <FlexView content="end" css={{ width: `180px` }} row>
                  <Button
                    ref={infoRef}
                    aria-label="내 정보"
                    border={Colors.purple}
                    color={showUserMenu ? Colors.purple : Colors.white}
                    css={{
                      width: `100px`,
                      height: `40px`,
                      padding: `10px 12px 10px 18px`,
                      display: `flex`,
                      justifyContent: `center`,
                      gap: `4px`,
                    }}
                    radius={4}
                    onClick={() => {
                      closeTotalMenu();
                      setShowUserMenu(!showUserMenu);
                    }}
                  >
                    <Text
                      color={showUserMenu ? Colors.white : Colors.purple}
                      css={{ width: `45px`, letterSpacing: `-1px` }}
                      medium
                    >
                      내 정보
                    </Text>

                    <Icon
                      color={showUserMenu ? Colors.white : Colors.purple}
                      name={showUserMenu ? `arrowUp` : `arrowDown`}
                      size={16}
                    />
                  </Button>
                </FlexView>
              ) : (
                <FlexView content="center" css={{ width: `180px` }} row>
                  <Anchor
                    aria-label="회원가입"
                    css={{
                      ...btnCSS,
                      backgroundColor: Colors.background,
                      textAlign: `center`,
                      lineHeight: `42px`,
                      color: Colors.primary,
                      letterSpacing: `-1px`,
                      fontWeight: 500,
                      borderTopLeftRadius: `4px`,
                      borderBottomLeftRadius: `4px`,
                    }}
                    href="/user/signup"
                    onClick={closeTotalMenu}
                  >
                    회원가입
                  </Anchor>

                  <Button
                    ref={infoRef}
                    aria-label="로그인"
                    color={Colors.purple}
                    css={{
                      ...btnCSS,
                      borderTopRightRadius: `4px`,
                      borderBottomRightRadius: `4px`,
                    }}
                    onClick={openLoginModal}
                  >
                    <Text
                      color={Colors.background}
                      css={{ letterSpacing: `-1px` }}
                      medium
                    >
                      {isLoggedIn ? `내 정보` : `로그인`}
                    </Text>
                  </Button>
                </FlexView>
              )}

              {showUserMenu && (
                <UserMenu ref={userMenuRef} close={closeUserMenu} />
              )}
            </FlexView>
          </FlexView>

          {showTotalMenu && <TotalMenu onSelect={closeTotalMenu} />}
        </FlexView>

        {showLogin && <LoginModal close={closeLoginModal} />}
      </FlexView>
    </header>
  );
};
