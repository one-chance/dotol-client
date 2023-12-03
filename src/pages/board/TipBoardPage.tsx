import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function TipBoardPage() {
  const isMobile = useResponsive(800);

  return (
    <FlexView
      css={{
        maxWidth: `800px`,
        width: `100%`,
        margin: `0 auto`,
      }}
    >
      <Text>팁 게시판</Text>
    </FlexView>
  );
}
