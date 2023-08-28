import { useEffect } from 'react';

import { FlexView } from '@components/common';
import { keyframes } from '@emotion/react';
import { Colors } from '@styles/system';

export default () => {
  const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
  `;

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return (
    <FlexView
      css={{
        position: `fixed`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: `#FFFFFF80`,
      }}
      center
    >
      <svg
        css={{
          animationName: spinAnimation,
          animationDuration: `1s`,
          animationIterationCount: `infinite`,
          animationTimingFunction: `linear`,
        }}
        fill="none"
        height={42}
        viewBox="0 0 13 14"
        width={39}
      >
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke={Colors.primary40}
        />
      </svg>
    </FlexView>
  );
};
