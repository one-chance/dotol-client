import { FlexView, Image, Text } from '@components/common';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);

  return (
    <FlexView
      css={{
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: `12px`,
        margin: isMobile ? `0 5px` : undefined,
      }}
      fill={!isMobile}
      gap={5}
    >
      <FlexView content="between" row>
        <Text small={isMobile} bold>
          8월 신규 치장
        </Text>
        <Text small={!isMobile} xSmall={isMobile}>
          입어보기
        </Text>
      </FlexView>

      <FlexView gap={10} fill>
        <FlexView fill>
          <Text small={!isMobile} xSmall={isMobile} semiBold>
            멋진의상재봉틀 - 자체발광
          </Text>
          <FlexView content="center" items="end" fill row wrap>
            <Image src="/1.gif" />
            <Image src="/2.gif" />
          </FlexView>
        </FlexView>

        <FlexView fill>
          <Text semiBold small>
            의상수선가위 - 이매망량
          </Text>
          <FlexView center fill row wrap>
            <Image css={{ maxHeight: `160px` }} src="/3.png" />
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
