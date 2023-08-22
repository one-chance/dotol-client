import { useEffect } from 'react';

import { checkNewVisitor, getIPAddress } from '@apis/visit';
import { FlexView } from '@components/common';
import { FooterRouter, HeaderRouter, MainRouter } from '@routes/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default () => {
  const queryClient = new QueryClient();

  const visitor = async () => {
    checkNewVisitor(await getIPAddress());
  };

  useEffect(() => {
    visitor();
  }, []);

  return (
    <FlexView css={{ minHeight: `100vh` }}>
      <QueryClientProvider client={queryClient}>
        <HeaderRouter />
        <MainRouter />
        <FooterRouter />
      </QueryClientProvider>
    </FlexView>
  );
};
