import { FlexView, Text } from '@components/common';
import DATA from '@data/calendar.json';
import { useResponsive } from '@utils/hooks';

export default () => {
  const myData = DATA;
  const isMobile = useResponsive(800);

  const LUNA_DATES = [
    { start: `01월 01일`, end: `01월 25일` },
    { start: `02월 01일`, end: `02월 15일` },
    { start: `03월 01일`, end: `03월 15일` },
    { start: `04월 01일`, end: `04월 10일` },
    { start: `05월 01일`, end: `05월 10일` },
    { start: `06월 10일`, end: `06월 20일` },
    { start: `07월 06일`, end: `07월 21일` },
    { start: `08월 01일`, end: `08월 29일` },
    { start: `09월 01일`, end: `09월 29일` },
    { start: `10월 01일`, end: `10월 29일` },
    { start: `11월 01일`, end: `11월 29일` },
    { start: `12월 21일`, end: `12월 29일` },
  ];

  // myData[11].end가 지나면 다음 년도로 교체해야 함

  return (
    <FlexView css={{ maxWidth: `960px`, width: `100%`, margin: `40px auto` }}>
      <FlexView gap={40} center>
        <Text bold center xxLarge>
          2023 세시마을 일정
        </Text>

        <FlexView
          css={{
            maxWidth: `732px`,
          }}
          gap={20}
          row={!isMobile}
          wrap
        >
          {myData.map((data, index) => (
            <FlexView key={data.event} gap={16} items="center" row>
              <Text
                css={{ minWidth: isMobile ? `100px` : `120px` }}
                large={!isMobile}
                semiBold
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
                  color="blue"
                  css={{ lineHeight: `30px` }}
                  small={isMobile}
                >
                  음력: {LUNA_DATES[index].start} ~ {LUNA_DATES[index].end}
                </Text>
                <Text color="red" css={{ lineHeight: `30px` }} small={isMobile}>
                  양력: {data.start} ~ {data.end}
                </Text>
              </FlexView>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
