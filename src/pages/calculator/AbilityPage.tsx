import { AbilityCalculator } from '@components/calculator-pages';
import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function AbilityPage() {
  const isMobile = useResponsive(580);

  return (
    <FlexView
      css={{
        margin: `0 auto`,
      }}
      gap={20}
    >
      <Text bold xxLarge={!isMobile} xLarge={isMobile}>
        능력치 계산기
      </Text>
      <AbilityCalculator />
    </FlexView>
  );
}
