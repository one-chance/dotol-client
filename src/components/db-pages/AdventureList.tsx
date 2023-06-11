import { FlexView, Text } from '@components/common';
import DATA from '@data/adventure.json';
import { TAB } from '@interfaces/adventure';

type DETAIL = {
  name: string;
  score: string;
  detail: string;
};

type REWARD = {
  weapon: string[];
  clothes: string[];
  title: string;
};

type ListProps = {
  location: number;
  tab: TAB;
  isMobile?: boolean;
};

const SUB_TAB: Record<TAB, string[]> = {
  괴수: [`괴수`, `탐험도`, `주요위치`],
  물품: [`물품`, `탐험도`, `획득방법`],
  임무: [`임무`, `탐험도`, `시작 NPC`],
  탐방: [`탐방`, `탐험도`, `상세위치`],
  보상: [`탐험일지무기`, `탐험일지의상`, `칭호`],
};

const messages: Record<TAB, string[]> = {
  괴수: [
    `괴수 탐험도는 5단계로 나누어져 있으며 각 단계마다 탐험도를 획득합니다.`,
    `ex. 1N = 발견(1점), 도전(2점), 미숙(3점), 숙련(4점), 정복(5점)`,
  ],
  물품: [`인벤토리에서 해당하는 아이템을 사용하면 탐험도를 획득합니다.`],
  임무: [`임무를 완료하면 탐험도를 획득합니다.`],
  탐방: [`해당 지역에 방문하여 거닐다보면 탐험도를 획득합니다.`],
  보상: [
    `탐험도를 60% 달성하면 무기, 100% 달성하면 의상과 칭호를 얻습니다.`,
    `부여/국내 주막의 탐험일지연구가를 통해 100만전에 교환할 수 있습니다.`,
    `단, 교환된 장비는 전속 상태로 지급됩니다.`,
  ],
};

export default ({ location, tab, isMobile }: ListProps) => {
  const selectedData: DETAIL[] | REWARD = DATA[location][tab];

  return (
    <FlexView gap={10}>
      <FlexView css={{ padding: `0 5px` }} gap={4}>
        {messages[tab].map((message, index) => (
          <Text key={message} color="blue" small>
            {message}
          </Text>
        ))}
      </FlexView>

      <FlexView css={{ maxWidth: `542px`, border: `1px solid lightgray` }}>
        {tab === `보상` ? (
          <FlexView
            color="lightgray"
            css={{ minHeight: `36px` }}
            items="center"
            row
          >
            <Text
              css={{ width: isMobile ? `120px` : `180px`, paddingLeft: `8px` }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][0]}
            </Text>

            <Text
              css={{
                width: isMobile ? `120px` : `180px`,
                paddingLeft: `8px`,
              }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][1]}
            </Text>

            <Text
              css={{ width: isMobile ? `120px` : `180px`, paddingLeft: `8px` }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][2]}
            </Text>
          </FlexView>
        ) : (
          <FlexView
            color="lightgray"
            css={{ minHeight: `36px` }}
            items="center"
            row
          >
            <Text
              css={{
                width: isMobile ? `150px` : `200px`,
                paddingLeft: isMobile ? `4px` : `8px`,
              }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][0]}
            </Text>

            <Text
              css={{
                width: isMobile ? `160px` : `200px`,
                paddingLeft: isMobile ? `4px` : `8px`,
              }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][2]}
            </Text>

            <Text
              css={{ width: isMobile ? `40px` : `140px`, paddingLeft: `4px` }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][1]}
            </Text>
          </FlexView>
        )}

        {tab === `보상` ? (
          <FlexView row>
            <FlexView>
              {(selectedData as REWARD).weapon.map(weapon => (
                <FlexView
                  content="center"
                  css={{
                    width: isMobile ? `120px` : `180px`,
                    minHeight: `32px`,
                  }}
                >
                  <Text
                    key={weapon}
                    css={{
                      paddingLeft: isMobile ? `4px` : `8px`,
                    }}
                    small={isMobile}
                  >
                    {weapon}
                  </Text>
                </FlexView>
              ))}
            </FlexView>

            <FlexView
              css={{
                borderLeft: `1px solid lightgray`,
                borderRight: `1px solid lightgray`,
              }}
            >
              {(selectedData as REWARD).clothes.map(clothes => (
                <FlexView
                  content="center"
                  css={{
                    width: isMobile ? `120px` : `180px`,
                    minHeight: `32px`,
                  }}
                >
                  <Text
                    key={clothes}
                    css={{
                      paddingLeft: isMobile ? `4px` : `8px`,
                    }}
                    small={isMobile}
                  >
                    {clothes}
                  </Text>
                </FlexView>
              ))}
            </FlexView>

            <FlexView>
              <FlexView
                content="center"
                css={{ width: isMobile ? `120px` : `180px`, minHeight: `32px` }}
              >
                <Text
                  css={{
                    paddingLeft: isMobile ? `4px` : `8px`,
                  }}
                  small={isMobile}
                >
                  {(selectedData as REWARD).title}
                </Text>
              </FlexView>
            </FlexView>
          </FlexView>
        ) : (
          <FlexView>
            {(selectedData as DETAIL[]).map(item => (
              <FlexView
                key={item.name}
                css={{ minHeight: `32px`, borderTop: `1px solid lightgray` }}
                items="center"
                row
              >
                <Text
                  css={{
                    width: isMobile ? `150px` : `200px`,
                    paddingLeft: isMobile ? `4px` : `8px`,
                  }}
                  small={isMobile}
                >
                  {item.name}
                </Text>

                <Text
                  css={{
                    width: isMobile ? `160px` : `200px`,
                    paddingLeft: isMobile ? `4px` : `8px`,
                  }}
                  small={isMobile}
                >
                  {item.detail}
                </Text>

                <Text
                  css={{
                    width: isMobile ? `40px` : `140px`,
                    paddingLeft: isMobile ? `4px` : `8px`,
                  }}
                  small={isMobile}
                >
                  {item.score}
                </Text>
              </FlexView>
            ))}
          </FlexView>
        )}
      </FlexView>
    </FlexView>
  );
};
