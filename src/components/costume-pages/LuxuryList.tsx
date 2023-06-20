import { FlexView, Image, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const NAMES = [
  `마법학교`,
  `은하요술사`,
  `풀잎`,
  `악마사냥꾼`,
  `은빛미호`,
  `시간여행자`,
  `월야산신`,
  `인형술사`,
  `잔혹천사`,
  `천상의심포니`,
  `달빛마중`,
];

export default () => {
  const isMobile = useResponsive(1080);

  return (
    <FlexView>
      <Text bold center xxLarge>
        명품의 시리즈
      </Text>

      <FlexView gap={16} row wrap>
        <FlexView color="lightgray" css={{ padding: `10px` }} gap={8}>
          {NAMES.map((name, index) => (
            <Text key={name} medium>
              {index + 1}기 {name} 시리즈
            </Text>
          ))}
        </FlexView>

        <FlexView
          color="lightgray"
          css={{ padding: `10px`, borderRadius: `4px` }}
          gap={8}
        >
          파츠
        </FlexView>
      </FlexView>

      <FlexView
        css={{
          maxWidth: `700px`,
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `0 10px`,
        }}
        center
      >
        <FlexView
          css={{
            maxWidth: `fit-content`,
          }}
        >
          <Image src="/luxury/11.png" />
        </FlexView>
      </FlexView>
      <Text color={Colors.red}>
        * 시리즈 6부위를 착용하여 전용 이펙트가 발동된 이미지입니다.
      </Text>
    </FlexView>
  );
};
