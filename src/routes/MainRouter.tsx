import { Route, Routes } from 'react-router-dom';

import * as MainRoutes from './MainRoutes';

export default () => (
  <main>
    <Routes>
      {Object.entries(MainRoutes).map(([key, value]) => (
        <Route key={key} {...value} />
      ))}
    </Routes>
  </main>
);
