import { Header } from '@components/layout';
import { Route, Routes } from 'react-router-dom';

export default () => (
  <Routes>
    <Route element={<Header />} path="/*" />
  </Routes>
);
