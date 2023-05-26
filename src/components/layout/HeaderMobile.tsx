import { useState, useEffect, useRef } from 'react';

import { Button, FlexView, Text, Link } from '@components/common';
import { MAIN_MENU } from '@constants/menu';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';
import { useTranslation } from 'react-i18next';

import { AlarmMenu, UserMenu } from './menu';

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

  const closeUserMenu = () => {
    setOpenUserMenu(false);
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
        css={{ padding: `20px 16px`, borderBottom: `1px solid #D5D5D5` }}
        items="start"
        row
        onMouseLeave={() => setOpenTotalMenu(false)}
      >
        <Link to="/">
          <Text>{t(`title`)}</Text>
        </Link>

        <Text>로고</Text>

        <Button>
          <Text small>로그인</Text>
        </Button>
      </FlexView>
    </header>
  );
};
