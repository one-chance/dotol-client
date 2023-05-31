import { useState } from 'react';

import { Button, FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';

export default () => {
  const EQUIP_PARTS = [`무기`, `투구`, `갑옷`, `명경`, `장갑`, `보주`];
  // prettier-ignore
  const GRADES = [ `1성`, `2성`, `3성`, `4성`, `5성`, `6성`, `6성+1`, `7성`, `7성+1`, `8성`, `8성+1`, `8성+2`, `9성`, `9성+1`, `9성+2` ];

  const ATTRIBUTES = [
    `무기`,
    `피해흡수무시`,
    `마법수준향상`,
    `피해흡수`,
    `공격력증가`,
    `방어구관통`,
    `방어도무시`,
    `체력치`,
    `마력치`,
    `타격치`,
  ];

  const [weaponGrade, setWeaponGrade] = useState(`1성`);

  const selectWeapon = (index: number) => {
    setWeaponGrade(GRADES[index]);
  };

  return (
    <FlexView css={{ maxWidth: `1400px`, width: `100%` }}>
      <FlexView css={{ width: `400px` }}>
        <FlexView items="start" row>
          <Select name={weaponGrade} width={180}>
            <Option
              selected={weaponGrade}
              values={GRADES}
              onSelect={selectWeapon}
            />
          </Select>
        </FlexView>

        <FlexView css={{ border: `1px solid lightgray` }}>이미지 박스</FlexView>
      </FlexView>
    </FlexView>
  );
};
