import { useState, useEffect, useRef, MouseEvent } from 'react';

import { Button, FlexView, Text, Link } from '@components/common';
import { MAIN_MENU } from '@constants/menu';
import { CSSObject } from '@emotion/react';
import { isLoggedInState } from '@states/login';
import { Colors } from '@styles/system';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { AlarmMenu, TotalMenu, UserMenu } from './menu';

const btnCSS: CSSObject = {
  width: `80px`,
  height: `42px`,
};

export default () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const alarmMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLButtonElement>(null);
  const alarmRef = useRef<HTMLButtonElement>(null);

  const [selectedMenu, setSelectedMenu] = useState(-1);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAlarmMenu, setShowAlarmMenu] = useState(false);
  const [showTotalMenu, setShowTotalMenu] = useState(false);

  const hoverTotalMenu = (index: number) => {
    setSelectedMenu(index);
  };

  const closeUserMenu = () => {
    setShowUserMenu(false);
  };

  const hideTotalMenu = () => {
    setSelectedMenu(-1);
    setShowTotalMenu(false);
  };

  useEffect(() => {
    const closeModal = (e: CustomEvent<MouseEvent>) => {
      if (alarmRef.current?.contains(e.target as Node)) return;
      if (showAlarmMenu && !alarmMenuRef.current?.contains(e.target as Node))
        setShowAlarmMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal as EventListener);

    return () =>
      window.removeEventListener(`mousedown`, closeModal as EventListener);
  }, [showAlarmMenu]);

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
          padding: `28px 66px`,
          boxShadow: `0 2px 4px rgba(0, 0, 0, 0.2)`,
        }}
        items="start"
        row
        onMouseLeave={() => setShowTotalMenu(false)}
      >
        <FlexView css={{ height: `42px` }}>
          <Link
            aria-label="로고"
            css={{
              color: Colors.purple,
              fontFamily: `Red Hat Display`,
              fontSize: `40px`,
              fontWeight: 700,
              lineHeight: 1,
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
                    borderBottom:
                      selectedMenu === index ? `1px solid black` : `none`,
                  }}
                  center
                  onMouseEnter={() => setShowTotalMenu(true)}
                >
                  <Text css={{ fontSize: `18px` }} medium>
                    {menu}
                  </Text>
                </FlexView>
              ))}
            </FlexView>

            <FlexView>
              <FlexView content="center" row>
                {isLoggedIn ? (
                  <Button
                    ref={alarmRef}
                    aria-label={isLoggedIn ? `알림` : `회원가입`}
                    color={Colors.background}
                    css={{
                      ...btnCSS,
                      borderTopLeftRadius: `4px`,
                      borderBottomLeftRadius: `4px`,
                    }}
                    onClick={() => setShowAlarmMenu(!showAlarmMenu)}
                  >
                    <Text color={Colors.primary}>
                      {isLoggedIn ? `알림` : `회원가입`}
                    </Text>
                  </Button>
                ) : (
                  <Link
                    aria-label="회원가입"
                    css={{
                      ...btnCSS,
                      display: `flex`,
                      backgroundColor: Colors.background,
                      justifyContent: `center`,
                      alignItems: `center`,
                    }}
                    to="/user/signup"
                  >
                    <Text color={Colors.primary}>회원가입</Text>
                  </Link>
                )}
                <Button
                  ref={infoRef}
                  aria-label={isLoggedIn ? `내 정보` : `로그인`}
                  color={Colors.primary}
                  css={{
                    ...btnCSS,
                    borderTopRightRadius: `4px`,
                    borderBottomRightRadius: `4px`,
                  }}
                  onClick={() =>
                    isLoggedIn
                      ? setShowUserMenu(!showUserMenu)
                      : navigate(`/user/signin`)
                  }
                >
                  <Text color={Colors.background}>
                    {isLoggedIn ? `내 정보` : `로그인`}
                  </Text>
                </Button>
              </FlexView>

              {showAlarmMenu && (
                <AlarmMenu ref={alarmMenuRef} close={closeUserMenu} />
              )}
              {showUserMenu && (
                <UserMenu ref={userMenuRef} close={closeUserMenu} />
              )}
            </FlexView>
          </FlexView>

          {showTotalMenu && (
            <TotalMenu onHover={hoverTotalMenu} onSelect={hideTotalMenu} />
          )}
        </FlexView>
      </FlexView>
    </header>
  );
};
