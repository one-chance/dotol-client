import { useState } from 'react';

import { FlexView, Option, Select, Text } from '@components/common';
import { SkillAbilityList } from '@components/db-pages';
import { useResponsive } from '@hooks/index';

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

export default function SkillAbilityPage() {
  const isMobile = useResponsive(500);
  const [job, setJob] = useState(0);
  const [part, setPart] = useState(0);

  const selectJob = (id: number) => {
    setJob(id);
  };

  const selectPart = (id: number) => {
    setPart(id);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" gap={10} items="center" row wrap>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          기술능력
        </Text>

        <FlexView gap={isMobile ? 8 : 16} items="center" row>
          <Select
            isMobile={isMobile}
            label={JOBS[job]}
            width={isMobile ? 80 : 100}
          >
            <Option selected={JOBS[job]} values={JOBS} onSelect={selectJob} />
          </Select>

          <Select
            isMobile={isMobile}
            label={EQUIP_PARTS[part]}
            width={isMobile ? 100 : 120}
          >
            <Option
              selected={EQUIP_PARTS[part]}
              values={EQUIP_PARTS}
              onSelect={selectPart}
            />
          </Select>
        </FlexView>
      </FlexView>
      <SkillAbilityList isMobile={isMobile} job={job} part={part} />
    </FlexView>
  );
}
