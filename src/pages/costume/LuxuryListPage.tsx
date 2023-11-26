import { FlexView, Text } from '@components/common';
import { LuxuryList } from '@components/costume-pages';
import { useResponsive } from '@hooks/index';

export default function LuxuryListPage() {
  const isMobile = useResponsive(960);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text large={isMobile} xLarge={!isMobile} bold>
        명품의 목록
      </Text>

      <LuxuryList />
    </FlexView>
  );
}
