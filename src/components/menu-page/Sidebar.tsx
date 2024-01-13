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
        position: `fixed`,
        minWidth: `280px`,
        minHeight: `100vh`,
        // zIndex: 9999,
        padding: `20px`,
      }}
      gap={20}
    >
      <FlexView center>
        <Anchor
          color={Colors.white}
          css={{
            fontFamily: `Red Hat Display`,
            fontSize: `36px`,
            lineHeight: `40px`,
            letterSpacing: `-0.96px`,
          }}
          href="/"
          weight="bold"
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
              color={Colors.primary}
              css={{
                flex: 1,
                backgroundColor: Colors.background,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
              href="/user/signup"
              radius={4}
              weight="semiBold"
            >
              회원가입
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

      <FlexView
        css={{
          overflowY: `scroll`,
          maxHeight: `calc(100vh - 200px)`,
          scrollbarWidth: `none`,
          '::-webkit-scrollbar': { display: `none` },
        }}
        gap={30}
      >
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
                <Anchor
                  key={subMenu.name}
                  color={Colors.secondary}
                  href={subMenu.url}
                  weight="bold"
                >
                  {subMenu.name}
                </Anchor>
              ))}
            </FlexView>
          </FlexView>
        ))}

        <FlexView
          css={{
            borderTop: `1px solid ${Colors.grey}`,
            borderBottom: `1px solid ${Colors.grey}`,
            padding: `20px 0`,
          }}
          gap={8}
          items="center"
        >
          <Text color={Colors.secondary} weight="semiBold">
            Today: {todayVisitor}
          </Text>
          <Text color={Colors.secondary} weight="semiBold">
            Total: {totalVisitor}
          </Text>
        </FlexView>
      </FlexView>

      {showLogin && <LoginModal close={closeLoginModal} />}
    </FlexView>
  );
}
