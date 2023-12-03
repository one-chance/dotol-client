import { FlexView, Text } from '@components/common';
import { NormalEquipList } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

export default function NormalEquipListPage() {
  const isMobile = useResponsive(960);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: `0 auto`,
      }}
      gap={20}
    >
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        일반장비 목록
      </Text>

      <NormalEquipList />
    </FlexView>
  );
}
