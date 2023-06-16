import { Board, BoardMobile } from '@components/board-pages';
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
      {isMobile ? <BoardMobile category="tip" /> : <Board category="tip" />}
    </FlexView>
  );
};
