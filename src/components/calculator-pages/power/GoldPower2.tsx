import { useEffect, useState } from 'react';

import { FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { GOLD_INFO2 } from '@constants/power';

const POWERS: { [key: string]: number } = {
  '콘텐츠 부가잠재능력': 0,
  '방어도무시/방어도': 100,
  명중회피: 100,
  마법수준향상: 60,
  '명중률/타격치': 37.5,
  '힘/민첩/지력': 15,
  '방관/공증/마증/마치': 3.75,
  '타흡/마흡/피흡': 3.75,
  '직타/시향/회향': 3.75,
  '방어도무시/방어도(%)': 1,
  '체력/마력(%)': 0.01,
  '힘/민첩/지력(%)': 0.01,
  '명중회피(%)': 0.429,
  재생력: 0.375,
  '재생력(%)': 0.3,
  '명중률/타격치(%)': 0.3,
  '마법수준향상(%)': 0.3,
  '방관/공증/마증/마치(%)': 0.3,
  '타흡/마흡/피흡(%)': 0.3,
  '직타/시향/회향(%)': 0.3,
  '체력/마력': 0.003,
};

const MAXS: { [key: string]: number } = {
  '콘텐츠 부가잠재능력': 0,
  '방어도무시/방어도': 3,
  '방어도무시/방어도(%)': 3,
  명중회피: 3,
  마법수준향상: 5,
  '명중률/타격치': 8,
  '힘/민첩/지력': 20,
  '방관/공증/마증/마치': 80,
  '타흡/마흡/피흡': 80,
  '직타/시향/회향': 80,
  '체력/마력(%)': 3,
  '힘/민첩/지력(%)': 5,
  '명중회피(%)': 7,
  재생력: 800,
  '재생력(%)': 10,
  '명중률/타격치(%)': 10,
  '마법수준향상(%)': 10,
  '방관/공증/마증/마치(%)': 10,
  '타흡/마흡/피흡(%)': 10,
  '직타/시향/회향(%)': 10,
  '체력/마력': 100000,
};

const ABILITIES = [
  `콘텐츠 부가잠재능력`,
  `방어도무시/방어도`,
  `방어도무시/방어도(%)`,
  `명중회피`,
  `명중회피(%)`,
  `마법수준향상`,
  `마법수준향상(%)`,
  `명중률/타격치`,
  `명중률/타격치(%)`,
  `힘/민첩/지력`,
  `힘/민첩/지력(%)`,
  `방관/공증/마증/마치`,
  `방관/공증/마증/마치(%)`,
  `타흡/마흡/피흡`,
  `타흡/마흡/피흡(%)`,
  `직타/시향/회향`,
  `직타/시향/회향(%)`,
  `재생력`,
  `재생력(%)`,
  `체력/마력`,
  `체력/마력(%)`,
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
    if (ability[order].includes(`%`)) {
      const temp = e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``);
      const decimalPart = temp.split(`.`)[1];
      const trimmedTemp = decimalPart
        ? `${temp.split(`.`)[0]}.${decimalPart.slice(0, 2)}`
        : temp;

      if (Number(trimmedTemp) > GOLD_INFO2[ability[order]].max) return;

      setValue({ ...value, [order]: trimmedTemp });
    } else {
      const temp = e.target.value.replace(/[^0-9]/g, ``);

      if (Number(temp) > GOLD_INFO2[ability[order]].max) return;

      setValue({ ...value, [order]: temp });
    }
  };

  const convertValue = (order: string, _value: string) => {
    if (_value === ``) return 0;

    if (ability[order].includes(`%`)) return Number(_value) * 100;

    return Number(_value);
  };

  useEffect(() => {
    setGoldPower(
      Math.floor(
        GOLD_INFO2[ability.one].power * convertValue(`one`, value.one),
      ) +
        Math.floor(
          GOLD_INFO2[ability.two].power * convertValue(`two`, value.two),
        ) +
        Math.floor(
          GOLD_INFO2[ability.three].power * convertValue(`three`, value.three),
        ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Select max={300} name={ability.one} width={210}>
          <Option
            selected={ability.one}
            values={ABILITIES}
            onSelect={selectAbilityOne}
          />
        </Select>

        <Input
          height={40}
          placeholder="수치"
          readOnly={ability.one === `콘텐츠 부가잠재능력`}
          value={value.one || ``}
          width={80}
          center
          onChange={e => inputValue(`one`, e)}
        />
      </FlexView>

      <FlexView gap={10} items="center" row>
        <Select max={300} name={ability.two} width={210}>
          <Option
            selected={ability.two}
            values={ABILITIES}
            onSelect={selectAbilityTwo}
          />
        </Select>

        <Input
          height={40}
          placeholder="수치"
          readOnly={ability.two === `콘텐츠 부가잠재능력`}
          value={value.two || ``}
          width={80}
          center
          onChange={e => inputValue(`two`, e)}
        />
      </FlexView>

      <FlexView gap={10} items="center" row>
        <Select max={300} name={ability.three} width={210}>
          <Option
            selected={ability.three}
            values={ABILITIES}
            onSelect={selectAbilityThree}
          />
        </Select>

        <Input
          height={40}
          placeholder="수치"
          readOnly={ability.three === `콘텐츠 부가잠재능력`}
          value={value.three || ``}
          width={80}
          center
          onChange={e => inputValue(`three`, e)}
        />
      </FlexView>

      <Text semiBold>콘텐츠 부가잠재능력 전투력: {goldPower}</Text>
    </FlexView>
  );
};
