import { useEffect } from 'react';

import { FlexView } from '@components/common';
import { Service } from '@components/terms-page';
import { useResponsive } from '@hooks/index';

const TermsOfServicePage = () => {
  const isMobile = useResponsive(400);

  useEffect(() => {
    document.title = `도톨 | 이용약관`;
  }, []);

  return (
    <FlexView
      css={{
        maxWidth: `960px`,
        width: `100%`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
    >
      <Service isMobile={isMobile} />
    </FlexView>
  );
};

export default TermsOfServicePage;
