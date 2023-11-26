import { Route, Routes } from 'react-router-dom';

import { Footer } from '@components/layout';

export default function FooterRouter() {
  return (
    <Routes>
      <Route element={<Footer />} path="/*" />
    </Routes>
  );
}
