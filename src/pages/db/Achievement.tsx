/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { AchievementList } from '@components/db-pages';
import { Select, Option } from '@components/select';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(600);

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

  const [editMode, setEditMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [achievedScore, setAchievedScore] = useState(0);

  const selectTab = (idx: number) => {
    setSelectedTab(idx);
  };

  const saveMyAchievement = () => {
    // 저장 성공시 editMode를 false로 변경
    setEditMode(false);
  };

  useEffect(() => {
    setEditMode(false);
  }, [selectedTab]);

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }}>
      <FlexView
        css={{
          padding: isMobile ? `10px` : `20px`,
          border: isMobile ? `none` : `1px solid lightgray`,
          borderRadius: `8px`,
        }}
        gap={20}
      >
        <FlexView content="between" gap={8} items="center" row>
          <Select isMobile={isMobile} name={TAB_LIST[selectedTab]} width={200}>
            <Option
              selected={TAB_LIST[selectedTab]}
              values={TAB_LIST}
              onSelect={selectTab}
            />
          </Select>

          {editMode ? (
            <FlexView css={{ width: `70px` }} gap={8} items="center" row>
              <Button
                css={{ height: `36px` }}
                onClick={() => setEditMode(false)}
              >
                <Text>취소</Text>
              </Button>
              <Button css={{ height: `36px` }} onClick={saveMyAchievement}>
                <Text>저장</Text>
              </Button>
            </FlexView>
          ) : (
            selectedTab !== 0 && (
              <Button
                css={{ height: `36px` }}
                onClick={() => setEditMode(true)}
              >
                <Text color="blue" medium>
                  업적 관리
                </Text>
              </Button>
            )
          )}
        </FlexView>

        {selectedTab !== 0 && (
          <AchievementList editMode={editMode} tab={selectedTab} />
        )}

        {selectedTab === 0 && (
          <FlexView
            color="lightgray"
            css={{
              padding: isMobile ? `10px 20px` : `20px 40px`,
            }}
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
                  <FlexView
                    css={{ width: `${totalWidth}px` }}
                    items="center"
                    row
                  >
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
    </FlexView>
  );
};
