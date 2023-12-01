import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';

type RotateButtonProps = {
  selected: number;
  color: string;
  onClick: (a: any) => void;
};

export default function RotateButton({
  selected,
  color,
  onClick,
}: RotateButtonProps) {
  const [selectedButton, setSelectedButton] = useState(selected);

  const directions = [
    {
      name: `전`,
      value: 2,
    },
    {
      name: `후`,
      value: 0,
    },
    {
      name: `좌`,
      value: 3,
    },
    {
      name: `우`,
      value: 1,
    },
  ];

  const selectButton = (dir: number) => {
    setSelectedButton(dir);
    onClick(dir);
  };

  return (
    <FlexView fit row>
      {directions.map((direction, index) => (
        <Button
          key={direction.name}
          aria-label="아바타 방향"
          css={{
            width: `45px`,
            height: `36px`,
            border: `1px solid ${color}`,
            borderWidth: `1px 0.5px 1px 0.5px`,
            backgroundColor:
              selectedButton === direction.value ? color : `white`,
            ...(index === 0 && {
              borderRadius: `4px 0 0 4px`,
              borderLeftWidth: `1px`,
            }),
            ...(index === directions.length - 1 && {
              borderRadius: `0 4px 4px 0`,
              borderRightWidth: `1px`,
            }),
          }}
          onClick={() => {
            selectButton(direction.value);
          }}
        >
          <Text color={selectedButton === direction.value ? `white` : color}>
            {direction.name}
          </Text>
        </Button>
      ))}
    </FlexView>
  );
}
