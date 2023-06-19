import { AbilityCalculator } from '@components/calculator-pages';
import { FlexView, Text } from '@components/common';

export default () => (
  <FlexView css={{ margin: `40px auto` }} gap={20}>
    <Text bold center xxLarge>
      능력치 계산기
    </Text>
    <AbilityCalculator />
  </FlexView>
);
