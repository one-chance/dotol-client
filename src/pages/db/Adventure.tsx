import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { AdventureList } from '@components/db-pages';
import { TAB } from '@interfaces/adventure';

export default () => {
  // prettier-ignore
  const LOCATIONS = [ `환상의섬`, `백두촌`, `용궁`, `백제`, `지옥`, `금천군`, `흉수계`, `인도` ];
  const TABS = [`괴수`, `물품`, `임무`, `탐방`, `보상`];

  const [selectedTab, setSelectedTab] = useState<TAB>(`괴수`); // 탐험 탭
  const [selectedLocation, setSelectedLocation] = useState(0); // 탐험 지역

  return (
    <FlexView css={{ margin: `20px auto` }}>
      <FlexView gap={40} row>
        <FlexView css={{ marginTop: `80px` }}>
          <Text css={{ lineHeight: `40px` }} center large medium>
            탐험 지역
          </Text>
          {LOCATIONS.map((location, index) => (
            <Button
              key={location}
              css={{
                width: `120px`,
                height: `40px`,
                // borderRadius: `4px`,
                border:
                  selectedLocation === index
                    ? `1px solid red`
                    : `1px solid lightgray`,
              }}
              onClick={() => setSelectedLocation(index)}
            >
              <Text>{location}</Text>
            </Button>
          ))}
        </FlexView>

        <FlexView>
          <FlexView row>
            {TABS.map(tab => (
              <Button
                key={tab}
                css={{
                  width: `120px`,
                  height: `40px`,
                  border:
                    tab === selectedTab ? `1px solid red` : `1px solid gray`,
                }}
                onClick={() => setSelectedTab(tab as TAB)}
              >
                <Text>{tab}</Text>
              </Button>
            ))}
          </FlexView>

          <AdventureList location={selectedLocation} tab={selectedTab} />
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
