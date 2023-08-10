import { useEffect, useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { AchievementList } from '@components/content-pages';
import { Select, Option } from '@components/select';
import { useResponsive } from '@utils/hooks';

export default () => {
  const isMobile = useResponsive(600);

  const TAB_LIST = [
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

  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = (idx: number) => {
    setSelectedTab(idx);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <FlexView content="between" gap={20} items="center" row wrap>
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          업적 정보
        </Text>

        <Select
          isMobile={isMobile}
          name={TAB_LIST[selectedTab]}
          width={isMobile ? 100 : 140}
        >
          <Option
            selected={TAB_LIST[selectedTab]}
            values={TAB_LIST}
            onSelect={selectTab}
          />
        </Select>
      </FlexView>

      <AchievementList tab={selectedTab} />
    </FlexView>
  );
};
