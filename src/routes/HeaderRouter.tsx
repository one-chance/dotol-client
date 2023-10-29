import { Route, Routes } from 'react-router-dom';

import { Header, HeaderMobile } from '@components/layout';
import { useResponsive } from '@hooks/index';

const HeaderRouter = () => {
  const isMobile = useResponsive(1040);

  return (
    <Routes>
      <Route element={isMobile ? <HeaderMobile /> : <Header />} path="/*" />
    </Routes>
  );
};

export default HeaderRouter;
