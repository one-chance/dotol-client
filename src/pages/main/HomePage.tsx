import { useEffect, useState } from 'react';

import { getTotalVisitor, getTodayVisitor } from '@apis/index';
import { Anchor, FlexView, Text } from '@components/common';
import { BoardSection, ClothSection } from '@components/home-page';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/system';

const HomePage = () => {
  const isMobile = useResponsive(980);
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  useEffect(() => {
    document.title = `바람의나라 도톨`;

    getTodayVisitor().then(res => {
      setTodayVisitor(res);
    });

    getTotalVisitor().then(res => {
      setTotalVisitor(res);
    });
  }, []);

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `60px auto` }} gap={20}>
      <FlexView
        css={{
          width: isMobile ? `350px` : `900px`,
          maxHeight: `200px`,
          overflowY: `auto`,
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: isMobile ? `8px` : `12px`,
          margin: isMobile ? `0 5px` : `0 auto`,
        }}
        gap={10}
      >
        <Text bold>공지사항 - 개발자 노트 1029(장비 마법)</Text>
        <Text>
          9~10월은 개인 스케줄 때문에 신규 치장 외엔 업데이트가 없었는데, 이제
          시간이 나서 주기적으로 진행할 예정입니다. 오늘 업데이트는&nbsp;
          <Anchor href="/db/equip-skill" style={{ color: 'red' }}>
            기술서 목록
          </Anchor>
          입니다. 예전부터 장비 마법(격마법류, 자동버프류, 기술서류, 마법부여류
          등) 관련 데이터를 업데이트 하려고 했었는데, 바람 패치로 변경되거나
          새로 추가된 데이터를 일부 구하지 못해서 일단 기술서부터 업데이트
          하였습니다.
          <br />
          <br />
          버그 신고나 개발을 건의하고 싶은 기능이 있다면 1:1 문의를 통해
          알려주세요.
        </Text>
        <br />
        <Text bold>공지사항 - 개발자 노트 0813(사이트 리뉴얼)</Text>
        <Text>
          먼저 사전고지 없이 며칠 동안 도톨이 문을 닫았던 점 사과 드립니다.
          새로운 버전의 개발이 완료되면 사이트를 교체하려고 했으나 도메인 작업
          중에 예상치 못한 결과로 기존 사이트가 내려갔는데, 원복 할 수 없어서
          일단 개발 중인 버전으로 교체하였습니다 ㅠㅠ
          <br />
          <br />
          게시판은 DB가 완전히 이전되지 않아서 막아두었습니다. 순차적으로 처리해
          나갈 예정입니다.
          <br />
          <br />
          이전 공지에서 언급한대로&nbsp;
          <Text color={Colors.red}>
            비밀번호 알고리즘의 교체로 인해 부득이하게 회원 전원의 비밀번호를
            12341234로 초기화하였습니다.
          </Text>
          반드시 로그인 후에 비밀번호를 수정해주세요.
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
          href="https://open.kakao.com/me/dotols"
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

export default HomePage;
