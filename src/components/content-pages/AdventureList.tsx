import { FlexView, Text } from '@components/common';
import DATA from '@data/adventure.json';
import { AdventureTab } from '@interfaces/content';
import { Colors } from '@styles/system';

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
  tab: AdventureTab;
  isMobile?: boolean;
};

const SUB_TAB: Record<AdventureTab, string[]> = {
  괴수: [`괴수`, `탐험도`, `주요위치`],
  물품: [`물품`, `탐험도`, `획득방법`],
  임무: [`임무`, `탐험도`, `시작 NPC`],
  탐방: [`탐방`, `탐험도`, `상세위치`],
  보상: [`탐험일지무기`, `탐험일지의상`, `칭호`],
};

const messages: Record<AdventureTab, string[]> = {
  괴수: [
    `괴수 탐험도는 5단계로 나뉘어 단계마다 탐험도를 획득합니다.`,
    `1N = 발견(1점), 도전(2점), 미숙(3점), 숙련(4점), 정복(5점)`,
  ],
  물품: [`인벤토리에서 해당하는 아이템을 사용하면 탐험도를 획득합니다.`],
  임무: [`임무를 완료하면 탐험도를 획득합니다.`],
  탐방: [`해당 지역에 방문하여 거닐다보면 탐험도를 획득합니다.`],
  보상: [
    `부여/국내주막의 탐험일지연구가가 원하는 장비로 교환해줍니다.`,
    `교환시 100만전이 필요하고, 장비는 전속 상태로 지급됩니다.`,
  ],
};

export default ({ location, tab, isMobile }: ListProps) => {
  const selectedData: DETAIL[] | REWARD = DATA[location][tab];

  return (
    <FlexView gap={10}>
      <FlexView
        css={{
          maxWidth: isMobile ? `360px` : `540px`,
          border: `1px solid lightgray`,
          margin: `0 auto`,
        }}
      >
        {tab === `보상` ? (
          <FlexView
            color="lightgray"
            css={{ minHeight: `36px` }}
            items="center"
            row
          >
            <Text
              css={{ paddingLeft: isMobile ? `4px` : `8px` }}
              small={isMobile}
              fill
              semiBold
            >
              {SUB_TAB[tab][0]} (탐험도 60%)
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
              css={{
                width: isMobile ? `44px` : `140px`,
                paddingLeft: isMobile ? 0 : `4px`,
              }}
              small={isMobile}
              semiBold
            >
              {SUB_TAB[tab][1]}
            </Text>
          </FlexView>
        )}

        {tab === `보상` ? (
          <FlexView>
            <FlexView gap={4} row wrap>
              {(selectedData as REWARD).weapon.map(weapon => (
                <Text
                  key={weapon}
                  css={{
                    paddingLeft: isMobile ? `4px` : `8px`,
                    lineHeight: `28px`,
                  }}
                  small={isMobile}
                >
                  {weapon}
                </Text>
              ))}
            </FlexView>

            <FlexView
              color="lightgray"
              css={{ minHeight: `36px` }}
              items="center"
              row
            >
              <Text
                css={{ paddingLeft: isMobile ? `4px` : `8px` }}
                small={isMobile}
                semiBold
              >
                탐험일지의상 (탐험도 100%)
              </Text>
            </FlexView>

            <FlexView gap={4} row wrap>
              {(selectedData as REWARD).clothes.map(clothes => (
                <Text
                  key={clothes}
                  css={{
                    paddingLeft: isMobile ? `4px` : `8px`,
                    lineHeight: `28px`,
                  }}
                  small={isMobile}
                >
                  {clothes}
                </Text>
              ))}
            </FlexView>

            <FlexView>
              <FlexView
                color="lightgray"
                css={{ minHeight: `36px` }}
                items="center"
                row
              >
                <Text
                  css={{ paddingLeft: isMobile ? `4px` : `8px` }}
                  small={isMobile}
                  semiBold
                >
                  칭호 (탐험도 100%)
                </Text>
              </FlexView>

              <Text
                css={{
                  paddingLeft: isMobile ? `4px` : `8px`,
                  lineHeight: `28px`,
                }}
                small={isMobile}
              >
                {(selectedData as REWARD).title}
              </Text>
            </FlexView>
          </FlexView>
        ) : (
          <FlexView>
            {(selectedData as DETAIL[]).map(item => (
              <FlexView
                key={item.name}
                css={{
                  minHeight: `32px`,
                  borderTop: `1px solid lightgray`,
                  padding: `4px 0`,
                }}
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
                    width: isMobile ? `44px` : `140px`,
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

      <FlexView css={{ padding: `0 5px` }} gap={4} wrap>
        {messages[tab].map(message => (
          <Text
            key={message}
            color={Colors.red}
            small={!isMobile}
            xSmall={isMobile}
          >
            * {message}
          </Text>
        ))}
      </FlexView>
    </FlexView>
  );
};
