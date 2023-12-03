
import { FlexView, Text } from '@components/common';
import { CostumeList } from '@components/costume-pages';
import { useResponsive } from '@hooks/index';

export default function CostumeListPage() {
  const isMobile = useResponsive(650);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        치장 목록
      </Text>

      <CostumeList isMobile={isMobile} />
    </FlexView>
  );
}
