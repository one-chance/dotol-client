import { FlexView } from '@components/common';
import { FindUserId, FindPassword } from '@components/user-pages';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(360);

  return (
    <FlexView
      content="center"
      css={{
        margin: `auto`,
        padding: `20px 8px`,
      }}
      gap={40}
      row={!isMobile}
      wrap
    >
      <FindUserId />

      <FindPassword />
    </FlexView>
  );
};
