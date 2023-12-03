import { FlexView, Text } from '@components/common';

type Ability = {
  등급: string;
  선택능력: string[];
  기본능력: string[];
};

type BodyReinforceAbilityProps = {
  isMobile: boolean;
  list: Ability[];
};

export default function BodyReinforceAbility({
  isMobile,
  list,
}: BodyReinforceAbilityProps) {
  return (
    <FlexView>
      <FlexView
        color="lightgray"
        css={{ minHeight: `40px` }}
        items="center"
        row
      >
        <Text
          css={{ minWidth: isMobile ? `58px` : `80px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          등급
        </Text>
        <Text
          css={{ minWidth: isMobile ? `145px` : `160px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          선택 능력
        </Text>
        <Text
          css={{ minWidth: isMobile ? `145px` : `360px` }}
          size={isMobile ? `small` : `normal`}
          weight="bold"
          center
        >
          기본 능력
        </Text>
      </FlexView>

      {list?.map((data: Ability) => (
        <FlexView
          key={data.등급}
          css={{
            padding: `4px 0`,
            borderBottom: `1px solid lightgray`,
            borderLeft: `1px solid lightgray`,
            borderRight: `1px solid lightgray`,
          }}
          items="center"
          row
        >
          <Text
            css={{ minWidth: isMobile ? `58px` : `80px` }}
            size={isMobile ? `small` : `normal`}
            center
          >
            {data.등급}
          </Text>

          <FlexView
            css={{ minWidth: isMobile ? `145px` : `160px` }}
            gap={isMobile ? 2 : 8}
          >
            {data?.선택능력.map((ability: string) => (
              <Text key={ability} size={isMobile ? `xSmall` : `small`} center>
                {ability}
              </Text>
            ))}
          </FlexView>

          <FlexView
            css={{
              width: isMobile ? `145px` : `360px`,
              padding: isMobile ? 0 : `0 10px`,
            }}
            gap={isMobile ? 2 : 8}
            items="center"
            row={!isMobile}
            wrap
          >
            {data.기본능력.map((ability: string) => (
              <Text key={ability} size={isMobile ? `xSmall` : `small`}>
                {ability}
              </Text>
            ))}
          </FlexView>
        </FlexView>
      ))}
    </FlexView>
  );
}
