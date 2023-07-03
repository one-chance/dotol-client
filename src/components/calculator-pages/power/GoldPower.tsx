import { useEffect, useState } from 'react';

import { FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';

const POWERS: { [key: string]: number } = {
  '황금돋보기 능력치': 0,
  명중회피: 0.556,
  '방어도무시/방어도': 1,
  '체력/마력/힘/민/지': 1,
  '방관/마치/공증/마증': 0.417,
  '타흡/마흡/피흡': 0.417,
  '시향/회향/직타': 0.417,
  '명중률/타격치/재생력': 0.417,
};

const MAXS: { [key: string]: number } = {
  '황금돋보기 능력치': 0,
  명중회피: 9,
  '방어도무시/방어도': 5,
  '체력/마력/힘/민/지': 5,
  '방관/마치/공증/마증': 12,
  '타흡/마흡/피흡': 12,
  '시향/회향/직타': 12,
  '명중률/타격치/재생력': 12,
};

const ABILITIES = [
  `황금돋보기 능력치`,
  `명중회피`,
  `방어도무시/방어도`,
  `체력/마력/힘/민/지`,
  `방관/마치/공증/마증`,
  `타흡/마흡/피흡`,
  `시향/회향/직타`,
  `명중률/타격치/재생력`,
];

export default () => {
  const [goldPower, setGoldPower] = useState(0);
  const [ability, setAbility] = useState<{ [key: string]: string }>({
    one: ABILITIES[0],
    two: ABILITIES[0],
    three: ABILITIES[0],
  });

  const [value, setValue] = useState<{ [key: string]: string }>({
    one: ``,
    two: ``,
    three: ``,
  });

  const selectAbilityOne = (idx: number) => {
    setAbility({ ...ability, one: ABILITIES[idx] });
    setValue({ ...value, one: `` });
  };

  const selectAbilityTwo = (idx: number) => {
    setAbility({ ...ability, two: ABILITIES[idx] });
    setValue({ ...value, two: `` });
  };

  const selectAbilityThree = (idx: number) => {
    setAbility({ ...ability, three: ABILITIES[idx] });
    setValue({ ...value, three: `` });
  };

  const inputValue = (
    order: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const temp = e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``);
    const decimalPart = temp.split(`.`)[1];

    const trimmedTemp = decimalPart
      ? `${temp.split(`.`)[0]}.${decimalPart.slice(0, 2)}`
      : temp;

    if (Number(trimmedTemp) > MAXS[ability[order]]) return;

    setValue({ ...value, [order]: trimmedTemp });
  };

  const convertValue = (_value: string) =>
    _value === `` ? 0 : Number(_value) * 100;

  useEffect(() => {
    setGoldPower(
      Math.floor(POWERS[ability.one] * convertValue(value.one)) +
        Math.floor(POWERS[ability.two] * convertValue(value.two)) +
        Math.floor(POWERS[ability.three] * convertValue(value.three)),
    );
  }, [ability, value]);

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
      <FlexView gap={10} items="center" row>
        <Select name={ability.one} width={210}>
          <Option
            selected={ability.one}
            values={ABILITIES}
            onSelect={selectAbilityOne}
          />
        </Select>

        <Input
          height={40}
          placeholder="수치(%)"
          readOnly={ability.one === `황금돋보기 능력치`}
          value={value.one || ``}
          width={80}
          center
          onChange={e => inputValue(`one`, e)}
        />
      </FlexView>

      <FlexView gap={10} items="center" row>
        <Select name={ability.two} width={210}>
          <Option
            selected={ability.two}
            values={ABILITIES}
            onSelect={selectAbilityTwo}
          />
        </Select>

        <Input
          height={40}
          placeholder="수치(%)"
          readOnly={ability.two === `황금돋보기 능력치`}
          value={value.two || ``}
          width={80}
          center
          onChange={e => inputValue(`two`, e)}
        />
      </FlexView>

      <FlexView gap={10} items="center" row>
        <Select name={ability.three} width={210}>
          <Option
            selected={ability.three}
            values={ABILITIES}
            onSelect={selectAbilityThree}
          />
        </Select>

        <Input
          height={40}
          placeholder="수치(%)"
          readOnly={ability.three === `황금돋보기 능력치`}
          value={value.three || ``}
          width={80}
          center
          onChange={e => inputValue(`three`, e)}
        />
      </FlexView>

      <Text semiBold>부가잠재능력 전투력: {goldPower}</Text>
    </FlexView>
  );
};
