import { Footer } from '@components/layout';
import { Route, Routes } from 'react-router-dom';

export default () => (
  <Routes>
    <Route element={<Footer />} path="/*" />
  </Routes>
);
