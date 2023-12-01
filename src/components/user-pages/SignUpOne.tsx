import { useState } from 'react';

import { Button, Checkbox, FlexView, Text } from '@components/common';
import { Privacy, Service } from '@components/terms-page';
import { Colors } from '@styles/index';

type Phase = 1 | 2 | 3 | 4;

type SignUpProps = {
  isMobile: boolean;
  setPhase: (_phase: Partial<Phase>) => void;
};

export default function SignUpOne({ isMobile, setPhase }: SignUpProps) {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const nextPhase = () => {
    setPhase(2);
  };

  return (
    <FlexView gap={isMobile ? 24 : 40}>
      <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
        약관 동의
      </Text>

      <FlexView gap={20}>
        <FlexView gap={8}>
          <FlexView
            content="between"
            css={{ cursor: `pointer` }}
            items="center"
            row
            onClick={() => setAgreeTerms(!agreeTerms)}
          >
            <Text size={isMobile ? `small` : `normal`} weight="semiBold">
              서비스 이용약관에 동의합니다.
            </Text>
            <Checkbox
              checked={agreeTerms}
              size={20}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
          </FlexView>

          <FlexView
            color={Colors.primary10}
            css={{
              width: isMobile ? `320px` : `440px`,
              maxHeight: `150px`,
              overflowY: `auto`,
              padding: `10px`,
              '::-webkit-scrollbar': { display: `none` },
            }}
          >
            <Service isMobile />
          </FlexView>
        </FlexView>

        <FlexView gap={8}>
          <FlexView
            content="between"
            css={{ cursor: `pointer` }}
            items="center"
            row
            onClick={() => setAgreePolicy(!agreePolicy)}
          >
            <Text size={isMobile ? `small` : `normal`} weight="semiBold">
              개인정보 처리방침에 동의합니다.
            </Text>
            <Checkbox
              checked={agreePolicy}
              size={20}
              onChange={() => setAgreePolicy(!agreePolicy)}
            />
          </FlexView>

          <FlexView
            color={Colors.primary10}
            css={{
              width: isMobile ? `320px` : `440px`,
              maxHeight: `150px`,
              overflowY: `auto`,
              padding: `10px`,
              '::-webkit-scrollbar': { display: `none` },
            }}
          >
            <Privacy isMobile />
          </FlexView>
        </FlexView>
      </FlexView>

      <Button
        aria-label="다음"
        color={Colors.purple}
        css={{ width: isMobile ? `320px` : `440px`, minHeight: `40px` }}
        disabled={!agreeTerms || !agreePolicy}
        radius={4}
        onClick={nextPhase}
      >
        <Text
          color={Colors.white}
          size={isMobile ? `small` : `normal`}
          weight="semiBold"
        >
          다음
        </Text>
      </Button>
    </FlexView>
  );
}
