import { Footer, FooterMobile } from '@components/layout';
import { useWindowSize } from '@utils/hooks';
import { Route, Routes } from 'react-router-dom';

export default () => {
  const { width } = useWindowSize();

  return (
    <Routes>
      <Route element={width > 400 ? <Footer /> : <FooterMobile />} path="/*" />
    </Routes>
  );
};
