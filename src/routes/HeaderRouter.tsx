import { Header, HeaderMobile } from '@components/layout';
import { useResponsive } from '@utils/hooks';
import { Route, Routes } from 'react-router-dom';

export default () => {
  const isMobile = useResponsive(1040);

  return (
    <Routes>
      <Route element={isMobile ? <HeaderMobile /> : <Header />} path="/*" />
    </Routes>
  );
};
