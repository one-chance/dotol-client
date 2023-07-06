import { useEffect, useState } from 'react';

import { getSkillAbilityList } from '@apis/skill';
import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { useResponsive } from '@utils/hooks';

const JOBS = [
  `전사`,
  `도적`,
  `주술사`,
  `도사`,
  `궁사`,
  `천인`,
  `마도사`,
  `영술사`,
  `차사`,
  `살수`,
];

const EQUIP_PARTS = [`목/어깨장식`, `투구`, `무기`, `갑옷`, `망토`];

type Ability = {
  기술능력: string;
  전설: string;
  신화: string;
};

export default () => {
  const isMobile = useResponsive(500);
  const [job, setJob] = useState(0);
  const [parts, setParts] = useState(0);
  const [data, setData] = useState([[[]]]);

  const selectJob = (id: number) => {
    setJob(id);
  };

  const selectPart = (id: number) => {
    setParts(id);
  };

  useEffect(() => {
    getSkillAbilityList().then(res => {
      setData(res);
    });
  }, []);

  return (
    <FlexView gap={isMobile ? 10 : 20}>
      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 10px` : undefined }}
        gap={10}
        items="center"
        row
        wrap
      >
        <Text large={isMobile} xLarge={!isMobile} bold>
          기술능력 도감
        </Text>

        <FlexView gap={isMobile ? 8 : 16} items="center" row>
          <Select
            isMobile={isMobile}
            name={JOBS[job]}
            width={isMobile ? 80 : 100}
          >
            <Option selected={JOBS[job]} values={JOBS} onSelect={selectJob} />
          </Select>

          <Select
            isMobile={isMobile}
            name={EQUIP_PARTS[parts]}
            width={isMobile ? 100 : 120}
          >
            <Option
              selected={EQUIP_PARTS[parts]}
              values={EQUIP_PARTS}
              onSelect={selectPart}
            />
          </Select>
        </FlexView>
      </FlexView>

      <FlexView
        css={{
          margin: `0 4px`,
          borderRight: `1px solid lightgray`,
          borderLeft: `1px solid lightgray`,
        }}
      >
        <FlexView color="lightgray" css={{ minHeight: `40px` }} center row>
          <Text
            css={{
              width: isMobile ? `180px` : `240px`,
              paddingLeft: isMobile ? `4px` : `8px`,
            }}
            small={isMobile}
            center
            semiBold
          >
            기술능력
          </Text>

          <Text
            css={{
              width: isMobile ? `85px` : `120px`,
            }}
            small={isMobile}
            center
            semiBold
          >
            전설
          </Text>

          <Text
            css={{
              width: isMobile ? `85px` : `120px`,
            }}
            small={isMobile}
            center
            semiBold
          >
            신화
          </Text>
        </FlexView>

        <FlexView>
          {data?.[job][parts].map((ability: Ability) => (
            <FlexView
              key={ability.기술능력}
              css={{
                minHeight: `36px`,
                borderBottom: `1px solid lightgray`,
                padding: `4px 0`,
              }}
              items="center"
              row
            >
              <Text
                css={{
                  width: isMobile ? `180px` : `240px`,
                  paddingLeft: isMobile ? `4px` : `8px`,
                }}
                small={isMobile}
              >
                {ability.기술능력}
              </Text>
              <Text
                css={{ width: isMobile ? `85px` : `120px` }}
                small={isMobile}
                center
              >
                {ability.전설}
              </Text>
              <Text
                css={{ width: isMobile ? `85px` : `120px` }}
                small={isMobile}
                center
              >
                {ability.신화}
              </Text>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
