import { useEffect, useState } from 'react';

import { Achievement, Mission } from '@interfaces/content';

import { getAchievementList } from '@apis/index';
import { FlexView, Text } from '@components/common';
import { AchievementList } from '@components/content-pages';
import { Select, Option } from '@components/select';
import { useResponsive } from '@hooks/index';

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

export default () => {
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
    getAchievementList().then(data => {
      setInfoList(data);
    });
  }, []);

  return (
    <FlexView
      css={{
        width: isMobile ? `100%` : `960px`,
        margin: isMobile ? `20px auto` : `60px auto`,
      }}
      items="center"
    >
      <FlexView gap={20}>
        <FlexView content="between" gap={20} items="center" row wrap>
          <Text xLarge={isMobile} xxLarge={!isMobile} bold>
            업적 정보
          </Text>

          <Select
            isMobile={isMobile}
            name={TAB_LIST[tab]}
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
    </FlexView>
  );
};
