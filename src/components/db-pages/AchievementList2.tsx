import { AchievementAccordion } from '@components/accordion';
import { Checkbox, FlexView, Text } from '@components/common';
import DATA from '@data/achievement.json';
import { useResponsive } from '@utils/hooks';

type ListProps = {
  tab: number;
  editMode: boolean;
};

export default ({ tab, editMode }: ListProps) => {
  const selectedData = DATA[tab - 1];
  const isMobile = useResponsive(480);

  return (
    <FlexView css={{ maxWidth: `800px`, width: `100%` }}>
      <FlexView
        color="lightgray"
        css={{ minHeight: `40px` }}
        items="center"
        row
      >
        <Text css={{ minWidth: isMobile ? `40px` : `80px` }} bold center>
          달성
        </Text>
        <Text bold center fill>
          업적
        </Text>
      </FlexView>

      <FlexView>
        {selectedData.mission.map((mission, index) => (
          <FlexView
            key={mission.name}
            css={{ borderBottom: `1px solid lightgray` }}
            items="center"
            row
          >
            <FlexView css={{ minWidth: isMobile ? `40px` : `80px` }} center>
              <Checkbox disabled={!editMode} />
            </FlexView>

            <AchievementAccordion
              title={mission.name}
              titleCSS={{ width: isMobile ? `300px` : `400px`, border: `none` }}
            >
              <Text small={isMobile}>점수: {mission.score}</Text>
              <Text small={isMobile}>조건: {mission.condition}</Text>
            </AchievementAccordion>
          </FlexView>
        ))}
      </FlexView>
    </FlexView>
  );
};
