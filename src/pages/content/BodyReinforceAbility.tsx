import { useEffect, useState } from 'react';

import { getBodyReinforceAbilityList } from '@apis/content';
import { FlexView, Text } from '@components/common';
import { MenuTab } from '@components/layout';
import { Option, Select } from '@components/select';
import { BODY_REINFORCE_TABS } from '@constants/menu';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

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

export default () => {
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
    <FlexView css={{ margin: isMobile ? `0 0 40px 0` : `40px auto` }} gap={20}>
      <MenuTab isMobile={isMobile} menus={BODY_REINFORCE_TABS} />

      <FlexView
        content="between"
        css={{ margin: isMobile ? `0 4px` : undefined }}
        gap={10}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold>
          신체강화 능력치
        </Text>

        <Select name={PARTS[part]} width={100}>
          <Option selected={PARTS[part]} values={PARTS} onSelect={selectPart} />
        </Select>
      </FlexView>

      <FlexView gap={10}>
        <FlexView>
          <FlexView
            color="lightgray"
            css={{ minHeight: `40px` }}
            items="center"
            row
          >
            <Text
              css={{ minWidth: isMobile ? `60px` : `80px` }}
              small={isMobile}
              bold
              center
            >
              등급
            </Text>
            <Text
              css={{ minWidth: isMobile ? `150px` : `160px` }}
              small={isMobile}
              bold
              center
            >
              선택 능력
            </Text>
            <Text
              css={{ minWidth: isMobile ? `150px` : `360px` }}
              small={isMobile}
              bold
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
                css={{ minWidth: isMobile ? `60px` : `80px` }}
                small={isMobile}
                center
              >
                {data.등급}
              </Text>

              <FlexView
                css={{ minWidth: isMobile ? `150px` : `160px` }}
                gap={isMobile ? 2 : 8}
              >
                {data?.선택능력.map((ability: string) => (
                  <Text
                    key={ability}
                    small={!isMobile}
                    xSmall={isMobile}
                    center
                  >
                    {ability}
                  </Text>
                ))}
              </FlexView>

              <FlexView
                css={{
                  width: isMobile ? `150px` : `360px`,
                  padding: isMobile ? 0 : `0 10px`,
                }}
                gap={isMobile ? 2 : 8}
                items="center"
                row={!isMobile}
                wrap
              >
                {data.기본능력.map((ability: string) => (
                  <Text key={ability} small={!isMobile} xSmall={isMobile}>
                    {ability}
                  </Text>
                ))}
              </FlexView>
            </FlexView>
          ))}
        </FlexView>
        <Text
          color={Colors.red}
          css={{ marginLeft: isMobile ? `4px` : 0 }}
          small={isMobile}
        >
          * 신발, 망토 부위 능력치는 추후 수정 예정입니다.
        </Text>
      </FlexView>
    </FlexView>
  );
};
