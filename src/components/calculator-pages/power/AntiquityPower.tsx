import { useState, useEffect } from 'react';

import { FlexView, Text } from '@components/common';
import { Select, Option } from '@components/select';
import {
  ANTIQUITY_GLASSES,
  ANTIQUITY_WEAPONS,
  ANTIQUITY_ARMORS,
  ANTIQUITY_HELMETS,
  ANTIQUITY_GLOVES,
  ANTIQUITY_ORBS,
} from '@constants/equip';
import { ANTIQUITY_POWER } from '@constants/power';

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
      ANTIQUITY_POWER[equips.glasses] +
      ANTIQUITY_POWER[equips.weapon] +
      ANTIQUITY_POWER[equips.armor] +
      ANTIQUITY_POWER[equips.helmet] +
      ANTIQUITY_POWER[equips.leftGlove] +
      ANTIQUITY_POWER[equips.rightGlove] +
      ANTIQUITY_POWER[equips.leftOrb] +
      ANTIQUITY_POWER[equips.rightOrb];

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
          <Select name={ANTIQUITY_GLASSES[equips.glasses]} width={SELECT_WIDTH}>
            <Option
              selected={ANTIQUITY_GLASSES[equips.glasses]}
              values={ANTIQUITY_GLASSES}
              onSelect={selectGlasses}
            />
          </Select>

          <Select
            max={200}
            name={ANTIQUITY_WEAPONS[equips.weapon]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={ANTIQUITY_WEAPONS[equips.weapon]}
              values={ANTIQUITY_WEAPONS}
              onSelect={selectWeapon}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select
            max={200}
            name={ANTIQUITY_ARMORS[equips.armor]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={ANTIQUITY_ARMORS[equips.armor]}
              values={ANTIQUITY_ARMORS}
              onSelect={selectArmor}
            />
          </Select>

          <Select
            max={200}
            name={ANTIQUITY_HELMETS[equips.helmet]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={ANTIQUITY_HELMETS[equips.helmet]}
              values={ANTIQUITY_HELMETS}
              onSelect={selectHelmet}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select
            name={ANTIQUITY_GLOVES[equips.leftGlove]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={ANTIQUITY_GLOVES[equips.leftGlove]}
              values={ANTIQUITY_GLOVES}
              onSelect={selectLeftGlove}
            />
          </Select>

          <Select
            name={ANTIQUITY_GLOVES[equips.rightGlove]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={ANTIQUITY_GLOVES[equips.rightGlove]}
              values={ANTIQUITY_GLOVES}
              onSelect={selectRightGlove}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select name={ANTIQUITY_ORBS[equips.leftOrb]} width={SELECT_WIDTH}>
            <Option
              selected={ANTIQUITY_ORBS[equips.leftOrb]}
              values={ANTIQUITY_ORBS}
              onSelect={selectLeftOrb}
            />
          </Select>

          <Select name={ANTIQUITY_ORBS[equips.rightOrb]} width={SELECT_WIDTH}>
            <Option
              selected={ANTIQUITY_ORBS[equips.rightOrb]}
              values={ANTIQUITY_ORBS}
              onSelect={selectRightOrb}
            />
          </Select>
        </FlexView>
      </FlexView>

      <Text semiBold>신수유물 전투력: {antiquityPower}</Text>
    </FlexView>
  );
};
