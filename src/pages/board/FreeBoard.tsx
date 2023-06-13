import { Board, BoardMobile } from '@components/board-pages';
import { FlexView } from '@components/common';
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
      gap={20}
    >
      {isMobile ? <BoardMobile category="free" /> : <Board category="free" />}
    </FlexView>
  );
};
