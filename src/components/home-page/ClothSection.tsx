import { FlexView, Image, Text } from '@components/common';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(400);

  return (
    <FlexView
      css={{
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: isMobile ? `8px` : `12px`,
        margin: isMobile ? `0 5px` : undefined,
      }}
      fill={!isMobile}
      gap={5}
    >
      <FlexView content="between" row>
        <Text small={isMobile} bold>
          8월 신규 치장
        </Text>
      </FlexView>

      <FlexView gap={10} fill>
        <FlexView fill>
          <Text small={!isMobile} xSmall={isMobile} semiBold>
            멋진의상재봉틀 - 자체발광
          </Text>
          <FlexView content="center" items="end" fill row wrap>
            <Image alt="이미지1" height={140} src="/1.gif" width={120} />
            <Image alt="이미지2" height={140} src="/2.gif" width={120} />
          </FlexView>
        </FlexView>

        <FlexView fill>
          <Text semiBold small>
            의상수선가위 - 이매망량
          </Text>
          <FlexView center fill row wrap>
            <Image alt="이미지3" height={155} src="/3.png" width={332} />
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
