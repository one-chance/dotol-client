import { FlexView, Text } from '@components/common';

type REWARD = {
  weapon: string[];
  clothes: string[];
  title: string;
};

type RewardListProps = {
  data: REWARD;
};

export default ({ data }: RewardListProps) => (
  <FlexView css={{ maxHeight: `600px`, overflowY: `auto` }}>
    <FlexView items="start" row>
      <FlexView center fill>
        {data.weapon?.map(weapon => (
          <Text key={weapon}>{weapon}</Text>
        ))}
      </FlexView>

      <FlexView center fill>
        {data.clothes?.map(clothes => (
          <Text key={clothes}>{clothes}</Text>
        ))}
      </FlexView>

      <FlexView center fill>
        <Text>{data.title}</Text>
      </FlexView>
    </FlexView>
  </FlexView>
);
