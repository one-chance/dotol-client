import { FlexView, Text } from '@components/common';

type LIST = {
  name: string;
  score: string;
  detail: string;
};

type DataProps = {
  data: LIST[];
};

export default ({ data }: DataProps) => (
  <FlexView css={{ maxHeight: `600px`, overflowY: `auto` }}>
    {data?.map(item => (
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
);
