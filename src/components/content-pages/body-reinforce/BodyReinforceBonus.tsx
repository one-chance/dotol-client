import { FlexView, Text } from '@components/common';

type Bonus = {
  단계: number;
  능력치: number[];
  목록?: string[];
};

type BonusListProps = {
  isMobile: boolean;
  list: Bonus[];
};

export default function BonusList({ isMobile, list }: BonusListProps) {
  return (
    <FlexView border="lightgray">
      <FlexView color="lightgray" css={{ height: `40px` }} items="center" row>
        <Text
          css={{ width: isMobile ? `40px` : `60px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          단계
        </Text>
        <Text
          css={{ width: isMobile ? `120px` : `140px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          능력치
        </Text>
        <Text
          css={{ width: isMobile ? `188px` : `398px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          목록
        </Text>
      </FlexView>

      {list?.map(info => (
        <FlexView
          key={info.단계}
          css={{
            padding: isMobile ? `4px 0` : `8px 0`,
            borderTop: `1px solid lightgray`,
          }}
          items="center"
          row
        >
          <FlexView css={{ width: isMobile ? `40px` : `60px` }} center>
            <Text size={isMobile ? `xSmall` : `small`}>{info.단계}</Text>
          </FlexView>

          <FlexView css={{ width: isMobile ? `120px` : `140px` }} center>
            {info.능력치.map(ability => (
              <Text key={ability} size={isMobile ? `xSmall` : `small`}>
                {ability}
              </Text>
            ))}
          </FlexView>

          <FlexView
            css={{ width: isMobile ? `188px` : `398px` }}
            gap={isMobile ? 4 : 8}
            row
            wrap
          >
            {info.목록?.map(equip => (
              <Text key={equip} size={isMobile ? `xSmall` : `small`}>
                {equip}
              </Text>
            ))}
          </FlexView>
        </FlexView>
      ))}
    </FlexView>
  );
}
