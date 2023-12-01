import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAdventureList } from '@apis/index';
import { FlexView, Text, Select, Option } from '@components/common';
import { AdventureList, AdventureReward } from '@components/content-pages';
import { useResponsive } from '@hooks/index';
import { AdventureTab } from '@interfaces/index';

const LOCATIONS = [
  `환상의섬`,
  `백두촌`,
  `용궁`,
  `백제`,
  `지옥`,
  `금천군`,
  `흉수계`,
  `인도`,
];
const TABS = [`괴수`, `물품`, `임무`, `탐방`, `보상`];

export default function AdventurePage() {
  const isMobile = useResponsive(500);
  const [tab, setTab] = useState(0); // 탐험 탭
  const [location, setLocation] = useState(0); // 탐험 지역

  const { data: adventureList = [] } = useQuery({
    queryKey: [`adeventureList`],
    queryFn: () => getAdventureList(),
  });

  const selectLocation = (idx: number) => {
    setLocation(idx);
  };

  const selectTab = (idx: number) => {
    setTab(idx);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row wrap>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          탐험일지 정보
        </Text>

        <FlexView gap={8} row>
          <Select
            isMobile={isMobile}
            label={LOCATIONS[location]}
            width={isMobile ? 80 : 100}
          >
            <Option
              selected={LOCATIONS[location]}
              values={LOCATIONS}
              onSelect={selectLocation}
            />
          </Select>

          <Select
            isMobile={isMobile}
            label={TABS[tab]}
            width={isMobile ? 60 : 80}
          >
            <Option selected={TABS[tab]} values={TABS} onSelect={selectTab} />
          </Select>
        </FlexView>
      </FlexView>

      {TABS[tab] === `보상` ? (
        <AdventureReward
          isMobile={isMobile}
          list={adventureList[location]?.보상}
        />
      ) : (
        <AdventureList
          isMobile={isMobile}
          list={adventureList[location]?.[TABS[tab]]}
          tab={TABS[tab] as AdventureTab}
        />
      )}
    </FlexView>
  );
}
