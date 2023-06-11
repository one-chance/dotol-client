import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { AdventureList } from '@components/db-pages';
import { Select, Option } from '@components/select';
import { TAB } from '@interfaces/adventure';
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
  const [selectedTab, setSelectedTab] = useState<TAB>(`괴수`); // 탐험 탭
  const [selectedLocation, setSelectedLocation] = useState(0); // 탐험 지역

  const selectLocation = (idx: number) => {
    setSelectedLocation(idx);
  };

  const selectTab = (idx: number) => {
    setSelectedTab(TABS[idx] as TAB);
  };

  return (
    <FlexView
      css={{ margin: isMobile ? `20px auto` : `40px auto` }}
      gap={isMobile ? 20 : 40}
    >
      <FlexView gap={20} center row>
        <FlexView gap={8} items="center" row>
          <Text small={isMobile} medium>
            탐험 지역
          </Text>

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
        </FlexView>

        <FlexView gap={8} items="center" row>
          <Text small={isMobile} medium>
            세부 정보
          </Text>

          <Select isMobile={isMobile} name={selectedTab} width={100}>
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
