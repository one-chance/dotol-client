import { useEffect, useState } from 'react';

import { getSkillAbilityList } from '@apis/index';
import { FlexView, Input, Select, Option, Text } from '@components/common';
import { SKILL_POWER } from '@constants/index';

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

export default function SkillPower() {
  const [skillPower, setSkillPower] = useState(0);
  const [job, setJob] = useState(0);
  const [parts, setParts] = useState(0);
  const [skillValue, setSkillValue] = useState(``);

  const [abilityList, setAbilityList] = useState([[[]]]);
  const [skillList, setSkillList] = useState([`기술능력`]);

  const [selectedSkill, setSelectedSkill] = useState(`기술능력`);
  const skillInfo = SKILL_POWER[selectedSkill];

  const selectJob = (id: number) => {
    setJob(id);
    setSelectedSkill(`기술능력`);
    setSkillValue(``);
  };

  const selectParts = (id: number) => {
    setParts(id);

    setSelectedSkill(`기술능력`);
    setSkillValue(``);
  };

  const selectSkill = (id: number) => {
    setSelectedSkill(skillList[id]);
    setSkillValue(``);
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
    if (skillValue === ``) return setSkillPower(0);

    setSkillPower(Math.floor(skillInfo.power * convertValue(skillValue)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillValue]);

  useEffect(() => {
    setSkillList(
      abilityList?.[job][parts].map((skill: Ability) => skill.기술능력),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job, parts]);

  useEffect(() => {
    getSkillAbilityList().then(res => {
      setAbilityList(res);
      setSkillList(res[job][parts].map((skill: Ability) => skill.기술능력));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexView
      border="lightgray"
      css={{
        padding: `20px`,
      }}
      gap={16}
      items="center"
      radius={4}
    >
      <FlexView gap={16} items="center" row>
        <Select label={JOBS[job]} width={120}>
          <Option selected={JOBS[job]} values={JOBS} onSelect={selectJob} />
        </Select>

        <Select label={EQUIP_PARTS[parts]} width={120}>
          <Option
            selected={EQUIP_PARTS[parts]}
            values={EQUIP_PARTS}
            onSelect={selectParts}
          />
        </Select>
      </FlexView>

      <Select label={selectedSkill} width={256}>
        <Option
          selected={selectedSkill}
          values={skillList}
          onSelect={selectSkill}
        />
      </Select>

      <Input
        aria-label="수치"
        height={40}
        placeholder="수치"
        readOnly={selectedSkill === `기술능력`}
        value={skillValue || ``}
        width={256}
        center
        onChange={inputSkillValue}
      />

      <Text weight="semiBold">기술능력 전투력: {skillPower}</Text>
    </FlexView>
  );
}
