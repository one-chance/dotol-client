import { Anchor, FlexView, Text } from '@components/common';
import { AutoInput } from '@components/costume-pages';
import { BoardSection, NewCostumeSection } from '@components/home-page';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

export default function HomePage() {
  const isMobile = useResponsive(980);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      {/* <AutoInput /> */}

      <FlexView
        border="lightgray"
        css={{
          maxWidth: `900px`,
          maxHeight: `200px`,
          overflowY: `auto`,
          padding: isMobile ? `8px` : `12px`,
          margin: `0 auto`,
        }}
        gap={10}
        radius={4}
      >
        <Text weight="bold">
          공지사항 - 개발자 노트 1227(장비마법 - 마법부여)
        </Text>
        <Text>
          <Anchor color={Colors.red} href="/db/equip-skill" weight="semiBold">
            마법부여
          </Anchor>
          &nbsp;형식인 장비 마법 데이터를 추가했습니다. 타계분신, 타계무기,
          구미호분신, 전우치분신, 이화선인분신, 싸울아비분신에 부여할 수 있는
          마법입니다. 퀘스트를 완료하여 확정적으로 마법을 부여하거나, 특정
          아이템을 소모하여 확률적으로 마법을 부여할 수 있습니다. 다른 종류의
          장비 마법도 언젠가 추가할 예정입니다.
        </Text>
        <br />
        <Text weight="bold">공지사항 - 개발자 노트 1127(사이드 메뉴)</Text>
        <Text>
          상단 전체 메뉴를 왼쪽 사이드 메뉴로 변경했습니다. 기존 구조에서는 상위
          메뉴만 바로 이동할 수 있고, 그 내부에서 서브 메뉴를 선택하는 탭을
          사용하는 구조였습니다. 굳이 2번 이동하는 것도 불편하고, 메뉴가
          늘어날수록 탭도 길어지기 때문에 사이드에 전체 메뉴를 두고 한 번에
          이동하게끔 변경하였습니다.
        </Text>
        <br />
        <Text weight="bold">공지사항 - 개발자 노트 1029(기술서 목록)</Text>
        <Text>
          9~10월은 개인 스케줄 때문에 신규 치장 외엔 업데이트가 없었는데, 이제
          시간이 나서 주기적으로 진행할 예정입니다. 오늘 업데이트는&nbsp;
          <Anchor color={Colors.red} href="/db/equip-skill" weight="semiBold">
            기술서 목록
          </Anchor>
          입니다. 예전부터 장비 마법(격마법류, 자동버프류, 기술서류, 마법부여류
          등) 관련 데이터를 업데이트 하려고 했었는데, 바람 패치로 변경되거나
          새로 추가된 데이터를 일부 구하지 못해서 일단 기술서부터 업데이트
          하였습니다.
        </Text>
        <br />
        <Text weight="bold">공지사항 - 개발자 노트 0813(사이트 리뉴얼)</Text>
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
        <NewCostumeSection />

        <BoardSection />
      </FlexView>
    </FlexView>
  );
}
