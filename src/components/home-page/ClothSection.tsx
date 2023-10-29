import { FlexView, Image, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

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
          10월 신규 치장
        </Text>
      </FlexView>

      <FlexView gap={10} fill>
        <FlexView fill>
          <Text small={!isMobile} xSmall={isMobile} semiBold>
            멋진의상재봉틀 - 풍월요괴고 의상
          </Text>
          <FlexView content="center" items="end" fill row wrap>
            <Image alt="이미지1" height={160} src="/1.png" width={120} />
            <Image alt="이미지2" height={160} src="/2.png" width={120} />
          </FlexView>
        </FlexView>

        <FlexView fill>
          <Text semiBold small>
            의상수선가위 - 고스트헌터 의상
          </Text>
          <FlexView center fill row wrap>
            <Image alt="이미지3" height={180} src="/3.gif" width={180} />
            <Image alt="이미지3" height={180} src="/4.gif" width={180} />
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
