import { useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { checkNewVisitor, getIPAddress } from '@apis/index';
import { FlexView } from '@components/common';
import { Toast } from '@components/toast';
import { FooterRouter, HeaderRouter, MainRouter } from '@routes/index';
import { useRecoilValue } from 'recoil';
import { toastState } from '@states/index';
import { ToastType } from '@interfaces/index';

export default function App() {
  const queryClient = new QueryClient();
  const toast = useRecoilValue(toastState);

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
        {toast.open && (
          <Toast type={toast.type as ToastType} message={toast.message} />
        )}
      </QueryClientProvider>
    </FlexView>
  );
}
