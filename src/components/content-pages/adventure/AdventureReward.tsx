import { FlexView, Text } from '@components/common';
import { Colors } from '@styles/token';

type REWARD = {
  weapon: string[];
  clothes: string[];
  title: string;
};

interface AdventureRewardProps {
  list: REWARD;
  isMobile: boolean;
}

export default function AdventureReward({
  list,
  isMobile,
}: AdventureRewardProps) {
  return (
    <FlexView css={{ width: isMobile ? `350px` : `480px` }} gap={10}>
      <FlexView border="lightgray">
        <FlexView
          color="lightgray"
          content="center"
          css={{ minHeight: `36px`, padding: isMobile ? `0 4px` : `0 8px` }}
        >
          <Text size={isMobile ? `small` : `normal`} weight="bold">
            탐험일지무기 (탐험도 60%)
          </Text>
        </FlexView>

        <FlexView css={{ padding: isMobile ? `4px` : `8px` }} gap={4} row wrap>
          {list.weapon.map(weapon => (
            <Text
              key={weapon}
              css={{ lineHeight: `28px` }}
              size={isMobile ? `small` : `normal`}
            >
              {weapon}
            </Text>
          ))}
        </FlexView>

        <FlexView
          color="lightgray"
          content="center"
          css={{ minHeight: `36px`, padding: isMobile ? `0 4px` : `0 8px` }}
        >
          <Text size={isMobile ? `small` : `normal`} weight="bold">
            탐험일지의상 (탐험도 100%)
          </Text>
        </FlexView>

        <FlexView css={{ padding: isMobile ? `4px` : `8px` }} gap={4} row wrap>
          {list.clothes.map(weapon => (
            <Text
              key={weapon}
              css={{ lineHeight: `28px` }}
              size={isMobile ? `small` : `normal`}
            >
              {weapon}
            </Text>
          ))}
        </FlexView>

        <FlexView
          color="lightgray"
          content="center"
          css={{ minHeight: `36px`, padding: isMobile ? `0 4px` : `0 8px` }}
        >
          <Text size={isMobile ? `small` : `normal`} weight="bold">
            칭호 (탐험도 100%)
          </Text>
        </FlexView>

        <FlexView css={{ padding: isMobile ? `4px` : `8px` }} gap={4} row wrap>
          <Text
            css={{ lineHeight: `28px` }}
            size={isMobile ? `small` : `normal`}
          >
            {list.title}
          </Text>
        </FlexView>
        <FlexView />
      </FlexView>

      <FlexView gap={4}>
        <Text color={Colors.red} size="small">
          ● 부여/국내주막 탐험일지연구가가 장비를 교환해줍니다.
        </Text>
        <Text color={Colors.red} size="small">
          ● 100만전이 필요하고, 장비는 전속 상태로 지급됩니다.
        </Text>
      </FlexView>
    </FlexView>
  );
}
