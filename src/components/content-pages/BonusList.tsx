import { useEffect, useState } from 'react';

import { getBodyReinforceBonusList } from '@apis/index';
import { FlexView, Text, Select, Option } from '@components/common';
import { Colors } from '@styles/system';

type BonusListProps = {
  isMobile: boolean;
};

type Bonus = {
  단계: number;
  능력치: number[];
  목록?: string[];
};

const PARTS = [
  `무기`,
  `갑옷`,
  `투구`,
  `왼손`,
  `오른손`,
  `목/어깨`,
  `신발`,
  `망토`,
];

export default ({ isMobile }: BonusListProps) => {
  const [part, setPart] = useState(0);
  const [infoList, setInfoList] = useState<Bonus[][]>([[]]);

  const selectPart = (index: number) => {
    setPart(index);
  };

  useEffect(() => {
    getBodyReinforceBonusList().then(data => {
      setInfoList(data);
    });
  }, []);

  return (
    <FlexView gap={10}>
      <FlexView
        content="between"
        css={{ margin: isMobile ? `0 4px` : undefined }}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신체강화 보너스
        </Text>

        <Select label={PARTS[part]} width={120}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>
      <FlexView css={{ maxWidth: `600px`, border: `1px solid lightgray` }}>
        <FlexView
          color="lightgray"
          css={{ minHeight: isMobile ? `36px` : `40px` }}
          items="center"
          row
        >
          <Text
            css={{ minWidth: isMobile ? `40px` : `60px` }}
            small={isMobile}
            bold
            center
          >
            단계
          </Text>
          <Text
            css={{ minWidth: isMobile ? `120px` : `140px` }}
            small={isMobile}
            bold
            center
          >
            능력치
          </Text>
          <Text
            css={{ minWidth: isMobile ? `198px` : `398px` }}
            small={isMobile}
            bold
            center
          >
            목록
          </Text>
        </FlexView>

        {infoList?.[part].map(info => (
          <FlexView
            key={info.단계}
            css={{
              padding: isMobile ? `4px 0` : `8px 0`,
              borderTop: `1px solid lightgray`,
            }}
            items="center"
            row
          >
            <FlexView css={{ minWidth: isMobile ? `40px` : `60px` }} center>
              <Text small={!isMobile} xSmall={isMobile}>
                {info.단계}
              </Text>
            </FlexView>

            <FlexView css={{ minWidth: isMobile ? `120px` : `140px` }} center>
              {info.능력치.map(ability => (
                <Text key={ability} small={!isMobile} xSmall={isMobile}>
                  {ability}
                </Text>
              ))}
            </FlexView>

            <FlexView
              css={{
                paddingRight: `4px`,
                minWidth: isMobile ? `198px` : `398px`,
              }}
              gap={isMobile ? 4 : 8}
              row
              wrap
            >
              {info.목록?.map(equip => (
                <Text key={equip} small={!isMobile} xSmall={isMobile}>
                  {equip}
                </Text>
              ))}
            </FlexView>
          </FlexView>
        ))}
      </FlexView>

      {infoList.length > 1 && (
        <Text
          color={Colors.red}
          css={{ marginLeft: isMobile ? `4px` : 0 }}
          small={isMobile}
        >
          * 선택한 능력 강화에 따라 보너스 능력치가 결정됩니다.
        </Text>
      )}
    </FlexView>
  );
};
