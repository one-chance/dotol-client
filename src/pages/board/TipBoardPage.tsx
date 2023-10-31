import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

const TipBoardPage = () => {
  const isMobile = useResponsive(800);

  return (
    <FlexView
      css={{
        maxWidth: `800px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
    >
      <Text>팁 게시판</Text>
    </FlexView>
  );
};

export default TipBoardPage;
