import { useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { checkNewVisitor, getIPAddress } from '@apis/index';
import { FlexView } from '@components/common';
import { Toast } from '@components/toast';
import { Sidebar } from '@components/menu-page';
import { FooterRouter, HeaderRouter, MainRouter } from '@routes/index';
import { toastState } from '@states/index';
import { ToastType } from '@interfaces/index';
import { useResponsive } from './hooks';

export default function App() {
  const isMobile = useResponsive(1040);
  const queryClient = new QueryClient();
  const toast = useRecoilValue(toastState);

  const visitor = async () => {
    checkNewVisitor(await getIPAddress());
  };

  useEffect(() => {
    visitor();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <FlexView row css={{ minHeight: '100vh' }}>
        {!isMobile && <Sidebar />}

        <FlexView fill>
          <HeaderRouter />
          <MainRouter />
          <FooterRouter />
          {toast.open && (
            <Toast type={toast.type as ToastType} message={toast.message} />
          )}
        </FlexView>
      </FlexView>
    </QueryClientProvider>
  );
}
