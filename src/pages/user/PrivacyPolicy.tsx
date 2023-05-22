import { useState, useEffect } from 'react';

import { FlexView } from '@components/common';
import { Privacy } from '@components/terms';
import { useWindowSize } from '@utils/hooks';

export default () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 400);

  useEffect(() => {
    if (width < 400) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      <Privacy isMobile={isMobile} />
    </FlexView>
  );
};
