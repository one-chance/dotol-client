import { useState } from 'react';

import {
  AntiquityPower,
  BodyPower,
  EngravePower,
  InnerPower,
  GoldPower,
  GoldPower2,
  LevelPower,
  NormalEquipPower,
  PetEquipPower,
  SkillPower,
} from '@components/calculator-pages';
import { FlexView, Text, Select, Option } from '@components/common';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

const TYPES = [
  `레벨`,
  `장비`,
  `각인`,
  `부가잠재능력`,
  `대표환수`,
  `기술능력`,
  `신체강화`,
  `내공강화`,
  `신수유물`,
];

const explanations: { [key: number]: string[] } = {
  0: [
    `99레벨에 최초로 부여되며 이후 레벨업마다 증가한다.`,
    `소수점 첫재자리까지 계산되지만 s창에는 올림한다.`,
    `승급전투력은 100레벨마다 자동으로 증가한다.`,
  ],
  1: [`추후 업데이트 됩니다.`],
  2: [`추후 업데이트 됩니다.`],
  3: [
    `[모든 능력 증가] 능력치가 최종 전투력에 반영된다.`,
    `황금돋보기 1줄의 최대 전투력은 500이다.`,
    `황금돋보기로 부여한 옵션은 곱연산(%) 되는 수치이다.`,
    `콘텐츠로 부여한 옵션은 합연산(+) 되는 수치이다.`,
    `콘텐츠 능력치 중에 (%)옵션은 수치x10을 입력하세요.`,
  ],
  4: [`환수장비에 달린 부가잠재능력은 따로 계산해야 한다.`],
  5: [],
  6: [],
  7: [`추후 업데이트 됩니다.`],
  8: [`[모든 능력 증가] 능력치가 최종 전투력에 반영되지 않는다.`],
};

export default function PowerPage() {
  const isMobile = useResponsive(600);
  const [type, setType] = useState(0);

  const calculator: { [key: number]: JSX.Element } = {
    0: <LevelPower />,
    1: <NormalEquipPower />,
    2: <EngravePower />,
    3: (
      <FlexView gap={isMobile ? 20 : 40}>
        <GoldPower />
        <GoldPower2 />
      </FlexView>
    ),
    4: <PetEquipPower />,
    5: <SkillPower />,
    6: <BodyPower />,
    7: <InnerPower />,
    8: <AntiquityPower />,
  };

  const selectType = (id: number) => {
    setType(id);
  };

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <FlexView content="between" items="center" row>
        <Text size={isMobile ? `large` : `xLarge`} weight="bold">
          전투력 계산기
        </Text>

        <Select
          isMobile={isMobile}
          label={TYPES[type]}
          width={isMobile ? 120 : 140}
        >
          <Option selected={TYPES[type]} values={TYPES} onSelect={selectType} />
        </Select>
      </FlexView>

      <FlexView css={{ width: isMobile ? `340px` : `440px`, margin: `0 10px` }}>
        {calculator[type]}
      </FlexView>

      <FlexView css={{ margin: `0 10px` }} gap={4}>
        {explanations[type].map(text => (
          <Text
            key={text}
            color={Colors.red}
            size={isMobile ? `small` : `normal`}
          >
            {text}
          </Text>
        ))}
      </FlexView>
    </FlexView>
  );
}
