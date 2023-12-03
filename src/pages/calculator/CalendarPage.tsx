import { FlexView, Text } from '@components/common';
import { SCHEDULES } from '@constants/calendar';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/token';

// myData[11].end가 지나면 다음 년도로 교체해야 함
export default function CalendarPage() {
  const isMobile = useResponsive(800);

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `0 auto` }}>
      <FlexView gap={40} center>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold" center>
          2023 세시마을 일정
        </Text>

        <FlexView css={{ maxWidth: `732px` }} gap={20} row={!isMobile} wrap>
          {SCHEDULES.map(data => (
            <FlexView key={data.event} gap={16} items="center" row>
              <Text
                css={{ minWidth: isMobile ? `100px` : `120px` }}
                size={isMobile ? `normal` : `large`}
                weight="semiBold"
              >
                {data.event}
              </Text>

              <FlexView
                css={{
                  minWidth: isMobile ? `180px` : `220px`,
                  minHeight: `60px`,
                }}
              >
                <Text
                  color={Colors.primary}
                  css={{ lineHeight: `30px` }}
                  size={isMobile ? `small` : `normal`}
                >
                  음력: {data.luna_start} ~ {data.luna_end}
                </Text>
                <Text
                  color="red"
                  css={{ lineHeight: `30px` }}
                  size={isMobile ? `small` : `normal`}
                >
                  양력: {data.solar_start} ~ {data.solar_end}
                </Text>
              </FlexView>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
}
