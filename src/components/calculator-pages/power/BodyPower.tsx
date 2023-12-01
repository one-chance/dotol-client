import { useEffect, useState } from 'react';

import { FlexView, Input, Text } from '@components/common';
import { useResponsive } from '@hooks/index';

const PARTS = [
  `무기`,
  `갑옷`,
  `투구`,
  `왼손`,
  `오른손`,
  `목/어깨`,
  `망토`,
  `신발`,
];

export default () => {
  const isMobile = useResponsive(580);
  const [bodyPower, setBodyPower] = useState(0);
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const inputValue = (
    order: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const temp = e.target.value.replace(/[^0-9]/g, ``);

    if (order < 5 && Number(temp) > 20) return;
    if (order >= 5 && Number(temp) > 15) return;

    value[order] = Number(temp);
    setValue([...value]);
  };

  useEffect(() => {
    const tempPower =
      value[0] * 5 +
      value[1] * 5 +
      value[2] * 5 +
      value[3] * 5 +
      value[4] * 5 +
      (value[5] === 0 ? 0 : value[5] * 5 + 25) +
      (value[6] === 0 ? 0 : value[6] * 5 + 25) +
      (value[7] === 0 ? 0 : value[7] * 5 + 25);

    setBodyPower(tempPower);
  }, [value]);

  return (
    <FlexView
      border="lightgray"
      css={{ padding: `20px` }}
      gap={16}
      items="center"
      radius={4}
    >
      <FlexView
        content="between"
        css={{ width: isMobile ? `298px` : `380px` }}
        gap={8}
        items="center"
        row
        wrap
      >
        {PARTS.map((part, index) => (
          <FlexView key={part} items="center" row>
            <Text
              css={{ minWidth: isMobile ? `60px` : `75px` }}
              size={isMobile ? `small` : `normal`}
              weight="semiBold"
            >
              {part}
            </Text>

            <Input
              aria-label="등급"
              height={40}
              isMobile={isMobile}
              placeholder="등급"
              value={value[index] || ``}
              width={isMobile ? 60 : 100}
              center
              onChange={e => inputValue(index, e)}
            />
          </FlexView>
        ))}
      </FlexView>

      <Text weight="semiBold">신체강화 전투력: {bodyPower}</Text>
    </FlexView>
  );
};
