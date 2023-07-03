import { useState, useEffect } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import {
  GLASSES,
  GLASSES_POWER,
  WEAPONS,
  EQUIP_POWERS,
  ARMORS,
  HELMETS,
  GLOVES,
  GRLOVE_POWERS,
  ORBS,
  ORB_POWERS,
} from '@constants/antiquity';

export default () => {
  const SELECT_WIDTH = 140;

  const [equips, setEquips] = useState({
    glasses: 0,
    weapon: 0,
    armor: 0,
    helmet: 0,
    leftGlove: 0,
    rightGlove: 0,
    leftOrb: 0,
    rightOrb: 0,
  });

  const [antiquityPower, setAntiquityPower] = useState(0);

  const selectGlasses = (idx: number) => {
    setEquips({ ...equips, glasses: idx });
  };

  const selectWeapon = (idx: number) => {
    setEquips({ ...equips, weapon: idx });
  };

  const selectArmor = (idx: number) => {
    setEquips({ ...equips, armor: idx });
  };

  const selectHelmet = (idx: number) => {
    setEquips({ ...equips, helmet: idx });
  };

  const selectLeftGlove = (idx: number) => {
    setEquips({ ...equips, leftGlove: idx });
  };

  const selectRightGlove = (idx: number) => {
    setEquips({ ...equips, rightGlove: idx });
  };

  const selectLeftOrb = (idx: number) => {
    setEquips({ ...equips, leftOrb: idx });
  };

  const selectRightOrb = (idx: number) => {
    setEquips({ ...equips, rightOrb: idx });
  };

  useEffect(() => {
    const power =
      GLASSES_POWER[equips.glasses] +
      EQUIP_POWERS[equips.weapon] +
      EQUIP_POWERS[equips.armor] +
      EQUIP_POWERS[equips.helmet] +
      GRLOVE_POWERS[equips.leftGlove] +
      GRLOVE_POWERS[equips.rightGlove] +
      ORB_POWERS[equips.leftOrb] +
      ORB_POWERS[equips.rightOrb];

    setAntiquityPower(power);
  }, [equips]);

  return (
    <FlexView
      css={{
        minWidth: `300px`,
        width: `100%`,
        border: `1px solid lightgray`,
        borderRadius: `4px`,
        padding: `20px`,
      }}
      gap={16}
      items="center"
    >
      <FlexView gap={16}>
        <FlexView gap={20} center row>
          <Select name={GLASSES[equips.glasses]} width={SELECT_WIDTH}>
            <Option
              selected={GLASSES[equips.glasses]}
              values={GLASSES}
              onSelect={selectGlasses}
            />
          </Select>

          <Select max={200} name={WEAPONS[equips.weapon]} width={SELECT_WIDTH}>
            <Option
              selected={WEAPONS[equips.weapon]}
              values={WEAPONS}
              onSelect={selectWeapon}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select max={200} name={ARMORS[equips.armor]} width={SELECT_WIDTH}>
            <Option
              selected={ARMORS[equips.armor]}
              values={ARMORS}
              onSelect={selectArmor}
            />
          </Select>

          <Select max={200} name={HELMETS[equips.helmet]} width={SELECT_WIDTH}>
            <Option
              selected={HELMETS[equips.helmet]}
              values={HELMETS}
              onSelect={selectHelmet}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select name={GLOVES[equips.leftGlove]} width={SELECT_WIDTH}>
            <Option
              selected={GLOVES[equips.leftGlove]}
              values={GLOVES}
              onSelect={selectLeftGlove}
            />
          </Select>

          <Select name={GLOVES[equips.rightGlove]} width={SELECT_WIDTH}>
            <Option
              selected={GLOVES[equips.rightGlove]}
              values={GLOVES}
              onSelect={selectRightGlove}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select name={ORBS[equips.leftOrb]} width={SELECT_WIDTH}>
            <Option
              selected={ORBS[equips.leftOrb]}
              values={ORBS}
              onSelect={selectLeftOrb}
            />
          </Select>

          <Select name={ORBS[equips.rightOrb]} width={SELECT_WIDTH}>
            <Option
              selected={ORBS[equips.rightOrb]}
              values={ORBS}
              onSelect={selectRightOrb}
            />
          </Select>
        </FlexView>
      </FlexView>

      <Text semiBold>신수유물 전투력: {antiquityPower}</Text>
    </FlexView>
  );
};
