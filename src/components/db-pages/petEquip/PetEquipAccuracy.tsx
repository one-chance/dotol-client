import { useState, useEffect } from 'react';

import { FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const TYPES = [`환수 종류`, `황룡`, `청룡`, `주작`, `백호`, `현무`];
const TYPES_ACC: { [key: string]: number } = {
  '환수 종류': 0,
  황룡: 0,
  청룡: 1,
  주작: 1,
  벡호: 1,
  현무: 1,
};
const GRADES = [`환수 등급`, `6등급`, `7등급`, `8등급`, `9등급`];
const GRADES_ACC: { [key: string]: number } = {
  '환수 등급': 0,
  '6등급': 10,
  '7등급': 15,
  '8등급': 20,
  '9등급': 25,
};
const WEAPONS = [
  `무기류`,
  `무기 3성`,
  `무기 4성`,
  `무기 5성`,
  `무기 6성`,
  `무기 7성`,
];
const WEAPONS_ACC: { [key: string]: number } = {
  무기류: 0,
  '무기 3성': 35,
  '무기 4성': 45,
  '무기 5성': 54,
  '무기 6성': 70,
  '무기 7성': 85,
};
const HELMETS = [
  `투구류`,
  `투구 3성`,
  `투구 4성`,
  `투구 5성`,
  `투구 6성`,
  `투구 7성`,
];
const HELMETS_ACC: { [key: string]: number } = {
  투구류: 0,
  '투구 3성': 16,
  '투구 4성': 24,
  '투구 5성': 32,
  '투구 6성': 41,
  '투구 7성': 52,
};
const ARMORS = [
  `갑옷류`,
  `갑옷 3성`,
  `갑옷 4성`,
  `갑옷 5성`,
  `갑옷 6성`,
  `갑옷 7성`,
];
const ARMORS_ACC: { [key: string]: number } = {
  갑옷류: 0,
  '갑옷 3성': 10,
  '갑옷 4성': 14,
  '갑옷 5성': 20,
  '갑옷 6성': 26,
  '갑옷 7성': 32,
};
const GLOVES = [`성물류`, `성물`, `성물'진`];
const GLOVES_ACC: { [key: string]: number } = {
  성물류: 0,
  성물: 5,
  "성물'진": 7,
};
const SHIELDS = [`신물류`, `신물 1성`, `신물 2성`, `신물 3성`, `신물 4성`];
const SHIELDS_ACC: { [key: string]: number } = {
  신물류: 0,
  '신물 1성': 5,
  '신물 2성': 9,
  '신물 3성': 20,
  '신물 4성': 31,
};
const NECKLACES = [`목걸이류`, `작생목`, `생목`, `커생목`, `극락목`];
const NECKLACES_ACC: { [key: string]: number } = {
  목걸이류: 0,
  작생목: 3,
  생목: 5,
  커생목: 7,
  극락목: 9,
};
const FACES = [`문양류`, `문양`, `문양'진`];
const FACES_ACC: { [key: string]: number } = {
  문양류: 0,
  문양: 10,
  "문양'진": 20,
};

export default () => {
  const isMobile = useResponsive(580);
  const [accuracy, setAccuracy] = useState(0);
  const [extra, setExtra] = useState(0);
  const [names, setNames] = useState({
    type: `환수 종류`,
    grade: `환수 등급`,
    weapon: `무기류`,
    helmet: `투구류`,
    armor: `갑옷류`,
    gloves1: `성물류`,
    gloves2: `성물류`,
    shield: `신물류`,
    necklace: `목걸이류`,
    face: `문양류`,
  });

  const selectType = (id: number) => {
    setNames({ ...names, type: TYPES[id] });
  };

  const selectGrade = (id: number) => {
    setNames({ ...names, grade: GRADES[id] });
  };

  const selectWeapon = (id: number) => {
    setNames({ ...names, weapon: WEAPONS[id] });
  };

  const selectHelmet = (id: number) => {
    setNames({ ...names, helmet: HELMETS[id] });
  };

  const selectArmor = (id: number) => {
    setNames({ ...names, armor: ARMORS[id] });
  };

  const selectGloves1 = (id: number) => {
    setNames({ ...names, gloves1: GLOVES[id] });
  };

  const selectGloves2 = (id: number) => {
    setNames({ ...names, gloves2: GLOVES[id] });
  };

  const selectShield = (id: number) => {
    setNames({ ...names, shield: SHIELDS[id] });
  };

  const selectNecklace = (id: number) => {
    setNames({ ...names, necklace: NECKLACES[id] });
  };

  const selectFace = (id: number) => {
    setNames({ ...names, face: FACES[id] });
  };

  const inputExtra = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExtra(Number(e.target.value.replace(/[^0-9]/g, ``)));
  };

  useEffect(() => {
    const temp =
      TYPES_ACC[names.type] * GRADES_ACC[names.grade] +
      WEAPONS_ACC[names.weapon] +
      HELMETS_ACC[names.helmet] +
      ARMORS_ACC[names.armor] +
      GLOVES_ACC[names.gloves1] +
      GLOVES_ACC[names.gloves2] +
      SHIELDS_ACC[names.shield] +
      NECKLACES_ACC[names.necklace] +
      FACES_ACC[names.face] +
      extra;

    setAccuracy(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names, extra]);

  return (
    <FlexView css={{ margin: `0 auto` }} gap={20}>
      <Text
        css={{ padding: isMobile ? `0 4px` : undefined }}
        xLarge={isMobile}
        xxLarge={!isMobile}
        semiBold
      >
        환수 명중률 계산기
      </Text>

      <FlexView
        css={{
          width: isMobile ? `360px` : `560px`,
          border: `1px solid lightgrey`,
          padding: `20px`,
        }}
      >
        <FlexView
          css={{ maxWidth: isMobile ? `220px` : `460px`, margin: `0 auto` }}
          gap={20}
          row
          wrap
        >
          <Select isMobile={isMobile} name={names.type} width={100}>
            <Option
              selected={names.type}
              values={TYPES}
              onSelect={selectType}
            />
          </Select>

          <Select isMobile={isMobile} name={names.grade} width={100}>
            <Option
              selected={names.grade}
              values={GRADES}
              onSelect={selectGrade}
            />
          </Select>
          <Select isMobile={isMobile} name={names.weapon} width={100}>
            <Option
              selected={names.weapon}
              values={WEAPONS}
              onSelect={selectWeapon}
            />
          </Select>

          <Select isMobile={isMobile} name={names.helmet} width={100}>
            <Option
              selected={names.helmet}
              values={HELMETS}
              onSelect={selectHelmet}
            />
          </Select>

          <Select isMobile={isMobile} name={names.armor} width={100}>
            <Option
              selected={names.armor}
              values={ARMORS}
              onSelect={selectArmor}
            />
          </Select>

          <Select isMobile={isMobile} name={names.gloves1} width={100}>
            <Option
              selected={names.gloves1}
              values={GLOVES}
              onSelect={selectGloves1}
            />
          </Select>

          <Select isMobile={isMobile} name={names.gloves2} width={100}>
            <Option
              selected={names.gloves2}
              values={GLOVES}
              onSelect={selectGloves2}
            />
          </Select>

          <Select isMobile={isMobile} name={names.shield} width={100}>
            <Option
              selected={names.shield}
              values={SHIELDS}
              onSelect={selectShield}
            />
          </Select>

          <Select isMobile={isMobile} name={names.necklace} width={100}>
            <Option
              selected={names.necklace}
              values={NECKLACES}
              onSelect={selectNecklace}
            />
          </Select>

          <Select isMobile={isMobile} name={names.face} width={100}>
            <Option
              selected={names.face}
              values={FACES}
              onSelect={selectFace}
            />
          </Select>

          <Input
            aria-label="부적, 돋"
            css={{ textAlign: `center` }}
            placeholder="부적, 돋"
            value={extra || ``}
            width={100}
            onChange={inputExtra}
          />

          <FlexView css={{ width: `100px` }} center>
            <Text color={Colors.primary} large={!isMobile} semiBold>
              명중률: {accuracy}
            </Text>
          </FlexView>
        </FlexView>
      </FlexView>

      <FlexView css={{ padding: isMobile ? `0 4px` : undefined }}>
        <Text color={Colors.red} small={isMobile}>
          * 사신수는 등급별 시동 명중률이 포함됩니다.
        </Text>
        <Text color={Colors.red} small={isMobile}>
          * 모든 장비는 강화석이 최대로 적용된 수치로 계산됩니다.
        </Text>
      </FlexView>
    </FlexView>
  );
};
