import { useWindowSize } from '@utils/hooks';

import MainRoutes from './MainRoutes';

export default () => {
  const { width } = useWindowSize();

  return (
    <main
      style={{
        display: `flex`,
        marginTop: width > 1080 ? `100px` : `60px`,
        minHeight: width > 1080 ? `calc(100vh - 148px)` : `calc(100vh - 108px)`,
      }}
    >
      <MainRoutes />
    </main>
  );
};
