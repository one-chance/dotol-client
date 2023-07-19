import { FlexView, Text } from '@components/common';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(800);

  return (
    <FlexView
      css={{
        maxWidth: `800px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `40px auto`,
      }}
    >
      <Text>팁 게시판</Text>
    </FlexView>
  );
};
