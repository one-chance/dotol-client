import { useState } from 'react';

import { FlexView } from '@components/common';
import {
  SignUpOne,
  SignUpTwo,
  SignUpThree,
  SignUpFour,
} from '@components/user-pages';
import { useResponsive } from '@hooks/index';

type Phase = 1 | 2 | 3 | 4;

export default function SignUpPage() {
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
    <FlexView css={{ margin: `0 auto` }} items="center">
      <FlexView
        border="lightgray"
        css={{
          width: isMobile ? `350px` : `440px`,
          padding: isMobile ? `20px` : `40px`,
        }}
        radius={4}
      >
        {PhaseContent[phase]}
      </FlexView>
    </FlexView>
  );
}
