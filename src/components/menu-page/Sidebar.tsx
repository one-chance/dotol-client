import { useEffect, useRef, useState } from 'react';

import {
  Anchor,
  Button,
  Divider,
  FlexView,
  Icon,
  Text,
} from '@components/common';

import { SIDE_MENUS } from '@constants/menu';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInState, showLoginState } from '@states/login';
import { UserMenu } from '@components/menu-page';
import { Colors } from '@styles/system';
import { LoginModal } from '@components/modal';

export default function Sidebar() {
  const infoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [showLogin, setShowLogin] = useRecoilState(showLoginState);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
    <FlexView
      color={Colors.primary}
      gap={20}
      css={{
        minWidth: '280px',
        minHeight: '100vh',
        // zIndex: 9999,
        padding: '20px',
      }}
    >
      <FlexView center>
        <Anchor
          href="/"
          css={{
            color: Colors.white,
            fontFamily: `Red Hat Display`,
            fontSize: `36px`,
            fontWeight: 700,
            lineHeight: `40px`,
            letterSpacing: `-0.96px`,
          }}
        >
          dotol
        </Anchor>
      </FlexView>

      <FlexView css={{ position: 'relative' }}>
        {isLoggedIn ? (
          <FlexView row gap={8} css={{ height: '40px' }}>
            <Button
              ref={infoRef}
              aria-label="내 정보"
              border={Colors.purple}
              color={Colors.purple}
              flex
              radius={4}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <Text bold color={Colors.white}>
                내 정보
              </Text>
            </Button>

            {/* <Button radius={4} color={Colors.background} flex >
              <Text color={Colors.primary}>알림</Text>
            </Button> */}
          </FlexView>
        ) : (
          <FlexView row gap={8} css={{ height: '40px' }}>
            <Anchor
              color={Colors.background}
              href="/user/signup"
              css={{
                flex: 1,
                borderRadius: `4px`,
                backgroundColor: Colors.background,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <Text semiBold color={Colors.primary}>
                회원가입
              </Text>
            </Anchor>

            <Button
              radius={4}
              color={Colors.purple}
              flex
              onClick={openLoginModal}
            >
              <Text semiBold color={Colors.white}>
                로그인
              </Text>
            </Button>
          </FlexView>
        )}

        {showUserMenu && <UserMenu ref={userMenuRef} close={closeUserMenu} />}
      </FlexView>

      <Divider margin={0} color={Colors.grey} />

      <FlexView gap={30}>
        {SIDE_MENUS.map(menus => (
          <FlexView gap={12} key={menus.menu}>
            <FlexView row gap={8}>
              <Icon name={menus.icon} size={20} color={Colors.grey} />

              <Text large bold color={Colors.grey} noDrag>
                {menus.menu}
              </Text>
            </FlexView>
            <FlexView css={{ paddingLeft: '30px' }} gap={10}>
              {menus.sub.map(subMenu => (
                <Anchor key={subMenu.name} href={subMenu.url}>
                  <Text bold color={Colors.secondary}>
                    {subMenu.name}
                  </Text>
                </Anchor>
              ))}
            </FlexView>
          </FlexView>
        ))}
      </FlexView>

      <Divider margin={0} color={Colors.grey} />

      <FlexView items="center" gap={8}>
        <Text semiBold color={Colors.secondary}>
          Today: {todayVisitor}
        </Text>
        <Text semiBold color={Colors.secondary}>
          Total: {totalVisitor}
        </Text>
      </FlexView>

      {showLogin && <LoginModal close={closeLoginModal} />}
    </FlexView>
  );
}
