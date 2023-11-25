import { useResponsive } from '@hooks/index';

import MainRoutes from './MainRoutes';

export default function MainRouter() {
  const isMobile = useResponsive(1040);

  return (
    <main
      style={{
        display: `flex`,
        marginTop: isMobile ? `80px` : `60px`,
        padding: isMobile ? `0 5px` : `0 20px`,
        flex: 1,
      }}
    >
      <MainRoutes />
    </main>
  );
}
