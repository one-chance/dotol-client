import { useState } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import DATA from '@data/skill-ability.json';
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
const TITLES = [`기술능력`, `전설`, `신화`];

export default () => {
  const isMobile = useResponsive(500);
  const [selectedJob, setSelectedJob] = useState(JOBS[0]);
  const [selectedPart, setSelectedPart] = useState(EQUIP_PARTS[0]);
  const skillList =
    DATA[JOBS.indexOf(selectedJob)][EQUIP_PARTS.indexOf(selectedPart)];

  const selectJob = (id: number) => {
    setSelectedJob(JOBS[id]);
  };

  const selectPart = (id: number) => {
    setSelectedPart(EQUIP_PARTS[id]);
  };

  return (
    <FlexView gap={isMobile ? 10 : 20}>
      <FlexView
        content="between"
        css={{ padding: isMobile ? `0 4px` : undefined }}
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
            name={selectedJob}
            width={isMobile ? 80 : 100}
          >
            <Option selected={selectedJob} values={JOBS} onSelect={selectJob} />
          </Select>

          <Select
            isMobile={isMobile}
            name={selectedPart}
            width={isMobile ? 100 : 120}
          >
            <Option
              selected={selectedPart}
              values={EQUIP_PARTS}
              onSelect={selectPart}
            />
          </Select>
        </FlexView>
      </FlexView>

      <FlexView>
        <FlexView color="lightgray" css={{ minHeight: `40px` }} center row>
          {TITLES.map((title, index) => (
            <Text
              key={title}
              css={{ flex: index === 0 ? 2 : 1 }}
              small={isMobile}
              center
              semiBold
            >
              {title}
            </Text>
          ))}
        </FlexView>

        <FlexView>
          {skillList?.map((skill, index) => (
            <FlexView
              key={skill.기술능력}
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
                {skill.기술능력}
              </Text>
              <Text
                css={{ width: isMobile ? `90px` : `120px` }}
                small={isMobile}
                center
              >
                {skill.전설}
              </Text>
              <Text
                css={{ width: isMobile ? `90px` : `120px` }}
                small={isMobile}
                center
              >
                {skill.신화}
              </Text>
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
