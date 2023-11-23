import { Colors } from '@styles/system';
import { Anchor, Button, Divider, FlexView, Text } from '@components/common';
import { useState } from 'react';

export default function Sidebar() {
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <FlexView
      color={Colors.primary}
      gap={20}
      css={{
        minWidth: '320px',
        minHeight: '100vh',
        zIndex: 9999,
        padding: '20px',
      }}
    >
      <FlexView center>
        <Anchor
          href="/"
          css={{
            color: Colors.secondary,
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

      <FlexView gap={8} css={{ width: '100%' }}>
        <Button radius={8} color={Colors.purple} css={{ height: '40px' }}>
          <Text color={Colors.white}>로그인</Text>
        </Button>
        <Button radius={8} color={Colors.secondary} css={{ height: '40px' }}>
          <Text color={Colors.white}>회원가입</Text>
        </Button>
      </FlexView>

      <Divider margin={0} color={Colors.black} />

      <FlexView>
        <Text color={Colors.secondary}>즐겨찾는 메뉴</Text>
      </FlexView>

      <Divider margin={0} color={Colors.black} />

      <FlexView fill gap={20}>
        <FlexView gap={10}>
          <Text color={Colors.secondary}>도감</Text>
          <FlexView css={{ paddingLeft: '20px' }} gap={10}>
            <Text bold color={Colors.secondary} css={{ fontSize: '18px' }}>
              일반장비 - 목록
            </Text>
            <Text bold color={Colors.secondary} css={{ fontSize: '18px' }}>
              일반장비 - 한벌 효과
            </Text>
            <Text large bold color={Colors.secondary}>
              환수장비 - 목록
            </Text>
            <Text large bold color={Colors.secondary}>
              환수장비 - 재료
            </Text>
            <Text large bold color={Colors.secondary}>
              환수장비 - 명중률
            </Text>
            <Text large bold color={Colors.secondary}>
              신수유물 - 목록
            </Text>
            <Text large bold color={Colors.secondary}>
              신수유물 - 재료
            </Text>
          </FlexView>
        </FlexView>

        <FlexView gap={10}>
          <Text color={Colors.secondary}>도감</Text>
          <FlexView css={{ paddingLeft: '20px' }} gap={10}>
            <Text large bold color={Colors.secondary}>
              일반장비 - 목록
            </Text>
            <Text large bold color={Colors.secondary}>
              일반장비 - 한벌 효과
            </Text>
            <Text large bold color={Colors.secondary}>
              환수장비 - 목록
            </Text>
            <Text large bold color={Colors.secondary}>
              환수장비 - 재료
            </Text>
            <Text large bold color={Colors.secondary}>
              환수장비 - 명중률
            </Text>
            <Text large bold color={Colors.secondary}>
              신수유물 - 목록
            </Text>
            <Text large bold color={Colors.secondary}>
              신수유물 - 재료
            </Text>
          </FlexView>
        </FlexView>
      </FlexView>

      <Divider margin={0} color={Colors.black} />

      <FlexView row content="center" gap={16}>
        <Text semiBold color={Colors.secondary}>
          Today: {todayVisitor}
        </Text>
        <Text semiBold color={Colors.secondary}>
          Total: {totalVisitor}
        </Text>
      </FlexView>
    </FlexView>
  );
}
