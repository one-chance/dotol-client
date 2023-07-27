import { Header, HeaderMobile } from '@components/layout';
import { useWindowSize } from '@utils/hooks';
import { Route, Routes } from 'react-router-dom';

export default () => {
  const { width } = useWindowSize();

  return (
    <Routes>
      <Route
        element={width >= 1040 ? <Header /> : <HeaderMobile />}
        path="/*"
      />
    </Routes>
  );
};
