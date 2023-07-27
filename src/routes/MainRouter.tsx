import { useWindowSize } from '@utils/hooks';

import MainRoutes from './MainRoutes';

const MainRouter = () => {
  const { width } = useWindowSize();

  return (
    <main
      style={{
        display: `flex`,
        marginTop: width > 1080 ? `80px` : `60px`,
        minHeight: width > 1080 ? `calc(100vh - 128px)` : `calc(100vh - 108px)`,
      }}
    >
      <MainRoutes />
    </main>
  );
};

export default MainRouter;
