import { AchievementAccordion } from '@components/accordion';
import { FlexView, Text } from '@components/common';
import DATA from '@data/achievement.json';
import { useResponsive } from '@utils/hooks';

type ListProps = {
  tab: number;
};

export default ({ tab }: ListProps) => {
  const selectedData = DATA[tab];
  const isMobile = useResponsive(480);

  return (
    <FlexView>
      <FlexView
        color="lightgray"
        content="center"
        css={{ minHeight: `40px`, padding: `0 8px` }}
      >
        <Text bold>업적 종류</Text>
      </FlexView>

      <FlexView>
        {selectedData.mission.map(mission => (
          <AchievementAccordion
            title={mission.name}
            titleCSS={{ width: isMobile ? `350px` : `480px` }}
          >
            <Text small={isMobile}>점수: {mission.score}</Text>
            <Text small={isMobile}>조건: {mission.condition}</Text>
          </AchievementAccordion>
        ))}
      </FlexView>
    </FlexView>
  );
};
