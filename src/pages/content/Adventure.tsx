import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { AdventureList } from '@components/content-pages';
import { Select, Option } from '@components/select';
import { AdventureTab } from '@interfaces/content';
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
  const [tab, setTab] = useState(0); // 탐험 탭
  const [location, setLocation] = useState(0); // 탐험 지역
  const [infoList, setInfoList] = useState<string[][]>([[]]);

  const selectLocation = (idx: number) => {
    setLocation(idx);
  };

  const selectTab = (idx: number) => {
    setTab(idx);
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
          <Select isMobile={isMobile} name={LOCATIONS[location]} width={100}>
            <Option
              selected={LOCATIONS[location]}
              values={LOCATIONS}
              onSelect={selectLocation}
            />
          </Select>

          <Select isMobile={isMobile} name={TABS[tab]} width={80}>
            <Option selected={TABS[tab]} values={TABS} onSelect={selectTab} />
          </Select>
        </FlexView>
      </FlexView>

      <AdventureList
        isMobile={isMobile}
        location={location}
        tab={TABS[tab] as AdventureTab}
      />
    </FlexView>
  );
};
