import { useEffect, useState } from 'react';

import { getTotalVisitor, getTodayVisitor } from '@apis/visit';
import { Anchor, FlexView, Text } from '@components/common';
import { BoardSection, ClothSection } from '@components/home-page';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(980);
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  useEffect(() => {
    getTodayVisitor().then(res => {
      setTodayVisitor(res);
    });

    getTotalVisitor().then(res => {
      setTotalVisitor(res);
    });
  }, []);

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <FlexView
        css={{
          width: isMobile ? `350px` : `900px`,
          minHeight: `200px`,
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: isMobile ? `8px` : `12px`,
          margin: isMobile ? `0 5px` : `0 auto`,
        }}
        gap={10}
      >
        <Text bold>공지사항 - 개발자 노트 0813(사이트 리뉴얼)</Text>
        <Text>
          먼저 사전고지 없이 며칠 동안 도톨이 문을 닫았던 점 사과 드립니다.
          새로운 버전의 개발이 완료되면 사이트를 교체하려고 했으나 도메인 작업
          중에 예상치 못한 결과로 기존 사이트가 내려갔는데, 원복 할 수 없어서
          일단 개발 중인 버전으로 교체하였습니다 ㅠㅠ
          <br />
          <br />
          처음부터 다시 만들다보니 구현이 안된 기능도 있고 미완성이라 디자인이
          적용되지 않은 상태입니다. 게시판은 DB가 완전히 이전되지 않아서
          막아두었습니다. 순차적으로 처리해 나갈 예정입니다.
          <br />
          <br />
          이전 공지에서 언급한대로&nbsp;
          <Text color={Colors.red}>
            비밀번호 알고리즘의 교체로 인해 부득이하게 회원 전원의 비밀번호를
            12341234로 초기화하였습니다.
          </Text>
          반드시 로그인 후에 비밀번호를 수정해주세요.
          <br />
          <br />
          버그 제보나 문의는 아래 버튼을 통해 남겨주시면 됩니다. 감사합니다.
          <br />
          ps. 버그 수정으로 인해 사이트가 잠시 작동하지 않을 수 있습니다.
          회원가입, 캐릭터 인증 버그가 있었는데 고쳐진 상태입니다.
        </Text>
      </FlexView>

      <FlexView center>
        <Anchor
          css={{
            backgroundColor: Colors.purple,
            color: Colors.white,
            minWidth: `80px`,
            lineHeight: `40px`,
            borderRadius: `4px`,
            fontWeight: 700,
            textAlign: `center`,
          }}
          href="https://open.kakao.com/o/sRRmgFkd"
          target="_blank"
        >
          1:1 문의
        </Anchor>
      </FlexView>

      <FlexView gap={20} row={!isMobile}>
        <ClothSection />

        <BoardSection />
      </FlexView>

      <FlexView gap={16} center row>
        <Text semiBold>Today: {todayVisitor}</Text>
        <Text semiBold>Total: {totalVisitor}</Text>
      </FlexView>
    </FlexView>
  );
};
