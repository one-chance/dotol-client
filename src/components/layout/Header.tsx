import { useState, useEffect, useRef, MouseEvent } from 'react';

import { Button, FlexView, Text, Link, Icon } from '@components/common';
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

const tab: { [key: string]: number } = {
  dostume: 0,
  db: 1,
  content: 2,
  calculator: 3,
  board: 4,
};

export default () => {
  const location = useLocation();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [showLogin, setShowLogin] = useRecoilState(showLoginState);

  const infoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [selectedMenu, setSelectedMenu] = useState(-1);
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
    setSelectedMenu(tab[mainmenu] ?? -1);
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
          <Link
            aria-label="로고"
            css={{
              color: Colors.primary,
              fontFamily: `Red Hat Display`,
              fontSize: `32px`,
              fontWeight: 700,
              letterSpacing: `-0.96px`,
            }}
            to="/"
          >
            dotol
          </Link>
        </FlexView>

        <FlexView gap={10}>
          <FlexView content="between" gap={40} items="center" row>
            <FlexView gap={32} items="center" row>
              {MAIN_MENU.map((menu, index) => (
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
                    color={
                      selectedMenu === index ? Colors.primary : Colors.grey
                    }
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
                      padding: `8px 12px 8px 20px`,
                      display: `flex`,
                      justifyContent: `center`,
                      gap: `4px`,
                    }}
                    radius={4}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    <Text
                      color={showUserMenu ? Colors.white : Colors.purple}
                      css={{
                        width: `45px`,
                        letterSpacing: `-1px`,
                        lineHeight: 1.5,
                      }}
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
                  <Link
                    aria-label="회원가입"
                    css={{
                      ...btnCSS,
                      display: `flex`,
                      backgroundColor: Colors.background,
                      justifyContent: `center`,
                      alignItems: `center`,
                      color: Colors.primary,
                      letterSpacing: `-1px`,
                      fontWeight: 500,
                      borderTopLeftRadius: `4px`,
                      borderBottomLeftRadius: `4px`,
                    }}
                    to="/user/signup"
                  >
                    회원가입
                  </Link>

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
