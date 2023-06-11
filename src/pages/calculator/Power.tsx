import { Antiquity, Level } from '@components/calculator-pages/power';
import { FlexView, Text } from '@components/common';

export default () => (
  <FlexView css={{ margin: `20px auto` }} gap={20}>
    <Level />

    <Antiquity />
  </FlexView>
);
