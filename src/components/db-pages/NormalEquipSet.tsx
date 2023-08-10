import { useState } from 'react';

import { Button, FlexView, Image, Text } from '@components/common';
import { Select, Option } from '@components/select';
import { EQUIP_SET_INDEX, EQUIP_SET_LIST } from '@constants/equip';
import { Colors } from '@styles/system';
import { useResponsive } from '@utils/hooks';

const ITEM_TYPES = [
  `장비 종류`,
  `용장비`,
  `북방장비`,
  `중국전설`,
  `일본전설`,
  `환웅장비`,
  `백제/황산벌`,
  `전우치/구미호`,
  `타계장비`,
  `흉수계/봉래산`,
  `생산장비`,
  `격전지/전장`,
  `귀문장비`,
  `기타장비`,
];

export default () => {
  const isMobile = useResponsive(620);
  const basicUrl = `https://asset.dotols.com/image/equip-set/`;

  const [equipType, setEquipType] = useState(0);
  const [slotItems, setSlotItems] = useState({
    one: -1,
    two: -1,
    three: -1,
  });
  const equipSetList = EQUIP_SET_LIST[ITEM_TYPES[equipType]];

  const selectEquipType = (id: number) => {
    setEquipType(id);
  };

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
        content="between"
        css={{ padding: isMobile ? `0 4px` : undefined }}
        items="center"
        row
      >
        <Text xLarge={isMobile} xxLarge={!isMobile} bold center>
          한벌 효과
        </Text>

        <Select
          height={36}
          isMobile={isMobile}
          name={ITEM_TYPES[equipType]}
          width={isMobile ? 112 : 130}
        >
          <Option
            selected={ITEM_TYPES[equipType]}
            values={ITEM_TYPES}
            onSelect={selectEquipType}
          />
        </Select>
      </FlexView>

      <FlexView
        css={{
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `10px`,
          minHeight: isMobile ? `74px` : `78px`,
          margin: isMobile ? `0 4px` : undefined,
        }}
        gap={isMobile ? 4 : 8}
        row
        wrap
      >
        {equipSetList?.length === 0 && (
          <FlexView center fill>
            <Text color="gray" small={isMobile}>
              한벌 효과를 선택하면 빈 슬롯에 자동으로 추가됩니다.
            </Text>
            <Text color="gray" small={isMobile}>
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
            <Text color={Colors.primary} small={isMobile}>
              {set}
            </Text>
          </Button>
        ))}
      </FlexView>

      <FlexView
        content={isMobile ? `start` : `center`}
        css={{
          border: `1px solid lightgray`,
          borderRadius: `4px`,
          padding: `8px`,
        }}
        gap={isMobile ? 20 : 40}
        items={isMobile ? `center` : `start`}
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
              small={isMobile}
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
              small={isMobile}
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
              small={isMobile}
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
};
