import { useEffect, useState } from 'react';

import { FlexView, Input, Text } from '@components/common';

const PARTS = [
  `무기`,
  `투구`,
  `갑옷`,
  `목/어깨`,
  `왼손`,
  `오른손`,
  `망토`,
  `신발`,
];

export default () => {
  const [bodyPower, setBodyPower] = useState(0);

  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const inputValue = (
    order: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const temp = e.target.value.replace(/[^0-9]/g, ``);

    if (Number(temp) > 20) return;
    value[order] = Number(temp);
    setValue([...value]);
  };

  useEffect(() => {
    const multipliedSum = value
      .map(num => num * 5)
      .reduce((acc, curr) => acc + curr, 0);
    setBodyPower(multipliedSum);
  }, [value]);

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
      <FlexView gap={8}>
        {PARTS.map((part, index) => (
          <FlexView key={part} items="center" row>
            <Text css={{ minWidth: `100px` }} semiBold>
              {part}
            </Text>

            <Input
              aria-label="등급"
              height={40}
              placeholder="등급"
              value={value[index] || ``}
              width={100}
              center
              onChange={e => inputValue(index, e)}
            />
          </FlexView>
        ))}
      </FlexView>

      <Text semiBold>신체강화 전투력: {bodyPower}</Text>
    </FlexView>
  );
};
