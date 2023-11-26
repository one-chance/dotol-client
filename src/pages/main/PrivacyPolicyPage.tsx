import { useEffect } from 'react';

import { FlexView } from '@components/common';
import { Privacy } from '@components/terms-page';
import { useResponsive } from '@hooks/index';

export default function PrivacyPolicyPage() {
  const isMobile = useResponsive(400);

  useEffect(() => {
    document.title = `도톨 | 개인정보처리방침`;
  }, []);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
    >
      <Privacy isMobile={isMobile} />
    </FlexView>
  );
}
