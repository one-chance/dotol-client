import { useEffect, useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { DataList, RewardList } from '@components/costume';
import DATA from '@data/adventure.json';

type TAB = '괴수' | '물품' | '임무' | '탐방' | '보상';

type LIST = {
  name: string;
  score: string;
  detail: string;
};

type REWARD = {
  weapon: string[];
  clothes: string[];
  title: string;
};

export default () => {
  const myData: any = DATA;
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

  const MAIN_TAB: string[] = [`괴수`, `물품`, `임무`, `탐방`, `보상`];
  const SUB_TAB: Record<string, string[]> = {
    괴수: [`괴수`, `점수`, `등장위치`],
    물품: [`물품`, `점수`, `획득방법`],
    임무: [`임무`, `점수`, `시작 NPC`],
    탐방: [`탐방`, `점수`, `상세위치`],
    보상: [`탐험무기`, `탐험의상`, `칭호`],
  };

  const [selectedTab, setSelectedTab] = useState<TAB>(`괴수`); // 탐험 탭
  const [selectedLocation, setSelectedLocation] = useState(0); // 탐험 지역
  const [selectedData, setSelectedData] = useState<LIST[] | REWARD>(
    myData[selectedLocation][selectedTab],
  );

  const [test, setTest] = useState(myData[selectedLocation]);
  const [test2, setTest2] = useState(test[selectedTab]);

  useEffect(() => {
    setTest(myData[selectedLocation]);
  }, [selectedLocation]);

  useEffect(() => {
    setTest2(test[selectedTab]);
  }, [selectedTab]);

  // useEffect(() => {
  //   setSelectedData(DATA[selectedLocation][selectedTab]);
  // }, [selectedLocation, selectedTab]);

  return (
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
          {MAIN_TAB.map((tab, index) => (
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

        <FlexView css={{ minHeight: `36px` }} items="center" row>
          {SUB_TAB[selectedTab].map(tab => (
            <Text key={tab} center fill semiBold>
              {tab}
            </Text>
          ))}
        </FlexView>

        {selectedTab === `보상` ? (
          <RewardList data={test2 as REWARD} />
        ) : (
          <DataList data={test2 as LIST[]} />
        )}
      </FlexView>
    </FlexView>
  );
};
