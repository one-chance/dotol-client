import { FlexView, Text } from '@components/common';

type TermsProps = {
  isMobile: boolean;
};

export default ({ isMobile }: TermsProps) => (
  <FlexView css={{ margin: isMobile ? `0 4px` : 0 }} gap={isMobile ? 16 : 24}>
    <Text large={!isMobile} xLarge={!isMobile} bold center>
      개인정보 처리방침
    </Text>

    <FlexView gap={4}>
      <Text xSmall={isMobile} small>
        도톨(&apos;https://dotols.com&apos;이하 &apos;도톨&apos;)은 「개인정보
        보호법」 제30조에 따라 정부주체의 개인정보를 보호하고 이와 관련한 고충을
        신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립
        · 공개합니다.
      </Text>
      <Text xSmall={isMobile} small>
        ○ 본 개인정보처리방침은 2021년 3월 20일부터 적용됩니다.
      </Text>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보의 처리 목적
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          도톨은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
          개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이
          변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는
          등 필요한 조치를 이행할 예정입니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1. 홈페이지 회원가입 및 관리
          </Text>
          <Text xSmall={isMobile} small>
            &nbsp;&nbsp;&nbsp;회원 가입의사 확인, 회원자격 유지·관리, 서비스
            부정이용 방지, 각종 고지·통지 목적으로 개인정보를 처리합니다.
          </Text>
        </FlexView>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보의 처리 및 보유 기간
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 도톨은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 동의
          받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 개인정보 처리 및 보유 기간은 수집, 이용에 관한 동의일로부터
          회원탈퇴 전까지 입니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        정보주체와 법정대리인의 권리·의무 및 그 행사방법
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 정보주체는 도톨에 대해 언제든지 개인정보 열람·정정·삭제·처리정지
          요구 등의 권리를 행사할 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 제 1항에 따른 권리 행사는 도톨에 대해 「개인정보 보호법」 시행령
          제41조제1항에 따라 전자우편 등을 통하여 하실 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. 제 1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자
          등 대리인을 통하여 하실 수 있습니다.
          <br />
          &nbsp; &nbsp; 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)”
          별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항,
          제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
          대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
        </Text>
        <Text xSmall={isMobile} small>
          6. 도톨은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
          처리정지의 요구 시 본인이거나 정당한 대리인인지를 확인합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        처리하는 개인정보의 항목 작성
      </Text>
      <Text xSmall={isMobile} small>
        도톨은 개인정보로 이메일, 비밀번호, 로그인 ID 항목을 처리하고 있습니다.
      </Text>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보의 파기
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 원칙: 도톨은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
          불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 파기절차: 도톨은 파기 사유가 발생한 개인정보를 선정하고, 개인정보
          보호책임자의 승인을 받아 개인정보를 파기합니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. 파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
          방법을 사용합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보의 안전성 확보 조치
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 개인정보 취급 직원의 최소화 및 교육
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
          개인정보를 관리하는 대책을 시행하고 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 해킹 등에 대비한 기술적 대책
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          도톨은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기
          위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터
          접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및
          차단하고 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. 개인정보의 암호화
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
          본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
          하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
          있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 접속기록의 보관 및 위변조 방지
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고
          있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고
          있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 개인정보에 대한 접근 제한
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경,
          말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고
          있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고
          있습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보 보호책임자
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          도톨은 개인정보 처리에 관한 업무를 총괄하고, 불만처리 및 피해구제 등을
          위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          - 운영자 (admin@dotols.com)
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보 열람청구
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를
          아래의 담당자에게 할 수 있습니다.
        </Text>
        <Text css={{ paddingLeft: `8px` }} xSmall={isMobile} small>
          - 운영자 (admin@dotols.com)
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        권익침해 구제방법
      </Text>
      <FlexView gap={8}>
        <Text xSmall={isMobile} small>
          정보주체는 개인정보침해로 인한 구제를 받기 위하여
          개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
          분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의
          신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
          </Text>
          <Text xSmall={isMobile} small>
            2) 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
          </Text>
          <Text xSmall={isMobile} small>
            3) 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
          </Text>
          <Text xSmall={isMobile} small>
            4) 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          「개인정보보호법」 제35조(개인정보의 열람), 제36조(개인정보의
          정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여
          공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를
          받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
          ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
          홈페이지를 참고하시기 바랍니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보 처리방침 변경
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 이 개인정보처리방침은 2021년 3월 20부터 적용됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
        </Text>
      </FlexView>
    </FlexView>
  </FlexView>
);
