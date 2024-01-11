import { FlexView, Image, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

export default function NewCostumeSection() {
  const isMobile = useResponsive(400);

  return (
    <FlexView
      border="lightgray"
      css={{ padding: isMobile ? `8px` : `12px` }}
      fill={!isMobile}
      gap={5}
      radius={4}
    >
      <FlexView content="between" row>
        <Text size={isMobile ? `small` : `normal`} weight="bold">
          1월 신규 치장
        </Text>
      </FlexView>

      <FlexView gap={10} fill>
        <FlexView fill>
          <Text size={isMobile ? `xSmall` : `small`} weight="semiBold">
            멋진의상재봉틀 - 백악산군 의상
          </Text>
          <FlexView content="center" items="end" fill row wrap>
            <Image alt="이미지1" height={160} src="/1.gif" width={250} />
            <Image alt="이미지2" height={135} src="/2.gif" width={250} />
          </FlexView>
        </FlexView>

        <FlexView fill>
          <Text size="small" weight="semiBold">
            의상수선가위 - 명문교복 의상
          </Text>
          <FlexView center fill row wrap>
            <Image alt="이미지3" height={98} src="/3.png" width={218} />
          </FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  );
}
