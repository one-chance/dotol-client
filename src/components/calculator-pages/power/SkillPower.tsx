import { useEffect, useState } from 'react';

import { FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { SKILL_INFO } from '@constants/skillPower';
import DATA from '@data/skill-ability.json';

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

const test: { [key: string]: { power: number; max: string } } = {
  '호기방출 쿨타임[-]': { power: 1, max: `20.0` },
  '호기방출 피해량[+]': { power: 0.667, max: `30.0` },
  '초혼진무 쿨타임[-]': { power: 5, max: `4.0` },
  '초혼진무 PvP 쿨타임[-]': { power: 2.5, max: `8.0` },
  '폭풍결장 쿨타임[-]': { power: 2, max: `10.0` },
  '광폭 광기소모도[-]': { power: 0.834, max: `24.0` },
  '광폭 쿨타임[-]': { power: 2, max: `10.0` },
  '광폭 피해증가율': { power: 1, max: `200` },
  '백호령 지속시간[+]': { power: 4, max: `5.0` },
  '백호령 피해증가율[+]': { power: 4, max: `50` },
  '운상미보 이속증가율[+]': { power: 20, max: `10` },
  '어검화 피해량[+]': { power: 0.667, max: `30.0` },
  '기력방패 마력소모도[-]': { power: 20, max: `10` },
  '기력방패 방어 증가[+]': { power: 40, max: `5` },
};

export default () => {
  const [skillPower, setSkillPower] = useState(0);
  const [selectedJob, setSelectedJob] = useState(0);
  const [selectedPart, setSelectedPart] = useState(0);

  const [skillValue, setSkillValue] = useState(``);

  const skillList = DATA[selectedJob][selectedPart].map(
    element => element.기술능력,
  );

  const [selectedSkill, setSelectedSkill] = useState(skillList[0]);
  const skillInfo = SKILL_INFO[selectedSkill];

  const selectJob = (id: number) => {
    setSelectedJob(id);
  };

  const selectPart = (id: number) => {
    setSelectedPart(id);
  };

  const selectSkill = (id: number) => {
    setSelectedSkill(skillList[id]);
  };

  const inputSkillValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (skillInfo.max.includes(`.`)) {
      const temp = e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``);
      const decimalPart = temp.split(`.`)[1];
      const trimmedTemp = decimalPart
        ? `${temp.split(`.`)[0]}.${decimalPart.slice(0, 1)}`
        : temp;

      if (Number(trimmedTemp) > Number(skillInfo.max)) return;
      setSkillValue(trimmedTemp);
    } else {
      const temp = e.target.value.replace(/[^0-9]/g, ``);
      if (Number(temp) > Number(skillInfo.max)) return;

      setSkillValue(temp);
    }
  };

  const convertValue = (_value: string) => {
    if (skillInfo.max.includes(`.`)) return Number(_value) * 10;

    return Number(_value);
  };

  useEffect(() => {
    setSkillPower(
      Math.floor(SKILL_INFO[selectedSkill].power * convertValue(skillValue)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillValue]);

  useEffect(() => {
    setSelectedSkill(skillList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPart]);

  return (
    <FlexView
      css={{
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: `20px`,
      }}
      gap={16}
      items="center"
    >
      <FlexView gap={16} items="center" row>
        <Select name={JOBS[selectedJob]} width={120}>
          <Option
            selected={JOBS[selectedJob]}
            values={JOBS}
            onSelect={selectJob}
          />
        </Select>

        <Select name={EQUIP_PARTS[selectedPart]} width={120}>
          <Option
            selected={EQUIP_PARTS[selectedPart]}
            values={EQUIP_PARTS}
            onSelect={selectPart}
          />
        </Select>
      </FlexView>

      <Select max={300} name={selectedSkill} width={256}>
        <Option
          selected={selectedSkill}
          values={skillList}
          onSelect={selectSkill}
        />
      </Select>

      <Input
        height={40}
        placeholder="수치"
        value={skillValue || ``}
        width={256}
        center
        onChange={inputSkillValue}
      />

      <Text semiBold>기술능력 전투력: {skillPower}</Text>
    </FlexView>
  );
};
