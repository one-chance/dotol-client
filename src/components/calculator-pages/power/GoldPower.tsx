import { useEffect, useState } from 'react';

import { FlexView, Input, Select, Option, Text } from '@components/common';
import { GOLD_POWER } from '@constants/index';

const ABILITIES = [
  `황금돋보기 능력치`,
  `방어도무시/방어도(%)`,
  `체력/마력(%)`,
  `명중회피(%)`,
  `힘/민첩/지력(%)`,
  `방관/마치/공증/마증(%)`,
  `타흡/마흡/피흡(%)`,
  `시향/회향/직타(%)`,
  `명중률/타격치/재생력(%)`,
  `마법수준향상(%)`,
];

export default function GoldPower() {
  const [goldPower, setGoldPower] = useState(0);
  const [ability, setAbility] = useState<Record<string, string>>({
    one: ABILITIES[0],
    two: ABILITIES[0],
    three: ABILITIES[0],
  });

  const [value, setValue] = useState<Record<string, string>>({
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

    if (Number(trimmedTemp) > GOLD_POWER[ability[order]].max) return;

    setValue({ ...value, [order]: trimmedTemp });
  };

  const convertValue = (_value: string) =>
    _value === `` ? 0 : Number(_value) * 100;

  useEffect(() => {
    setGoldPower(
      Math.floor(GOLD_POWER[ability.one].power * convertValue(value.one)) +
        Math.floor(GOLD_POWER[ability.two].power * convertValue(value.two)) +
        Math.floor(GOLD_POWER[ability.three].power * convertValue(value.three)),
    );
  }, [ability, value]);

  return (
    <FlexView
      border="lightgray"
      css={{ padding: `20px` }}
      gap={16}
      items="center"
      radius={4}
    >
      <FlexView gap={10} items="center" row>
        <Select label={ability.one} width={210}>
          <Option
            selected={ability.one}
            values={ABILITIES}
            onSelect={selectAbilityOne}
          />
        </Select>

        <Input
          aria-label="수치"
          height={40}
          placeholder="수치"
          readOnly={ability.one === `황금돋보기 능력치`}
          value={value.one || ``}
          width={80}
          center
          onChange={e => inputValue(`one`, e)}
        />
      </FlexView>

      <FlexView gap={10} items="center" row>
        <Select label={ability.two} width={210}>
          <Option
            selected={ability.two}
            values={ABILITIES}
            onSelect={selectAbilityTwo}
          />
        </Select>

        <Input
          aria-label="수치"
          height={40}
          placeholder="수치"
          readOnly={ability.two === `황금돋보기 능력치`}
          value={value.two || ``}
          width={80}
          center
          onChange={e => inputValue(`two`, e)}
        />
      </FlexView>

      <FlexView gap={10} items="center" row>
        <Select label={ability.three} width={210}>
          <Option
            selected={ability.three}
            values={ABILITIES}
            onSelect={selectAbilityThree}
          />
        </Select>

        <Input
          aria-label="수치"
          height={40}
          placeholder="수치"
          readOnly={ability.three === `황금돋보기 능력치`}
          value={value.three || ``}
          width={80}
          center
          onChange={e => inputValue(`three`, e)}
        />
      </FlexView>

      <Text weight="semiBold">(황돋)부가잠재능력 전투력: {goldPower}</Text>
    </FlexView>
  );
}
