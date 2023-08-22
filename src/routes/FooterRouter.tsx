import { Footer, FooterMobile } from '@components/layout';
import { useResponsive } from '@utils/hooks';
import { Route, Routes } from 'react-router-dom';

export default () => {
  const isMobile = useResponsive(400);

  return (
    <Routes>
      <Route element={isMobile ? <FooterMobile /> : <Footer />} path="/*" />
    </Routes>
  );
};
