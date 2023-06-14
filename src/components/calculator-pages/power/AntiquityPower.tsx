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

  const [glasses, setGlasses] = useState(GLASSES[0]);
  const [weaphon, setWeapon] = useState(WEAPONS[0]);
  const [armor, setArmor] = useState(ARMORS[0]);
  const [helmet, setHelmet] = useState(HELMETS[0]);
  const [glove1, setGlove1] = useState(GLOVES[0]);
  const [glove2, setGlove2] = useState(GLOVES[0]);
  const [orb1, setOrb1] = useState(ORBS[0]);
  const [orb2, setOrb2] = useState(ORBS[0]);
  const [antiquityPower, setAntiquityPower] = useState(0);

  const selectGlasses = (idx: number) => {
    setGlasses(GLASSES[idx]);
  };

  const selectWeapon = (idx: number) => {
    setWeapon(WEAPONS[idx]);
  };

  const selectArmor = (idx: number) => {
    setArmor(ARMORS[idx]);
  };

  const selectHelmet = (idx: number) => {
    setHelmet(HELMETS[idx]);
  };

  const selectGlove1 = (idx: number) => {
    setGlove1(GLOVES[idx]);
  };

  const selectGlove2 = (idx: number) => {
    setGlove2(GLOVES[idx]);
  };

  const selectOrb1 = (idx: number) => {
    setOrb1(ORBS[idx]);
  };

  const selectOrb2 = (idx: number) => {
    setOrb2(ORBS[idx]);
  };

  useEffect(() => {
    const power =
      GLASSES_POWER[GLASSES.indexOf(glasses)] +
      EQUIP_POWERS[WEAPONS.indexOf(weaphon)] +
      EQUIP_POWERS[ARMORS.indexOf(armor)] +
      EQUIP_POWERS[HELMETS.indexOf(helmet)] +
      GRLOVE_POWERS[GLOVES.indexOf(glove1)] +
      GRLOVE_POWERS[GLOVES.indexOf(glove2)] +
      ORB_POWERS[ORBS.indexOf(orb1)] +
      ORB_POWERS[ORBS.indexOf(orb2)];

    setAntiquityPower(power);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaphon, helmet, armor, glasses, glove1, glove2, orb1, orb2]);

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
          <Select name={glasses} width={SELECT_WIDTH}>
            <Option
              selected={glasses}
              values={GLASSES}
              onSelect={selectGlasses}
            />
          </Select>

          <Select max={200} name={weaphon} width={SELECT_WIDTH}>
            <Option
              selected={weaphon}
              values={WEAPONS}
              onSelect={selectWeapon}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select max={200} name={armor} width={SELECT_WIDTH}>
            <Option selected={armor} values={ARMORS} onSelect={selectArmor} />
          </Select>

          <Select max={200} name={helmet} width={SELECT_WIDTH}>
            <Option
              selected={helmet}
              values={HELMETS}
              onSelect={selectHelmet}
            />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select name={glove1} width={SELECT_WIDTH}>
            <Option selected={glove1} values={GLOVES} onSelect={selectGlove1} />
          </Select>

          <Select name={glove2} width={SELECT_WIDTH}>
            <Option selected={glove2} values={GLOVES} onSelect={selectGlove2} />
          </Select>
        </FlexView>

        <FlexView gap={20} center row>
          <Select name={orb1} width={SELECT_WIDTH}>
            <Option selected={orb1} values={ORBS} onSelect={selectOrb1} />
          </Select>

          <Select name={orb2} width={SELECT_WIDTH}>
            <Option selected={orb2} values={ORBS} onSelect={selectOrb2} />
          </Select>
        </FlexView>
      </FlexView>

      <Text semiBold>신수유물 전투력: {antiquityPower}</Text>
    </FlexView>
  );
};
