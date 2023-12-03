import { useEffect, useState } from 'react';

import { getAchievementJSON } from '@apis/index';
import { FlexView, Text, Select, Option } from '@components/common';
import { AchievementList } from '@components/content-pages';
import { useResponsive } from '@hooks/index';
import { Achievement, Mission } from '@interfaces/index';

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

export default function AchievementPage() {
  const isMobile = useResponsive(600);
  const [tab, setTab] = useState(0);
  const [infoList, setInfoList] = useState<Achievement[]>([]);
  const [selectedList, setSelectedInfoList] = useState<Mission[]>([]);

  const selectTab = (idx: number) => {
    setTab(idx);
  };

  useEffect(() => {
    setSelectedInfoList(infoList[tab]?.mission);
  }, [tab, infoList]);

  useEffect(() => {
    getAchievementJSON().then(data => {
      setInfoList(data);
    });
  }, []);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" gap={20} items="center" row wrap>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          업적 정보
        </Text>

        <Select
          isMobile={isMobile}
          label={TAB_LIST[tab]}
          width={isMobile ? 100 : 140}
        >
          <Option
            selected={TAB_LIST[tab]}
            values={TAB_LIST}
            onSelect={selectTab}
          />
        </Select>
      </FlexView>

      <AchievementList list={selectedList} />
    </FlexView>
  );
}
