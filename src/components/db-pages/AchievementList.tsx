import { FlexView, Text } from '@components/common';
import DATA from '@data/achievement.json';
import { useResponsive } from '@utils/hooks';

type ListProps = {
  tab: number;
};

export default ({ tab }: ListProps) => {
  const selectedData = DATA[tab - 1];
  const isMobile = useResponsive(400);

  return (
    <FlexView css={{ padding: `0 10px`, maxWidth: `800px`, width: `100%` }}>
      <FlexView
        color="lightgray"
        content={isMobile ? `between` : `center`}
        css={{ minHeight: `40px` }}
        items="center"
        row
      >
        <Text
          center={isMobile}
          css={{
            minWidth: isMobile ? `60px` : `320px`,
            paddingLeft: `8px`,
          }}
          bold
        >
          업적
        </Text>
        <Text css={{ minWidth: `60px` }} bold>
          점수
        </Text>
        {!isMobile && (
          <Text bold fill>
            비고
          </Text>
        )}
      </FlexView>

      <FlexView css={{ border: `1px solid lightgray` }}>
        {selectedData.mission.map(mission => (
          <FlexView
            key={mission.name}
            css={{ minHeight: `36px`, borderBottom: `1px solid lightgray` }}
            items="center"
            row
            wrap
          >
            <Text
              css={{
                minWidth: `320px`,
                paddingLeft: `8px`,
                ...(isMobile && { minWidth: `fit-content`, flex: 1 }),
              }}
              small={isMobile}
            >
              {mission.name}
            </Text>
            <Text
              css={{ minWidth: isMobile ? `40px` : `60px` }}
              small={isMobile}
            >
              {mission.score}
            </Text>
            {!isMobile && (
              <Text small={isMobile} fill>
                {mission.condition}
              </Text>
            )}
          </FlexView>
        ))}
      </FlexView>
    </FlexView>
  );
};
