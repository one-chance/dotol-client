import { useEffect, useState } from 'react';

import { FlexView, Input, Select, Option, Text } from '@components/common';

const ENGRAVES = [
  `방어구관통`,
  `방어도무시`,
  `방어도`,
  `직타저항`,
  `마법치명`,
  `마력증강`,
  `공격력증가`,
];

export default () => {
  const [engrave, setEngrave] = useState({
    one: ENGRAVES[0],
    two: ENGRAVES[0],
  });
  const [value, setValue] = useState({
    one: ``,
    two: ``,
  });

  const [engravePower, setEngravePower] = useState(0);

  const selectEngraveOne = (id: number) => {
    setEngrave({
      ...engrave,
      one: ENGRAVES[id],
    });
  };

  const selectEngraveTwo = (id: number) => {
    setEngrave({
      ...engrave,
      two: ENGRAVES[id],
    });
  };

  const inputValue = (
    order: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const temp = e.target.value.replace(/[^0-9.]|([.-](?=.*[.-]))/g, ``);

    setValue({ ...value, [order]: temp });
  };

  useEffect(() => {
    setEngravePower(0);
  }, [engrave, value]);

  return (
    <FlexView
      border="lightgray"
      radius={4}
      css={{ padding: `20px` }}
      gap={16}
      items="center"
    >
      <FlexView gap={8}>
        <FlexView gap={8} items="center" row>
          <Select label={engrave.one} width={120} disabled>
            <Option
              selected={engrave.one}
              values={ENGRAVES}
              onSelect={selectEngraveOne}
            />
          </Select>

          <Input
            aria-label="수치"
            height={40}
            placeholder="수치(%)"
            value={value.one || ``}
            width={100}
            center
            readOnly
            onChange={e => inputValue(`one`, e)}
          />
        </FlexView>

        <FlexView gap={8} items="center" row>
          <Select label={engrave.two} width={120} disabled>
            <Option
              selected={engrave.two}
              values={ENGRAVES}
              onSelect={selectEngraveTwo}
            />
          </Select>

          <Input
            aria-label="수치"
            height={40}
            placeholder="수치(%)"
            value={value.two || ``}
            width={100}
            center
            readOnly
            onChange={e => inputValue(`two`, e)}
          />
        </FlexView>
      </FlexView>

      <Text semiBold>각인 전투력: {engravePower}</Text>
    </FlexView>
  );
};
