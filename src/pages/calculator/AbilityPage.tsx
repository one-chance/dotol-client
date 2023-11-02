import { AbilityCalculator } from '@components/calculator-pages';
import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function AbilityPage() {
  const isMobile = useResponsive(580);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `0 0 40px 0` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={20}>
        <Text bold center xxLarge>
          능력치 계산기
        </Text>
        <AbilityCalculator />
      </FlexView>
    </FlexView>
  );
}
