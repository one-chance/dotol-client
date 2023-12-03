import { useQuery } from '@tanstack/react-query';

import { getSkillAbilityList } from '@apis/index';
import { FlexView, Text } from '@components/common';

type Ability = {
  기술능력: string;
  전설: string;
  신화: string;
};

interface SkillAbilityListProps {
  job: number;
  part: number;
  isMobile: boolean;
}

export default function SkillAbilityList({
  job,
  part,
  isMobile,
}: SkillAbilityListProps) {
  const { data: abilityList = [] } = useQuery({
    queryKey: [`abilityList`],
    queryFn: () => getSkillAbilityList(),
  });

  return (
    <FlexView
      css={{
        borderRight: `1px solid lightgray`,
        borderLeft: `1px solid lightgray`,
      }}
    >
      <FlexView color="lightgray" css={{ minHeight: `40px` }} center row>
        <Text
          css={{
            width: isMobile ? `180px` : `240px`,
            paddingLeft: isMobile ? `4px` : `8px`,
          }}
          size={isMobile ? `small` : `normal`}
          weight="semiBold"
          center
        >
          기술능력
        </Text>

        <Text
          css={{
            width: isMobile ? `85px` : `120px`,
          }}
          size={isMobile ? `small` : `normal`}
          weight="semiBold"
          center
        >
          전설
        </Text>

        <Text
          css={{
            width: isMobile ? `85px` : `120px`,
          }}
          size={isMobile ? `small` : `normal`}
          weight="semiBold"
          center
        >
          신화
        </Text>
      </FlexView>

      <FlexView>
        {abilityList.length > 0 &&
          abilityList[job][part].map((ability: Ability) => (
            <FlexView
              key={ability.기술능력}
              css={{
                minHeight: `36px`,
                borderBottom: `1px solid lightgray`,
                padding: `4px 0`,
              }}
              items="center"
              row
            >
              <Text
                css={{
                  width: isMobile ? `180px` : `240px`,
                  paddingLeft: isMobile ? `4px` : `8px`,
                }}
                size={isMobile ? `small` : `normal`}
              >
                {ability.기술능력}
              </Text>
              <Text
                css={{ width: isMobile ? `85px` : `120px` }}
                size={isMobile ? `small` : `normal`}
                center
              >
                {ability.전설}
              </Text>
              <Text
                css={{ width: isMobile ? `85px` : `120px` }}
                size={isMobile ? `small` : `normal`}
                center
              >
                {ability.신화}
              </Text>
            </FlexView>
          ))}
      </FlexView>
    </FlexView>
  );
}
