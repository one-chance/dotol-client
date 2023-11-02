import { useResponsive } from '@hooks/index';

import MainRoutes from './MainRoutes';

export default function MainRouter() {
  const isMobile = useResponsive(1040);

  return (
    <main
      style={{
        display: `flex`,
        marginTop: isMobile ? `60px` : `80px`,
        flex: 1,
      }}
    >
      <MainRoutes />
    </main>
  );
}
