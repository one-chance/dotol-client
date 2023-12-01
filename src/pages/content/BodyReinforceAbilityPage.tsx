import { useEffect, useState } from 'react';


import { getBodyReinforceAbilityList } from '@apis/index';
import { FlexView, Text, Select, Option } from '@components/common';
import { useResponsive } from '@hooks/index';

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

type Ability = {
  등급: string;
  선택능력: string[];
  기본능력: string[];
};

export default function BodyReinforceAbilityPage() {
  const isMobile = useResponsive(610);
  const [part, setPart] = useState(0);
  const [infoList, setInfoList] = useState<Ability[][]>([[]]);

  const selectPart = (id: number) => {
    setPart(id);
  };

  useEffect(() => {
    getBodyReinforceAbilityList().then(res => {
      setInfoList(res);
    });
  }, []);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" gap={10} items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          신체강화 능력치
        </Text>

        <Select label={PARTS[part]} width={100}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <FlexView>
        <FlexView
          color="lightgray"
          css={{ minHeight: `40px` }}
          items="center"
          row
        >
          <Text
            css={{ minWidth: isMobile ? `58px` : `80px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            등급
          </Text>
          <Text
            css={{ minWidth: isMobile ? `145px` : `160px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            선택 능력
          </Text>
          <Text
            css={{ minWidth: isMobile ? `145px` : `360px` }}
            size={isMobile ? `small` : `normal`}
            weight="bold"
            center
          >
            기본 능력
          </Text>
        </FlexView>

        {infoList?.[part].map((data: Ability) => (
          <FlexView
            key={data.등급}
            css={{
              padding: `4px 0`,
              borderBottom: `1px solid lightgray`,
              borderLeft: `1px solid lightgray`,
              borderRight: `1px solid lightgray`,
            }}
            items="center"
            row
          >
            <Text
              css={{ minWidth: isMobile ? `58px` : `80px` }}
              size={isMobile ? `small` : `normal`}
              center
            >
              {data.등급}
            </Text>

            <FlexView
              css={{ minWidth: isMobile ? `145px` : `160px` }}
              gap={isMobile ? 2 : 8}
            >
              {data?.선택능력.map((ability: string) => (
                <Text key={ability} size={isMobile ? `xSmall` : `small`} center>
                  {ability}
                </Text>
              ))}
            </FlexView>

            <FlexView
              css={{
                width: isMobile ? `145px` : `360px`,
                padding: isMobile ? 0 : `0 10px`,
              }}
              gap={isMobile ? 2 : 8}
              items="center"
              row={!isMobile}
              wrap
            >
              {data.기본능력.map((ability: string) => (
                <Text key={ability} size={isMobile ? `xSmall` : `small`}>
                  {ability}
                </Text>
              ))}
            </FlexView>
          </FlexView>
        ))}
      </FlexView>
    </FlexView>
  );
}
