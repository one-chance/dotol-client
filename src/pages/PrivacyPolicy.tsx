import { FlexView } from '@components/common';
import { Privacy } from '@components/terms';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      <Privacy isMobile={isMobile} />
    </FlexView>
  );
};
