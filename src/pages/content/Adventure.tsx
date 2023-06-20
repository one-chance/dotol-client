import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { AdventureList } from '@components/content-pages';
import { Select, Option } from '@components/select';
import { AdventureTab } from '@interfaces/adventure';
import { useResponsive } from '@utils/hooks';

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

export default () => {
  const isMobile = useResponsive(600);
  const [selectedTab, setSelectedTab] = useState<AdventureTab>(`괴수`); // 탐험 탭
  const [selectedLocation, setSelectedLocation] = useState(0); // 탐험 지역

  const selectLocation = (idx: number) => {
    setSelectedLocation(idx);
  };

  const selectTab = (idx: number) => {
    setSelectedTab(TABS[idx] as AdventureTab);
  };

  return (
    <FlexView css={{ margin: isMobile ? `20px auto` : `40px auto` }} gap={20}>
      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 4px` : undefined }}
        gap={20}
        items="center"
        row
        wrap
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          탐험일지 정보
        </Text>

        <FlexView gap={8} row>
          <Select
            isMobile={isMobile}
            name={LOCATIONS[selectedLocation]}
            width={100}
          >
            <Option
              selected={LOCATIONS[selectedLocation]}
              values={LOCATIONS}
              onSelect={selectLocation}
            />
          </Select>

          <Select isMobile={isMobile} name={selectedTab} width={80}>
            <Option selected={selectedTab} values={TABS} onSelect={selectTab} />
          </Select>
        </FlexView>
      </FlexView>

      <AdventureList
        isMobile={isMobile}
        location={selectedLocation}
        tab={selectedTab}
      />
    </FlexView>
  );
};
