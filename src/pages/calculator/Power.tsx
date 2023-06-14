import { AntiquityPower, LevelPower } from '@components/calculator-pages/power';
import { FlexView, Text } from '@components/common';

export default () => (
  <FlexView css={{ margin: `20px auto` }} gap={20}>
    <LevelPower />

    <AntiquityPower />
  </FlexView>
);
