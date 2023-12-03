import { useState, useEffect } from 'react';

import { FlexView, Input, Text } from '@components/common';

export default function LevelPower() {
  const [level, setLevel] = useState(0);
  const [levelPower, setLevelPower] = useState(0);

  const inputLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(Number(e.target.value.replace(/[^0-9]/g, ``)));
  };

  useEffect(() => {
    if (level < 99 || level > 899) {
      setLevelPower(0);
      return;
    }

    const grade: number = Math.floor(level / 100);
    const powerByLevel = grade * 3.5 * (level % 100);
    const POWER_BY_GRADE: number[] = [
      649.5, 1003, 2056.5, 3810, 6263.5, 9417, 13270.5, 17824, 20249.5,
    ];

    if (level === 99) setLevelPower(650);
    else {
      const temp = Math.round(powerByLevel + POWER_BY_GRADE[grade]);
      setLevelPower(temp);
    }
  }, [level]);

  return (
    <FlexView
      border="lightgray"
      css={{
        minWidth: `300px`,
        padding: `20px`,
      }}
      gap={16}
      items="center"
      radius={4}
    >
      <Input
        aria-label="레벨"
        placeholder="99~899"
        value={level || ``}
        center
        onChange={inputLevel}
      />
      <Text weight="semiBold">{`레벨 전투력: ${levelPower}`}</Text>
    </FlexView>
  );
}
