import { FlexView, Text } from '@components/common';
import { AdventureTab } from '@interfaces/index';
import { Colors } from '@styles/index';

type DETAIL = {
  name: string;
  score: string;
  detail: string;
};

type ListProps = {
  list: DETAIL[];
  tab: AdventureTab;
  isMobile?: boolean;
};

const SUB_TAB: { [key: string]: string[] } = {
  괴수: [`괴수`, `탐험도`, `주요위치`],
  물품: [`물품`, `탐험도`, `획득방법`],
  임무: [`임무`, `탐험도`, `시작 NPC`],
  탐방: [`탐방`, `탐험도`, `상세위치`],
};

const messages: { [key: string]: string[] } = {
  괴수: [
    `괴수 탐험도는 달성 단계마다 탐험도를 획득합니다.`,
    `1N = 발견(1), 도전(2), 미숙(3), 숙련(4), 정복(5)`,
  ],
  물품: [`인벤토리의 아이템을 사용하면 탐험도를 획득합니다.`],
  임무: [`임무를 완료하면 탐험도를 획득합니다.`],
  탐방: [`해당 지역에 방문하여 거닐다보면 탐험도를 획득합니다.`],
};

export default function AdventureList({ list, tab, isMobile }: ListProps) {
  return (
    <FlexView css={{ width: isMobile ? `350px` : `480px` }} gap={10}>
      <FlexView
        border="lightgray"
        css={{
          borderWidth: isMobile ? `1px 0` : `1px`,
        }}
      >
        <FlexView
          color="lightgray"
          css={{ minHeight: `36px` }}
          items="center"
          row
        >
          <Text
            css={{ width: isMobile ? `145px` : `200px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            {SUB_TAB[tab][0]}
          </Text>

          <Text
            css={{ width: isMobile ? `155px` : `200px` }}
            size={isMobile ? `small` : `normal`}
            weight="semiBold"
            center
          >
            {SUB_TAB[tab][2]}
          </Text>

          <Text
            css={{ width: isMobile ? `50px` : `78px` }}
            size={isMobile ? `small` : `normal`}
            weight="semiBold"
            center
          >
            {SUB_TAB[tab][1]}
          </Text>
        </FlexView>

        <FlexView>
          {list?.map(item => (
            <FlexView
              key={item.name}
              content="between"
              css={{
                minHeight: `32px`,
                borderTop: `1px solid lightgray`,
              }}
              items="center"
              row
            >
              <Text
                css={{ width: isMobile ? `145px` : `200px` }}
                size={isMobile ? `small` : `normal`}
                center
              >
                {item.name}
              </Text>

              <Text
                css={{ width: isMobile ? `155px` : `200px` }}
                size={isMobile ? `small` : `normal`}
                center
              >
                {item.detail}
              </Text>

              <Text
                css={{ width: isMobile ? `50px` : `78px` }}
                size={isMobile ? `small` : `normal`}
                center
              >
                {item.score}
              </Text>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>

      <FlexView gap={4}>
        {messages[tab].map(message => (
          <Text key={message} color={Colors.red} size="small">
            ● {message}
          </Text>
        ))}
      </FlexView>
    </FlexView>
  );
}
