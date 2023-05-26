import { useWindowSize } from '@utils/hooks';
import { Route, Routes } from 'react-router-dom';

import * as MainRoutes from './MainRoutes';

export default () => {
  const { width } = useWindowSize();

  return (
    <main
      style={{ display: `flex`, marginTop: width > 600 ? `100px` : `62px` }}
    >
      <Routes>
        {Object.entries(MainRoutes).map(([key, value]) => (
          <Route key={key} {...value} />
        ))}
      </Routes>
    </main>
  );
};
