import { useEffect, useState } from 'react';

import { FlexView, Input, Select, Option, Text } from '@components/common';

const INNER_POWER_TYPES = [
  `내공 종류`,
  `명중률/명중회피`,
  `힘/민첩/지력/지혜/건강`,
  `체력치/마력치`,
  `방어도`,
  `방어도무시`,
  `방어구관통`,
  `공격력증가`,
  `마법치명/마력증강`,
  `마법수준향상`,
  `피흡/타흡/마흡/직타`,
  `시향/회향/피흡무시`,
];

const INNER_POWERS: { [key: string]: { power: number; max: number } } = {
  '내공 종류': { power: 0, max: 0 },
  '명중률/명중회피': { power: 1, max: 300 },
  '힘/민첩/지력/지혜/건강': { power: 1, max: 300 },
  '체력치/마력치': { power: 1, max: 300 },
  방어도: { power: 1, max: 300 },
  방어도무시: { power: 1, max: 300 },
  방어구관통: { power: 1, max: 300 },
  공격력증가: { power: 1, max: 300 },
  '마법치명/마력증강': { power: 1, max: 300 },
  마법수준향상: { power: 1, max: 300 },
  '피흡/타흡/마흡/직타': { power: 1, max: 300 },
  '시향/회향/피흡무시': { power: 1, max: 300 },
};

const BONUS_POWERS = [
  `등급 효과`,
  `[고급]등급 효과`,
  `[희귀]등급 효과`,
  `[영웅]등급 효과`,
  `[전설]등급 효과`,
  `[신화]등급 효과`,
];

export default function InnerPower() {
  const [innerType, setInnerType] = useState({
    one: 0,
    two: 0,
  });
  const [innerValue, setInnerValue] = useState({
    one: ``,
    two: ``,
  });
  const [bonusPower, setBonusPower] = useState(0);
  const [innerPower, setInnerPower] = useState(0);

  const selectInnerTypeOne = (id: number) => {
    setInnerType({ ...innerType, one: id });
  };

  const selectInnerTypeTwo = (id: number) => {
    setInnerType({ ...innerType, two: id });
  };

  const inputValue = (
    order: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const temp = e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``);
    const decimalPart = temp.split(`.`)[1];

    const trimmedTemp = decimalPart
      ? `${temp.split(`.`)[0]}.${decimalPart.slice(0, 1)}`
      : temp;

    setInnerValue({ ...innerValue, [order]: trimmedTemp });
  };

  const selectBonusePower = (id: number) => {
    setBonusPower(id);
  };

  const convertValue = (_value: string) => {
    const value = Number(_value);

    return value;
  };

  useEffect(() => {
    setInnerPower(
      bonusPower * 100 +
        Math.floor(
          INNER_POWERS[INNER_POWER_TYPES[innerType.one]].power *
            convertValue(innerValue.one),
        ) +
        Math.floor(
          INNER_POWERS[INNER_POWER_TYPES[innerType.two]].power *
            convertValue(innerValue.two),
        ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerType, innerValue, bonusPower]);

  return (
    <FlexView
      border="lightgray"
      css={{ padding: `20px` }}
      gap={16}
      items="center"
      radius={4}
    >
      <FlexView gap={8} items="center" row>
        <Select label={INNER_POWER_TYPES[innerType.one]} width={200} disabled>
          <Option
            selected={INNER_POWER_TYPES[innerType.one]}
            values={INNER_POWER_TYPES}
            onSelect={selectInnerTypeOne}
          />
        </Select>

        <Input
          aria-label="수치"
          height={40}
          placeholder="수치"
          readOnly={innerType.one === 0}
          value={innerValue.one || ``}
          width={80}
          center
          onChange={e => inputValue(`one`, e)}
        />
      </FlexView>

      <FlexView gap={8} items="center" row>
        <Select label={INNER_POWER_TYPES[innerType.two]} width={200} disabled>
          <Option
            selected={INNER_POWER_TYPES[innerType.two]}
            values={INNER_POWER_TYPES}
            onSelect={selectInnerTypeTwo}
          />
        </Select>

        <Input
          aria-label="수치"
          height={40}
          placeholder="수치"
          readOnly={innerType.two === 0}
          value={innerValue.two || ``}
          width={80}
          center
          onChange={e => inputValue(`two`, e)}
        />
      </FlexView>

      <FlexView gap={8} items="center" row>
        <Select label={BONUS_POWERS[bonusPower]} width={200}>
          <Option
            selected={BONUS_POWERS[bonusPower]}
            values={BONUS_POWERS}
            onSelect={selectBonusePower}
          />
        </Select>

        <FlexView css={{ width: `80px` }} />
      </FlexView>

      <Text weight="semiBold">내공 강화 전투력: {innerPower}</Text>
    </FlexView>
  );
}
