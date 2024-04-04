import { useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { checkNewVisitor, getIPAddress } from '@apis/index';
import { FlexView } from '@components/common';
import { Sidebar } from '@components/menu-page';
import { Toast } from '@components/toast';
import { useResponsive } from '@hooks/index';
import { ToastType } from '@interfaces/index';
import { FooterRouter, HeaderRouter, MainRouter } from '@routes/index';
import { toastState } from '@states/index';

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
      {!isMobile && <Sidebar />}

      <FlexView
        css={{
          // marginLeft: isMobile ? 0 : `280px`,
          minHeight: `100%`,
        }}
        fill
      >
        <HeaderRouter />
        <MainRouter />
        <FooterRouter />
        {toast.open && (
          <Toast message={toast.message} type={toast.type as ToastType} />
        )}
      </FlexView>
    </QueryClientProvider>
  );
}
