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
};

export default ({ location, tab }: ListProps) => {
  const selectedData: DETAIL[] | REWARD = DATA[location][tab];
  const SUB_TAB: Record<TAB, string[]> = {
    괴수: [`괴수`, `점수`, `주요위치`],
    물품: [`물품`, `점수`, `획득방법`],
    임무: [`임무`, `점수`, `시작 NPC`],
    탐방: [`탐방`, `점수`, `상세위치`],
    보상: [`탐험무기`, `탐험의상`, `칭호`],
  };

  return (
    <FlexView>
      <FlexView css={{ minHeight: `36px` }} items="center" row>
        {SUB_TAB[tab].map(name => (
          <Text key={name} center fill semiBold>
            {name}
          </Text>
        ))}
      </FlexView>

      {tab === `보상` ? (
        // <RewardList data={selectedData as REWARD} />
        <FlexView css={{ maxHeight: `600px`, overflowY: `auto` }}>
          <FlexView items="start" row>
            <FlexView center fill>
              {(selectedData as REWARD).weapon.map(weapon => (
                <Text key={weapon}>{weapon}</Text>
              ))}
            </FlexView>

            <FlexView center fill>
              {(selectedData as REWARD).clothes.map(clothes => (
                <Text key={clothes}>{clothes}</Text>
              ))}
            </FlexView>

            <FlexView center fill>
              <Text>{(selectedData as REWARD).title}</Text>
            </FlexView>
          </FlexView>
        </FlexView>
      ) : (
        <FlexView css={{ maxHeight: `600px`, overflowY: `auto` }}>
          {(selectedData as DETAIL[]).map(item => (
            <FlexView key={item.name} css={{ minHeight: `28px` }} center row>
              <Text center fill>
                {item.name}
              </Text>
              <Text center fill>
                {item.score}
              </Text>
              <Text center fill>
                {item.detail}
              </Text>
            </FlexView>
          ))}
        </FlexView>
      )}
    </FlexView>
  );
};
