import { useState, useEffect, useRef } from 'react';

import { Button, FlexView, Text, Link } from '@components/common';
import { MAIN_MENU } from '@constants/menu';
import { CSSObject } from '@emotion/react';
import { Colors } from '@styles/system';
import { useTranslation } from 'react-i18next';

import { TotalMenu } from './menu';

const btnCSS: CSSObject = {
  width: `80px`,
  height: `42px`,
};

const linkCSS: CSSObject = {
  lineHeight: `40px`,
  padding: `0 20px`,
  ':hover': { backgroundColor: `lightgray` },
};

export default () => {
  const [t] = useTranslation(`header`);

  const divRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLButtonElement>(null);
  const alarmRef = useRef<HTMLButtonElement>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const signout = () => {
    setOpenUserMenu(false);
  };

  const hideTotalMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const closeModal = (e: any) => {
      if (infoRef.current?.contains(e.target)) return;

      if (openUserMenu && !divRef.current?.contains(e.target))
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
        onMouseLeave={() => setOpenMenu(false)}
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
                  onMouseEnter={() => setOpenMenu(true)}
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

              {openUserMenu && (
                <FlexView
                  ref={divRef}
                  color={Colors.white}
                  css={{
                    position: `absolute`,
                    width: `160px`,
                    marginTop: `50px`,
                    borderRadius: `4px`,
                    boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.1)`,
                  }}
                >
                  <Link
                    css={{
                      borderTopLeftRadius: `4px`,
                      borderTopRightRadius: `4px`,
                      ...linkCSS,
                    }}
                    to="/user/profile"
                    onClick={() => setOpenUserMenu(false)}
                  >
                    프로필
                  </Link>

                  <Link
                    css={linkCSS}
                    to="/user/change-password"
                    onClick={() => setOpenUserMenu(false)}
                  >
                    비밀번호 변경
                  </Link>
                  <Link
                    css={linkCSS}
                    to="/"
                    onClick={() => setOpenUserMenu(false)}
                  >
                    대표 캐릭터
                  </Link>
                  <Button
                    css={{
                      height: `40px`,
                      borderBottomLeftRadius: `4px`,
                      borderBottomRightRadius: `4px`,
                      ...linkCSS,
                    }}
                    onClick={signout}
                  >
                    <Text fill start>
                      로그아웃
                    </Text>
                  </Button>
                </FlexView>
              )}
            </FlexView>
          </FlexView>

          {openMenu && <TotalMenu onSelect={hideTotalMenu} />}
        </FlexView>
      </FlexView>
    </header>
  );
};
