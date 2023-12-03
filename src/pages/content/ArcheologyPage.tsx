import { useQuery } from '@tanstack/react-query';

import { getArcheologyJSON } from '@apis/content';
import { FlexView, Text } from '@components/common';
import { ArcheologyList } from '@components/content-pages';
import { useResponsive } from '@hooks/index';

export default function ArcheologyPage() {
  const isMobile = useResponsive(610);

  const { data: archeologyList = [] } = useQuery({
    queryKey: [`archeologyList`],
    queryFn: () => getArcheologyJSON(),
  });

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold">
        고고학 정보
      </Text>

      <ArcheologyList isMobile={isMobile} list={archeologyList} />
    </FlexView>
  );
}
