import { useState } from 'react';

import {
  AntiquityPower,
  BodyPower,
  EngravePower,
  GoldPower,
  GoldPower2,
  LevelPower,
  PetEquipPower,
  SkillPower,
} from '@components/calculator-pages/power';
import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const NAMES = [
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

type CALCULATOR =
  | `레벨`
  | `장비`
  | `각인`
  | `부가잠재능력`
  | `대표환수`
  | `기술능력`
  | `신체강화`
  | `내공강화`
  | `신수유물`;

const explanations: { [key in CALCULATOR]: string[] } = {
  레벨: [
    `99레벨에 최초로 부여되며 이후 레벨업마다 증가한다.`,
    `소수점 첫재자리까지 계산되지만 s창에는 올림한다.`,
    `승급전투력은 100레벨마다 자동으로 증가한다.`,
  ],
  장비: [],
  각인: [
    `[모든 능력 증가] 능력치가 최종 전투력에 반영된다.`,
    `%가 되면서 기준 수치도 바뀌어 오차가 발생할 수 있다.`,
  ],
  부가잠재능력: [
    `[모든 능력 증가] 능력치가 최종 전투력에 반영된다.`,
    `%돋 통합 패치로 최대 전투력이 500으로 증가했다.`,
    `황금돋보기 능력치는 오른쪽 계산 공식을 따른다.`,
    `콘텐츠 부가잠재능력은 왼쪽 계산 공식을 따른다.`,
  ],
  대표환수: [`환수장비에 달린 부가잠재능력은 따로 계산해야 한다.`],
  기술능력: [],
  신체강화: [],
  내공강화: [],
  신수유물: [],
};

export default () => {
  const isMobile = useResponsive(600);
  const [type, setType] = useState<CALCULATOR>(`레벨`);

  const [plus, setPlus] = useState({
    a: ``,
    b: ``,
  });

  const [multiple, setMultiple] = useState({
    a: ``,
    b: ``,
  });

  const calculator = {
    레벨: <LevelPower />,
    장비: <LevelPower />,
    각인: <EngravePower />,
    부가잠재능력: (
      <FlexView gap={40} items="center" row={!isMobile}>
        <GoldPower2 />
        <GoldPower />
      </FlexView>
    ),
    대표환수: <PetEquipPower />,
    기술능력: <SkillPower />,
    신체강화: <BodyPower />,
    내공강화: <BodyPower />,
    신수유물: <AntiquityPower />,
  };

  return (
    <FlexView
      css={{ margin: isMobile ? `20px auto 40px` : `40px auto` }}
      gap={isMobile ? 20 : 40}
    >
      <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
        전투력 계산기
      </Text>

      <FlexView
        content={isMobile ? `start` : `center`}
        css={{ margin: `0 10px` }}
        gap={isMobile ? 8 : 12}
        items="center"
        row
        wrap
      >
        {NAMES.map(name => (
          <Button key={name} onClick={() => setType(name as CALCULATOR)}>
            <Text
              bold={name === type}
              color={name === type ? Colors.red : Colors.black}
            >
              {name}
            </Text>
          </Button>
        ))}
      </FlexView>

      <FlexView css={{ margin: `0 10px` }}>{calculator[type]}</FlexView>

      <FlexView css={{ margin: `0 10px` }} gap={4}>
        {explanations[type].map(text => (
          <Text key={text} color={Colors.primary} small={isMobile}>
            {text}
          </Text>
        ))}
      </FlexView>

      <FlexView
        content="between"
        css={{ margin: `0 10px` }}
        gap={8}
        row={!isMobile}
      >
        <FlexView gap={4} items="center" row>
          <Input
            placeholder="A"
            value={plus.a || ``}
            width={80}
            center
            onChange={e =>
              setPlus({
                ...plus,
                a: e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``),
              })
            }
          />
          <Text>+</Text>
          <Input
            placeholder="B"
            value={plus.b || ``}
            width={80}
            center
            onChange={e =>
              setPlus({
                ...plus,
                b: e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``),
              })
            }
          />
          <Text>= {Number(plus.a) + Number(plus.b)}</Text>
        </FlexView>

        <FlexView gap={4} items="center" row>
          <Input
            placeholder="A"
            value={multiple.a || ``}
            width={80}
            center
            onChange={e =>
              setPlus({
                ...plus,
                a: e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``),
              })
            }
          />
          <Text>x</Text>
          <Input
            placeholder="B"
            value={multiple.b || ``}
            width={80}
            center
            onChange={e =>
              setPlus({
                ...plus,
                b: e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``),
              })
            }
          />
          <Text>= {Number(multiple.a) * Number(multiple.b)}</Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};
