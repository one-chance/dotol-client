/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';

import { Button, FlexView, Text } from '@components/common';
import DATA from '@data/achievement.json';
import { useMobileDetect, useWindowSize } from '@utils/hooks';

export default () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 400);

  const [selectedTab, setSelectedTab] = useState(0);
  const TAB_LIST = [
    `업적 현황`,
    `탐험일지`,
    `고고학`,
    `전장`,
    `세시마을`,
    `환웅의유산`,
    `안시성 전투`,
    `환상의시련`,
    `영웅의 기억`,
    `그 외`,
  ];

  const SCORE_LIST = [6325, 1000, 1000, 300, 1000, 500, 110, 135, 1210];
  const TEMP_SCORE = [632.5, 100, 100, 30, 100, 50, 11, 13.5, 121];

  const selectTab = (idx: number) => {
    setSelectedTab(idx);
  };

  useEffect(() => {
    if (width <= 400) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  return (
    <FlexView css={{ margin: `40px auto` }} gap={40} items="center">
      <FlexView css={{ margin: `0 10px` }} gap={8} items="center" row wrap>
        {TAB_LIST.map((tab, index) => (
          <Button
            key={tab}
            color={selectedTab === index ? `#F2F5F8` : `#486284`}
            css={{
              width: isMobile ? `80px` : `100px`,
              height: `36px`,
              borderRadius: `4px`,
            }}
            onClick={() => selectTab(index)}
          >
            <Text small={isMobile}>{tab}</Text>
          </Button>
        ))}
      </FlexView>

      {selectedTab !== 0 && (
        <FlexView css={{ padding: `0 20px`, maxWidth: `800px`, width: `100%` }}>
          <FlexView
            color="lightgray"
            content={isMobile ? `between` : `center`}
            css={{ minHeight: `40px` }}
            items="center"
            row
          >
            <Text
              center={isMobile}
              css={{ minWidth: isMobile ? `60px` : `320px` }}
              bold
            >
              업적
            </Text>
            <Text css={{ minWidth: `60px` }} bold center>
              점수
            </Text>
            {!isMobile && (
              <Text css={{ paddingLeft: `10px` }} bold fill>
                비고
              </Text>
            )}
          </FlexView>

          <FlexView css={{ border: `1px solid lightgray` }}>
            {DATA[selectedTab - 1].mission.map(mission => (
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
                    paddingLeft: `10px`,
                    ...(isMobile && { minWidth: `fit-content`, flex: 1 }),
                  }}
                  small={isMobile}
                >
                  {mission.name}
                </Text>
                <Text
                  css={{ minWidth: isMobile ? `40px` : `60px` }}
                  small={isMobile}
                  center
                >
                  {mission.score}
                </Text>
                {!isMobile && (
                  <Text css={{ paddingLeft: `10px` }} small={isMobile} fill>
                    {mission.condition}
                  </Text>
                )}
              </FlexView>
            ))}
          </FlexView>
        </FlexView>
      )}

      {selectedTab === 0 && (
        <FlexView
          color="lightgray"
          css={{ maxWidth: `760px`, width: `100%`, padding: `20px 0` }}
          gap={16}
          items="center"
        >
          {SCORE_LIST.map((score, index) => {
            const totalWidth = isMobile ? 300 : 400;
            const ratio = TEMP_SCORE[index] / score;

            return (
              <FlexView key={index} gap={4}>
                <Text
                  semiBold
                >{`${TAB_LIST[index]} ${TEMP_SCORE[index]}/${score}`}</Text>
                <FlexView css={{ width: `${totalWidth}px` }} items="center" row>
                  <FlexView
                    color="yellow"
                    content="center"
                    css={{
                      width: `${totalWidth * ratio}px`,
                      height: `24px`,
                    }}
                  />
                  <FlexView color="black" css={{ height: `24px` }} fill />
                </FlexView>
              </FlexView>
            );
          })}
        </FlexView>
      )}
    </FlexView>
  );
};
