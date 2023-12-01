import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getTodayVisitor, getTotalVisitor } from '@apis/index';
import {
  Anchor,
  Button,
  Divider,
  FlexView,
  Icon,
  Text,
} from '@components/common';
import { UserMenu } from '@components/menu-page';
import { LoginModal } from '@components/modal';
import { SIDE_MENUS } from '@constants/index';
import { isLoggedInState, showLoginState } from '@states/index';
import { Colors } from '@styles/index';

export default function Sidebar() {
  const infoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [showLogin, setShowLogin] = useRecoilState(showLoginState);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { data: todayVisitor = 0 } = useQuery({
    queryKey: [`todayVisitor`],
    queryFn: getTodayVisitor,
  });

  const { data: totalVisitor = 0 } = useQuery({
    queryKey: [`totalVisitor`],
    queryFn: getTotalVisitor,
  });

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
      css={{
        minWidth: `280px`,
        minHeight: `100vh`,
        // zIndex: 9999,
        padding: `20px`,
      }}
      gap={20}
    >
      <FlexView center>
        <Anchor
          css={{
            color: Colors.white,
            fontFamily: `Red Hat Display`,
            fontSize: `36px`,
            fontWeight: 700,
            lineHeight: `40px`,
            letterSpacing: `-0.96px`,
          }}
          href="/"
        >
          dotol
        </Anchor>
      </FlexView>

      <FlexView css={{ position: `relative` }}>
        {isLoggedIn ? (
          <FlexView css={{ height: `40px` }} gap={8} row>
            <Button
              ref={infoRef}
              aria-label="내 정보"
              border={Colors.purple}
              color={Colors.purple}
              radius={4}
              flex
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <Text color={Colors.white} weight="bold">
                내 정보
              </Text>
            </Button>

            {/* <Button radius={4} color={Colors.background} flex >
              <Text color={Colors.primary}>알림</Text>
            </Button> */}
          </FlexView>
        ) : (
          <FlexView css={{ height: `40px` }} gap={8} row>
            <Anchor
              color={Colors.background}
              css={{
                flex: 1,
                borderRadius: `4px`,
                backgroundColor: Colors.background,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
              href="/user/signup"
            >
              <Text color={Colors.primary} weight="semiBold">
                회원가입
              </Text>
            </Anchor>

            <Button
              color={Colors.purple}
              radius={4}
              flex
              onClick={openLoginModal}
            >
              <Text color={Colors.white} weight="semiBold">
                로그인
              </Text>
            </Button>
          </FlexView>
        )}

        {showUserMenu && <UserMenu ref={userMenuRef} close={closeUserMenu} />}
      </FlexView>

      <Divider color={Colors.grey} margin={0} />

      <FlexView gap={30}>
        {SIDE_MENUS.map(menus => (
          <FlexView key={menus.menu} gap={12}>
            <FlexView gap={8} row>
              <Icon color={Colors.grey} name={menus.icon} size={20} />

              <Text color={Colors.grey} size="large" weight="bold" noDrag>
                {menus.menu}
              </Text>
            </FlexView>
            <FlexView css={{ paddingLeft: `30px` }} gap={10}>
              {menus.sub.map(subMenu => (
                <Anchor key={subMenu.name} href={subMenu.url}>
                  <Text color={Colors.secondary} weight="bold">
                    {subMenu.name}
                  </Text>
                </Anchor>
              ))}
            </FlexView>
          </FlexView>
        ))}
      </FlexView>

      <Divider color={Colors.grey} margin={0} />

      <FlexView gap={8} items="center">
        <Text color={Colors.secondary} weight="semiBold">
          Today: {todayVisitor}
        </Text>
        <Text color={Colors.secondary} weight="semiBold">
          Total: {totalVisitor}
        </Text>
      </FlexView>

      {showLogin && <LoginModal close={closeLoginModal} />}
    </FlexView>
  );
}
