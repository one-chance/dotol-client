import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { EQUIP_SET_INDEX, EQUIP_SET_LIST } from '@constants/index';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/index';

interface NormalEquipSetProps {
  type: string;
}

export default function NormalEquipSet({ type }: NormalEquipSetProps) {
  const isMobile = useResponsive(620);
  const basicUrl = `https://asset.dotols.com/image/equip-set/`;

  const [slotItems, setSlotItems] = useState({
    one: -1,
    two: -1,
    three: -1,
  });
  const equipSetList = EQUIP_SET_LIST[type];

  const saveToSlot = (name: string) => {
    if (slotItems.one === -1) {
      setSlotItems({ ...slotItems, one: EQUIP_SET_INDEX.indexOf(name) + 1 });
      return;
    }
    if (slotItems.two === -1) {
      setSlotItems({ ...slotItems, two: EQUIP_SET_INDEX.indexOf(name) + 1 });
      return;
    }
    if (slotItems.three === -1) {
      setSlotItems({ ...slotItems, three: EQUIP_SET_INDEX.indexOf(name) + 1 });
    }
  };

  const removeFromSlot = (slot: string) => {
    setSlotItems({ ...slotItems, [slot]: -1 });
  };

  return (
    <FlexView gap={20}>
      <FlexView
        border="lightgray"
        css={{
          padding: `10px`,
          minHeight: isMobile ? `74px` : `78px`,
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
            onClick={() => saveToSlot(set)}
          >
            <Text color={Colors.primary} size={isMobile ? `small` : `normal`}>
              {set}
            </Text>
          </Button>
        ))}
      </FlexView>

      <FlexView
        border="lightgray"
        content={isMobile ? `start` : `center`}
        css={{
          padding: `8px`,
        }}
        gap={isMobile ? 20 : 40}
        items={isMobile ? `center` : `start`}
        radius={4}
        row={!isMobile}
      >
        <FlexView css={{ width: `245px` }} gap={12} items="center">
          <Button
            border={slotItems.one !== -1 ? Colors.red : Colors.purple}
            css={{ width: `60px`, height: `36px` }}
            radius={4}
            onClick={() => removeFromSlot(`one`)}
          >
            <Text
              color={slotItems.one !== -1 ? Colors.red : Colors.purple}
              size={isMobile ? `small` : `normal`}
            >
              슬롯1
            </Text>
          </Button>

          {slotItems.one !== -1 && (
            <Image
              css={{ maxWidth: `245px` }}
              src={`${basicUrl}${slotItems.one}.png`}
            />
          )}
        </FlexView>

        <FlexView css={{ width: `245px` }} gap={12} items="center">
          <Button
            border={slotItems.two !== -1 ? Colors.red : Colors.purple}
            css={{ width: `60px`, height: `36px` }}
            radius={4}
            onClick={() => removeFromSlot(`two`)}
          >
            <Text
              color={slotItems.two !== -1 ? Colors.red : Colors.purple}
              size={isMobile ? `small` : `normal`}
            >
              슬롯2
            </Text>
          </Button>

          {slotItems.two !== -1 && (
            <Image
              css={{ maxWidth: `245px` }}
              src={`${basicUrl}${slotItems.two}.png`}
            />
          )}
        </FlexView>

        <FlexView css={{ width: `245px` }} gap={12} items="center">
          <Button
            border={slotItems.three !== -1 ? Colors.red : Colors.purple}
            css={{ width: `60px`, height: `36px` }}
            radius={4}
            onClick={() => removeFromSlot(`three`)}
          >
            <Text
              color={slotItems.three !== -1 ? Colors.red : Colors.purple}
              size={isMobile ? `small` : `normal`}
            >
              슬롯3
            </Text>
          </Button>

          {slotItems.three !== -1 && (
            <Image
              css={{ maxWidth: `245px` }}
              src={`${basicUrl}${slotItems.three}.png`}
            />
          )}
        </FlexView>
      </FlexView>
    </FlexView>
  );
}
