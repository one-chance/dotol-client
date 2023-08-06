import { FooterRouter, HeaderRouter, MainRouter } from '@routes/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <HeaderRouter /> */}
      <MainRouter />
      {/* <FooterRouter /> */}
    </QueryClientProvider>
  );
};
