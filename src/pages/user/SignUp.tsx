import { useState } from 'react';

import { FlexView } from '@components/common';
import {
  SignUpOne,
  SignUpTwo,
  SignUpThree,
  SignUpFour,
} from '@components/user-pages';
import { useResponsive } from '@utils/hooks';

type Phase = 1 | 2 | 3 | 4;

export default () => {
  const isMobile = useResponsive(600);
  const [phase, setPhase] = useState<Phase>(1);

  const goPhase = (_phase: Partial<Phase>) => {
    setPhase(_phase);
  };

  const PhaseContent = {
    1: <SignUpOne isMobile={isMobile} setPhase={goPhase} />,
    2: <SignUpTwo isMobile={isMobile} setPhase={goPhase} />,
    3: <SignUpThree isMobile={isMobile} setPhase={goPhase} />,
    4: <SignUpFour isMobile={isMobile} />,
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }}>
      <FlexView
        css={{
          border: isMobile ? 0 : `1px solid lightgray`,
          borderRadius: `8px`,
          padding: isMobile ? `10px` : `40px`,
        }}
      >
        {PhaseContent[phase]}
      </FlexView>
    </FlexView>
  );
};
