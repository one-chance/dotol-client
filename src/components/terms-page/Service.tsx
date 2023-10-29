import { FlexView, Text } from '@components/common';

type TermsProps = {
  isMobile: boolean;
};

export default ({ isMobile }: TermsProps) => (
  <FlexView css={{ margin: isMobile ? `0 4px` : 0 }} gap={isMobile ? 24 : 40}>
    <Text large={!isMobile} xLarge={!isMobile} bold center>
      서비스 이용약관
    </Text>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        목적
      </Text>
      <Text xSmall={isMobile} small>
        본 약관은 도톨(‘https://dotols.com’ 이하 &quot;도톨&quot;)에서 제공하는
        게임 정보 서비스 및 부수된 제반 서비스(이하 &quot;서비스&quot;)를
        이용함에 있어 도톨과 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을
        구체적으로 규정함을 목적으로 합니다.
      </Text>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        용어의 정의
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 이 약관에서 사용하는 정의는 다음과 같습니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) “서비스”는 구현되는 단말기와 상관없이 회원이나 웹사이트 방문자가
            이용할 수 있는 도톨 서비스를 의미합니다.
          </Text>
          <Text xSmall={isMobile} small>
            2) “회원”은 “도톨”의 이용약관에 동의하여 회원가입을 한 자로서,
            “도톨”이 제공하는 서비스를 이용하는 자를 말합니다.
          </Text>
          <Text xSmall={isMobile} small>
            3) “이용계약”은 본 약관을 포함하여 서비스 이용과 관련하여 “도톨”과
            회원 간에 체결하는 모든 계약을 말합니다.
          </Text>
          <Text xSmall={isMobile} small>
            4) “아이디”는 회원의 식별 및 서비스 이용을 위하여 회원의 신청에 따라
            도톨이 회원에게 부여하는 고유한 문자와 숫자의 조합을 말합니다.
          </Text>
          <Text xSmall={isMobile} small>
            5) “이메일”은 회원가입이나 비밀번호 찾기 등에 사용되는 단일한 이메일
            주소를 말합니다.
          </Text>
          <Text xSmall={isMobile} small>
            6) “비밀번호”는 식별되는 회원의 본인 여부를 검증하기 위해 회원이
            설정하여 도톨에 등록한 고유한 문자와 숫자의 조합을 말합니다.
          </Text>
          <Text xSmall={isMobile} small>
            7) “게시물”은 회원이 서비스에 게시한 문자, 문서, 그림, 영상, 링크,
            파일 혹은 이들의 조합으로 이루어진 모든 정보나 자료를 말합니다.
          </Text>
        </FlexView>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        약관의 게시와 효력, 개정
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”은 본 약관의 내용을 회원이 쉽게 알 수 있도록 회원가입 화면에
          게시합니다. 이용자가 회원가입을 하면 동의한 것으로 간주됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 관련 법률에 위배되지 않는 범위에서 이 약관을 개정할 수
          있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
          현행 약관과 함께 적용일자로부터 최소한 7일 전부터 공지합니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 변경된 약관은 공지된 시점부터 그 효력이 발생하며, 회원이 본
          서비스를 계속 이용하면 변경 후의 약관에 대해 동의를 한 것으로
          간주됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 회원이 개정약관의 적용에 동의하지 않는 경우 “도톨” 또는 회원은
          이용계약을 해지할 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 약관의
          규제에 관한 법률이나 기타 관계법령상 관례에 따릅니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        이용계약의 체결
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 이용계약은 회원이 되고자 하는 자가 “도톨”이 정한 절차에 따라
          가입신청을 하고, “도톨”이 승낙함으로써 체결됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 회원가입 신청에 대하여 승낙함을 원칙으로 하지만, 다음에
          해당하는 경우에는 거부하거나 사후에 이용 계약을 해지할 수 있습니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는
            경
          </Text>
          <Text xSmall={isMobile} small>
            2) 제3자의 전자우편 주소를 이용하여 신청한 경우
          </Text>
          <Text xSmall={isMobile} small>
            3) 부정한 용도로 서비스를 사용하고자 하는 경우
          </Text>
          <Text xSmall={isMobile} small>
            4) “도톨”의 정책에 적합하지 않는 회원으로 판단되는 경우나 서비스
            제공이 곤란한 경우
          </Text>
          <Text xSmall={isMobile} small>
            5) 회원의 이용 목적이나 서비스 이용 방법이 다른 회원의 서비스 이용에
            영향을 미칠 경우
          </Text>
          <Text xSmall={isMobile} small>
            6) 비정상적인 방법을 통하여 아이디를 대량으로 생성하는 행위
          </Text>
          <Text xSmall={isMobile} small>
            7) 이용제한 기록이 있는 이메일 주소로 이용신청을 하는 경우
          </Text>
          <Text xSmall={isMobile} small>
            8) 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 그 밖의 관계
            법령에서 금지하는 위법행위를 할 목적으로 이용신청을 하는 경우
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          3. “도톨”은 회원에 대해 내부정책에 따라 등급별로 구분하여 이용시간,
          이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 회원은 “도톨”에 언제든지 회원 탈퇴를 요청하여 이용계약을 해지할 수
          있습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        개인정보보호 의무
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”은 개인정보 보호법 등 관계 법령이 규정한 절차와 방법에 따라
          회원의 개인정보를 보호하기 위해 노력합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 서비스를 중단하거나 회원이 개인정보 제공 동의를 철회한
          경우에는 신속하게 회원의 개인정보를 파기합니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”은 법률에 특별한 규정이 있는 경우를 제외하고는 회원의 별도
          동의 없이 개인정보를 제3자에게 공개하거나 제공하지 아니합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={8}>
      <Text small={isMobile} bold>
        회원의 아이디 및 비밀번호
      </Text>

      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 회원은 아이디와 비밀번호에 관해서 관리책임이 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 회원은 아이디 및 비밀번호를 제3자가 이용하도록 제공하여서는 안
          됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”은 회원이 아이디 및 비밀번호를 소홀히 관리하여 발생하는
          손해에 대해 책임을 지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을
          인지한 경우에는 이를 즉시 “도톨”에 통지하고 안내에 따라야 합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        도톨의 의무
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”은 계속적이고 안정적인 서비스의 제공을 위하여 최선을 다하여
          노력합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 회원이 안전하게 서비스를 이용할 수 있도록 현재 인터넷
          보안기술의 발전수준에 적합한 보안시스템을 갖추고 운영해야 합니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”은 서비스를 이용하는 회원으로부터 제기되는 불만이 정당하다고
          인정할 경우, 시스템과 인력이 충분하다면 이를 처리하여야 합니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. “도톨”은 정보통신망 이용촉진 및 정보보호에 관한 법률,
          통신비밀보호법, 전기통신사업법 등 운영과 관련된 법규를 준수합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        회원의 의무
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 회원은 다음 행위를 해서는 안 됩니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 신청 또는 회원정보 변경 시 허위내용 등록
          </Text>
          <Text xSmall={isMobile} small>
            2) 타인의 정보 도용
          </Text>
          <Text xSmall={isMobile} small>
            3) “도톨“의 운영자를 사칭하거나 관련 정보를 도용
          </Text>
          <Text xSmall={isMobile} small>
            4) “도톨”이 게시한 정보의 변경
          </Text>
          <Text xSmall={isMobile} small>
            5) “도톨”이 금지한 정보(컴퓨터 프로그램 등)의 송신 또는 게시
          </Text>
          <Text xSmall={isMobile} small>
            6) “도톨”이 제공 또는 승인하지 아니한 컴퓨터 프로그램이나 기기 또는
            장치를 제작, 배포, 이용, 광고하는 행위
          </Text>
          <Text xSmall={isMobile} small>
            7) “도톨”과 기타 제3자의 저작권, 영업비밀, 특허권 등 지적재산권에
            대한 침해
          </Text>
          <Text xSmall={isMobile} small>
            8) “도톨”과 다른 회원 및 기타 제3자를 희롱하거나, 위협하거나 명예를
            손상시키거나, 업무를 방해하는 행위
          </Text>
          <Text xSmall={isMobile} small>
            9) 외설, 폭력적인 메시지, 기타 공서양속에 반하는 정보를 공개 또는
            게시하는 행위
          </Text>
          <Text xSmall={isMobile} small>
            10) 해킹을 통해서 다른 사용자의 정보를 취득하는 행위
          </Text>
          <Text xSmall={isMobile} small>
            11) “도톨”의 동의 없이 영리, 영업, 광고, 정치활동 등을 목적으로
            서비스를 사용하는 행위
          </Text>
          <Text xSmall={isMobile} small>
            12) 기타 현행 법령에 위반되는 불법적인 행위 및 선량한 풍속 기타
            사회통념상 허용되지 않는 행위
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          2. “도톨”은 회원이 전항에서 금지한 행위를 하는 경우, 서비스 이용
          제한/정지, 수사 기관에의 고발 조치 등 합당한 조치를 취할 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. 회원은 “도톨”의 명시적 사전 동의가 없는 한 서비스의 이용권한 및
          기타 이용계약상의 지위를 제3자에게 양도, 증여, 대여할 수 없습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 회원은 관계법, 약관의 규정, 이용안내 및 서비스 공지사항을
          준수하여야 하며, “도톨”의 업무에 방해되는 행위를 하여서는 안 됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 회원은 “도톨”의 사전 허락 없이 “도톨”이 정한 이용 목적과 방법에
          반하여 영업/광고활동 등을 할 수 없습니다.
        </Text>
        <Text xSmall={isMobile} small>
          6. “도톨”은 회원이 등록한 게시물 내용이 제 1항에서 규정하는 금지행위에
          해당된다고 판단되는 경우, 사전통지 없이 삭제할 수 있습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        서비스의 제공 및 변경
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”은 회원에게 아래와 같은 서비스를 제공합니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 게임 관련 자료를 제공하는 서비스
          </Text>
          <Text xSmall={isMobile} small>
            2) 게임 관련하여 “도톨”이 자체 개발하여 제공하는 서비스
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          2. “도톨”은 다음 각 호에 해당하는 경우에는 서비스의 제공을 일시적으로
          중단할 수 있습니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는 게임
            내용이나 서비스의 수정을 위하여 필요한 경우
          </Text>
          <Text xSmall={isMobile} small>
            2) 해킹 등의 사고, 회원들의 비정상적인 게임 이용행태, 미처 예상하지
            못한 서비스의 불안정성에 대응하기 위하여 필요한 경우
          </Text>
          <Text xSmall={isMobile} small>
            3) 관련 법령에서 특정 시간 또는 방법으로 서비스 제공을 금지하는 경우
          </Text>
          <Text xSmall={isMobile} small>
            4) 천재지변, 비상사태, 정전, 설비의 장애 또는 이용의 폭주 등으로
            정상적인 서비스 제공이 불가능할 경우
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          3. “도톨”은 회원과 별도로 계약을 체결하지 아니하는 한, 회원에게
          “도톨”과 관련된 어떤 권리도 부여하지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. “도톨”이 제공하는 서비스의 기능과 디자인은 변경되거나, 중단될 수
          있습니다. “도톨”은 이와 관련하여 사전에 통지하지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 전항에 의해서 제공되는 서비스가 변경 및 중단될 경우에 발생한
          이용자의 어떠한 손해에 대해서도 책임을 지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          6. “도톨”은 회원이 연동한 캐릭터 검색에 대한 캐릭터 정보를 게임 정보
          서비스 및 제반 서비스에 이용·제공 할 수 있습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        게시물의 삭제 또는 이용 제한
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 회원의 게시물의 내용이 다음 각 호에 해당하는 경우 “도톨”은 해당
          게시물을 삭제 또는 해당 회원의 회원 자격을 제한, 정지시킬 수 있습니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는
            내용
          </Text>
          <Text xSmall={isMobile} small>
            2) 음란물, 욕설 등 공서양속에 위반되는 내용의 정보, 문장, 도형 등을
            유포하는 내용
          </Text>
          <Text xSmall={isMobile} small>
            3) 범죄행위와 관련이 있다고 판단되는 내용
          </Text>
          <Text xSmall={isMobile} small>
            4) 다른 회원 또는 제3자의 저작권 등 기타 권리를 침해하는 내용
          </Text>
          <Text xSmall={isMobile} small>
            5) 종교적, 정치적 분쟁을 야기하는 내용으로서, 이러한 분쟁으로 인하여
            서비스에 방해되거나 방해되리라고 판단되는 경우
          </Text>
          <Text xSmall={isMobile} small>
            6) 타인의 개인정보, 사생활을 침해하거나 명예를 손상시키는 경우
          </Text>
          <Text xSmall={isMobile} small>
            7) 동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에 어긋나는
            경우
          </Text>
          <Text xSmall={isMobile} small>
            8) 불필요하거나 승인되지 않은 광고, 판촉물을 게재하는 경우
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          2. 회원의 게시물로 인해 다른 회원 또는 제 3자가 회원을 대상으로
          민형사상의 법적 조치를 취하는 동시에 법적 조치와 관련된 게시물의
          삭제를 요청해오는 경우,
          <br />
          &nbsp; &nbsp; “도톨”은 해당 게시물에 대한 접근을 잠정적으로 제한하거나
          삭제할 수 있습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        광고의 게재
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”의 서비스에 광고를 게재할 수 있으며 회원은 서비스 이용 시
          노출되는 광고에 동의합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 서비스에 게재된 광고에 회원이 참여 함으로써 발생하는
          손실과 손해에 대해 책임을 지지 않습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        서비스 이용의 제한
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”은 천재지변, 국가비상사태, 해결이 곤란한 기술적 결함 등
          불가항력적인 경우는 서비스를 예고 없이 제한하거나 중지할 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. 서비스를 이용하게 됨으로써 서비스 영역에서 발생하는 회원 사이의
          문제에 대해 “도톨”은 책임지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. 회원의 관리 소홀로 인한 ID 및 비밀번호의 유출로 제3자에 의한
          부정이용 등으로 회원의 의무조항을 위반한 경우 ID가 제한될 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. “도톨”이 본 약관 &apos;회원의 의무&apos; 관련 위반행위를 조사하는
          과정에서 특정 회원이 연관된 경우 일시적으로 서비스 이용을 제한할 수
          있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. 회원이 본 조에 따른 “도톨”의 이용제한에 불복하고자 할 때에는 통보를
          받은 날로부터 15일 이내에 이용제한에 불복하는 이유를 기재한
          <br />
          &nbsp; &nbsp; 이의 신청서를 전자우편 또는 이에 준하는 방법으로
          제출하여야 합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        게시물의 권리와 책임
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 작성한 게시물(텍스트, 이미지, 동영상, 링크 등의 기타 정보)에 대한
          책임 및 권리는 게시물을 등록한 회원에게 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 회원이 작성한 게시물에 대해서 감시 및 관리할 수 없으며
          이에 대해서 책임지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”은 회원이 등록하는 게시물의 신뢰성, 진실성, 정확성 등에
          대해서 책임지지 않으며 보증하지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 회원은 자신이 서비스 내에 게시한 게시물을 “도톨”이 다음 목적으로
          사용하는 것을 허락합니다.
        </Text>
        <FlexView css={{ paddingLeft: `8px` }} gap={4}>
          <Text xSmall={isMobile} small>
            1) 서비스 내에서 게시물을 사용하기 위하여 게시물의 크기를 변환하거나
            단순화하는 등의 방식으로 수정하는 것
          </Text>
          <Text xSmall={isMobile} small>
            2) “도톨”의 서비스를 홍보하기 위한 목적으로 미디어, 통신사 등에게
            게시물의 내용을 보도, 방영하게 하는 것.
          </Text>
        </FlexView>
        <Text xSmall={isMobile} small>
          5. 회원탈퇴를 하면 본인의 게시물 일체에 대한 모든 권리를 잃게 됩니다.
          작성했던 게시물은 자동으로 삭제되지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          6. 회원의 게시물이 제3자의 저작권 등 지적재산권을 침해함으로써
          발생하는 민∙형사상의 책임은 전적으로 회원이 부담하여야 합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        게시물의 관리
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 회원의 게시물이 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및
          저작권법 등 관련법에 위반되는 내용을 포함하는 경우,
          <br />
          &nbsp; &nbsp; 권리자는 관련법이 정한 절차에 따라 해당 게시물의
          게시중단 및 삭제 등을 요청할 수 있으며, “도톨”은 관련법에 따라 조치를
          취합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 전항에 따른 권리자의 요청이 없는 경우라도 권리 침해가
          인정될 만한 사유가 있거나 본 약관 및 기타 내부 정책, 관련법에
          <br />
          &nbsp; &nbsp; 위반되는 경우에는 관련법에 따라 해당 게시물에 대해
          임시조치 등을 취할 수 있습니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        서비스 이용의 중지 및 해지
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. 회원은 “도톨”에 언제든지 회원탈퇴를 요청할 수 있으며, “도톨”은
          요청을 받은 즉시 처리합니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 회원이 &apos;회원의 의무&apos;를 위반하거나 서비스의
          정상적인 운영을 방해한 경우에는 회원 자격을 제한하거나 해지할 수
          있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”은 회원이 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과
          같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. 회원이 본 조에 따른 “도톨”의 이용제한에 불복하고자 할 때에는 통보를
          받은 날로부터 15일 이내에 이용제한에 불복하는 이유를 기재한
          <br />
          &nbsp; &nbsp; 이의 신청서를 전자우편 또는 이에 준하는 방법으로
          제출하여야 합니다.
        </Text>
      </FlexView>
    </FlexView>

    <FlexView gap={4}>
      <Text small={isMobile} bold>
        면책사항
      </Text>
      <FlexView gap={4}>
        <Text xSmall={isMobile} small>
          1. “도톨”은 회원의 귀책사유로 발생한 서비스 이용의 장애에 대하여는
          책임을 지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          2. “도톨”은 서비스를 통해 제공된 정보의 신뢰도나 정확성을 보증하지
          않고 그로 인해 발생한 손해에 대해 책임지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          3. “도톨”은 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여
          거래 등을 한 경우에는 책임이 면제됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          4. “도톨”은 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으며
          이로 인한 손해를 배상할 책임도 없습니다.
        </Text>
        <Text xSmall={isMobile} small>
          5. “도톨”은 천재지변, 기간통신사업자의 서비스 중지, 기술적 결함 등
          불가항력으로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          6. “도톨”은 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로
          서비스가 중지되거나 장애가 발생한 경우에 대하서는 책임이 면제됩니다.
        </Text>
        <Text xSmall={isMobile} small>
          7. “도톨”은 회원의 게시물을 등록 전에 사전심사 하거나 상시적으로
          검토하여야 할 의무가 없으며, 그 결과에 대해 책임지지 않습니다.
        </Text>
        <Text xSmall={isMobile} small>
          8. “도톨”은 관련 법령이나 정책에 따라 서비스의 이용시간을 제한할 수
          있으며, 그로 인해 발생하는 사항에 대해서는 책임지지 않습니다.
        </Text>
      </FlexView>
    </FlexView>
  </FlexView>
);
