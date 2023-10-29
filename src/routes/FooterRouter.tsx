import { Route, Routes } from 'react-router-dom';

import { Footer, FooterMobile } from '@components/layout';
import { useResponsive } from '@hooks/index';

const FooterRouter = () => {
  const isMobile = useResponsive(400);

  return (
    <Routes>
      <Route element={isMobile ? <FooterMobile /> : <Footer />} path="/*" />
    </Routes>
  );
};

export default FooterRouter;
