import { AchievementAccordion } from '@components/accordion';
import { FlexView, Text } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Mission } from '@interfaces/index';

type ListProps = {
  list: Mission[];
};

export default ({ list }: ListProps) => {
  const isMobile = useResponsive(480);

  return (
    <FlexView>
      <FlexView
        color="lightgray"
        content="center"
        css={{
          minHeight: `40px`,
          padding: isMobile ? `0 4px` : `0 8px`,
          width: isMobile ? `352px` : `480px`,
        }}
      >
        <Text weight="bold">업적 종류</Text>
      </FlexView>

      <FlexView>
        {list?.map(mission => (
          <AchievementAccordion
            key={mission.name}
            title={mission.name}
            titleCSS={{ width: isMobile ? `352px` : `480px` }}
          >
            <Text size={isMobile ? `small` : `normal`}>
              점수: {mission.score}
            </Text>
            <Text size={isMobile ? `small` : `normal`}>
              조건: {mission.condition}
            </Text>
          </AchievementAccordion>
        ))}
      </FlexView>
    </FlexView>
  );
};
