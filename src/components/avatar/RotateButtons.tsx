import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';

type RotateButtonProps = {
  selected: number;
  color: string;
  onClick: (a: any) => void;
};

export default ({ selected, color, onClick }: RotateButtonProps) => {
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
    <FlexView
      css={{
        border: `0.5px solid ${color}`,
        borderRadius: `4px`,
      }}
      fit
      row
    >
      {directions.map((direction, index) => (
        <Button
          key={direction.name}
          css={{
            width: `48px`,
            height: `40px`,
            border: `0.5px solid ${color}`,
            backgroundColor:
              selectedButton === direction.value ? color : `white`,
            ...(index === 0 && { borderRadius: `4px 0 0 4px` }),
            ...(index === directions.length - 1 && {
              borderRadius: `0 4px 4px 0`,
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
};
