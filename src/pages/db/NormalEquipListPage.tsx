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
      <Text bold xLarge={!isMobile} large={isMobile}>
        일반장비 도감
      </Text>

      <NormalEquipList />
    </FlexView>
  );
}
