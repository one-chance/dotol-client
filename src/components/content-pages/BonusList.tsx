import { useEffect, useState } from 'react';

import { getBodyReinforceBonusList } from '@apis/index';
import { FlexView, Text } from '@components/common';
import { Colors } from '@styles/index';

type BonusListProps = {
  isMobile: boolean;
  part: number;
};

type Bonus = {
  단계: number;
  능력치: number[];
  목록?: string[];
};

export default function BonusList({ isMobile, part }: BonusListProps) {
  const [infoList, setInfoList] = useState<Bonus[][]>([[]]);

  useEffect(() => {
    getBodyReinforceBonusList().then(data => {
      setInfoList(data);
    });
  }, []);

  return (
    <FlexView gap={10}>
      <FlexView css={{ border: `1px solid lightgray` }}>
        <FlexView color="lightgray" css={{ height: `40px` }} items="center" row>
          <Text
            css={{ width: isMobile ? `40px` : `60px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            단계
          </Text>
          <Text
            css={{ width: isMobile ? `120px` : `140px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            능력치
          </Text>
          <Text
            css={{ width: isMobile ? `188px` : `398px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
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
            <FlexView css={{ width: isMobile ? `40px` : `60px` }} center>
              <Text size={isMobile ? `xSmall` : `small`}>{info.단계}</Text>
            </FlexView>

            <FlexView css={{ width: isMobile ? `120px` : `140px` }} center>
              {info.능력치.map(ability => (
                <Text key={ability} size={isMobile ? `xSmall` : `small`}>
                  {ability}
                </Text>
              ))}
            </FlexView>

            <FlexView
              css={{ width: isMobile ? `188px` : `398px` }}
              gap={isMobile ? 4 : 8}
              row
              wrap
            >
              {info.목록?.map(equip => (
                <Text key={equip} size={isMobile ? `xSmall` : `small`}>
                  {equip}
                </Text>
              ))}
            </FlexView>
          </FlexView>
        ))}
      </FlexView>

      {infoList.length > 1 && (
        <Text color={Colors.red} size="small">
          ● 선택한 능력 강화에 따라 보너스 능력치가 결정됩니다.
        </Text>
      )}
    </FlexView>
  );
}
