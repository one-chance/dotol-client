import { useState, useEffect, useRef } from 'react';

import { Button, FlexView, Text, Link } from '@components/common';
import { MAIN_MENU } from '@constants/menu';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';
import { useTranslation } from 'react-i18next';

import { AlarmMenu, TotalMenu, UserMenu } from './menu';

const btnCSS: CSSObject = {
  width: `80px`,
  height: `42px`,
};

export default () => {
  const [t] = useTranslation(`header`);

  const alarmMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLButtonElement>(null);
  const alarmRef = useRef<HTMLButtonElement>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openAlarmMenu, setOpenAlarmMenu] = useState(false);
  const [openTotalMenu, setOpenTotalMenu] = useState(false);

  const hoverTotalMenu = (index: number) => {
    setSelectedMenu(index);
  };

  const closeUserMenu = () => {
    setOpenUserMenu(false);
  };

  const hideTotalMenu = () => {
    setOpenTotalMenu(false);
  };

  useEffect(() => {
    const closeModal = (e: any) => {
      if (alarmRef.current?.contains(e.target)) return;
      if (openAlarmMenu && !alarmMenuRef.current?.contains(e.target))
        setOpenAlarmMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal);

    return () => window.removeEventListener(`mousedown`, closeModal);
  }, [openAlarmMenu]);

  useEffect(() => {
    const closeModal = (e: any) => {
      if (infoRef.current?.contains(e.target)) return;
      if (openUserMenu && !userMenuRef.current?.contains(e.target))
        setOpenUserMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal);

    return () => window.removeEventListener(`mousedown`, closeModal);
  }, [openUserMenu]);

  return (
    <header
      style={{
        position: `fixed`,
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <FlexView
        color={Colors.white}
        content="between"
        css={{ padding: `28px 66px`, borderBottom: `1px solid #D5D5D5` }}
        items="start"
        row
        onMouseLeave={() => setOpenTotalMenu(false)}
      >
        <Link to="/">
          <Text>{t(`title`)}</Text>
        </Link>

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
                  onMouseEnter={() => setOpenTotalMenu(true)}
                >
                  <Text css={{ fontSize: `18px` }} medium>
                    {menu}
                  </Text>
                </FlexView>
              ))}
            </FlexView>

            <FlexView>
              <FlexView content="center" row>
                <Button
                  ref={alarmRef}
                  color="#F2F5F8"
                  css={{
                    ...btnCSS,
                    borderTopLeftRadius: `4px`,
                    borderBottomLeftRadius: `4px`,
                  }}
                  onClick={() => setOpenAlarmMenu(!openAlarmMenu)}
                >
                  <Text color="#486284">
                    {isLoggedIn ? `알림` : `회원가입`}
                  </Text>
                </Button>
                <Button
                  ref={infoRef}
                  color="#486284"
                  css={{
                    ...btnCSS,
                    borderTopRightRadius: `4px`,
                    borderBottomRightRadius: `4px`,
                  }}
                  onClick={() => setOpenUserMenu(!openUserMenu)}
                >
                  <Text color={Colors.white}>
                    {isLoggedIn ? `내 정보` : `로그인`}
                  </Text>
                </Button>
              </FlexView>

              {openAlarmMenu && (
                <AlarmMenu ref={alarmMenuRef} close={closeUserMenu} />
              )}
              {openUserMenu && (
                <UserMenu ref={userMenuRef} close={closeUserMenu} />
              )}
            </FlexView>
          </FlexView>

          {openTotalMenu && (
            <TotalMenu onHover={hoverTotalMenu} onSelect={hideTotalMenu} />
          )}
        </FlexView>
      </FlexView>
    </header>
  );
};
