import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { EQUIP_SET_INDEX, EQUIP_SET_LIST } from '@constants/index';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

import ImageSlot from './ImageSlot';

interface NormalEquipSetProps {
  type: string;
}

export default function NormalEquipSet({ type }: NormalEquipSetProps) {
  const isMobile = useResponsive(620);
  const equipSetList = EQUIP_SET_LIST[type];

  const [slot, setSlot] = useState([``, ``, ``]);

  const updateSlot = (index: number, name: string) => {
    const copy = [...slot];

    if (index === -1) {
      const emptyIndex = copy.findIndex(empty => empty === ``);
      if (emptyIndex !== -1)
        copy[emptyIndex] = `equip-set/${(
          EQUIP_SET_INDEX.indexOf(name) + 1
        ).toString()}`;
    } else {
      copy[index] = ``;
    }

    setSlot(copy);
  };

  return (
    <FlexView gap={20}>
      <FlexView
        border="lightgray"
        css={{
          padding: `10px`,
          minHeight: `80px`,
        }}
        gap={isMobile ? 4 : 8}
        radius={4}
        row
        wrap
      >
        {equipSetList?.length === 0 && (
          <FlexView center fill>
            <Text color="gray" size={isMobile ? `small` : `normal`}>
              한벌 효과를 선택하면 빈 슬롯에 자동으로 추가됩니다.
            </Text>
            <Text color="gray" size={isMobile ? `small` : `normal`}>
              슬롯 버튼을 클릭하면 빈 슬롯으로 변경됩니다.
            </Text>
          </FlexView>
        )}

        {equipSetList.map(set => (
          <Button
            key={set}
            css={{
              height: `24px`,
              padding: `2px 4px`,
            }}
            onClick={() => updateSlot(-1, set)}
          >
            <Text color={Colors.primary} size={isMobile ? `small` : `normal`}>
              {set}
            </Text>
          </Button>
        ))}
      </FlexView>

      <ImageSlot
        isMobile={isMobile}
        items={slot}
        width={245}
        onSelect={updateSlot}
      />
    </FlexView>
  );
}
