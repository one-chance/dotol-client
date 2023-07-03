import { useState, useEffect } from 'react';

import { Checkbox, FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import {
  GRADES,
  NECKLACES,
  NECKLACES_POWER,
  WEAPONS,
  EQUIPS_POWER,
  FACES,
  FACES_POWER,
  ARMORS,
  HELMETS,
  GLOVES,
  GRLOVES_POWER,
  SHIELDS,
  SHIELDS_POWER,
  CLOTHES,
  CLOTHES_POWER,
} from '@constants/petEquip';

export default () => {
  const SELECT_WIDTH = 140;

  const [reinforce, setReinforce] = useState<{ [key: string]: number }>({
    helmet: 0,
    weapon: 0,
    armor: 0,
    shield: 0,
    leftGlove: 0,
    rightGlove: 0,
  });

  const [equips, setEquips] = useState({
    grade: 0,
    level: 0,
    necklace: 0,
    helmet: 0,
    face: 0,
    weapon: 0,
    armor: 0,
    shield: 0,
    leftGlove: 0,
    rightGlove: 0,
    clothes: 0,
  });

  const [petEquipPower, setPetEquipPower] = useState(0);

  const selectGrade = (idx: number) => {
    setEquips({ ...equips, grade: idx });
  };

  const inputLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempLevel = Number(e.target.value.replace(/[^0-9]/g, ``));
    if (tempLevel > 99) return;

    setEquips({ ...equips, level: tempLevel });
  };

  const selectWeapon = (idx: number) => {
    setEquips({ ...equips, weapon: idx });
  };

  const selectHelmet = (idx: number) => {
    setEquips({ ...equips, helmet: idx });
  };

  const selectFace = (idx: number) => {
    setEquips({ ...equips, face: idx });
  };

  const selectArmor = (idx: number) => {
    setEquips({ ...equips, armor: idx });
  };

  const selectShield = (idx: number) => {
    setEquips({ ...equips, shield: idx });
  };

  const selectLeftGlove = (idx: number) => {
    setEquips({ ...equips, leftGlove: idx });
  };

  const selectRightGlove = (idx: number) => {
    setEquips({ ...equips, rightGlove: idx });
  };

  const selectNecklace = (idx: number) => {
    setEquips({ ...equips, necklace: idx });
  };

  const selectClothes = (idx: number) => {
    setEquips({ ...equips, clothes: idx });
  };

  const applyReinforce = (key: string, value: number) => {
    if (reinforce[key] === value) setReinforce({ ...reinforce, [key]: 0 });

    setReinforce({ ...reinforce, [key]: value });
  };

  useEffect(() => {
    const petPower =
      equips.level === 0 ? 0 : 200 * equips.grade + 2 * equips.level;
    const power =
      petPower +
      EQUIPS_POWER[equips.weapon] +
      EQUIPS_POWER[equips.armor] +
      EQUIPS_POWER[equips.helmet] +
      NECKLACES_POWER[equips.necklace] +
      FACES_POWER[equips.face] +
      SHIELDS_POWER[equips.shield] +
      GRLOVES_POWER[equips.leftGlove] +
      GRLOVES_POWER[equips.rightGlove] +
      CLOTHES_POWER[equips.clothes] +
      200 * reinforce.weapon +
      200 * reinforce.armor +
      200 * reinforce.helmet +
      200 * reinforce.shield +
      200 * reinforce.leftGlove +
      200 * reinforce.rightGlove;

    setPetEquipPower(power);
  }, [equips, reinforce]);

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
          <Select max={200} name={GRADES[equips.grade]} width={SELECT_WIDTH}>
            <Option
              selected={GRADES[equips.weapon]}
              values={GRADES}
              onSelect={selectGrade}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Input
              height={40}
              placeholder="환수 레벨"
              value={equips.level || ``}
              center
              onChange={inputLevel}
            />
          </FlexView>
        </FlexView>

        <FlexView gap={20} center row>
          <Select max={200} name={WEAPONS[equips.weapon]} width={SELECT_WIDTH}>
            <Option
              selected={WEAPONS[equips.weapon]}
              values={WEAPONS}
              onSelect={selectWeapon}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.weapon === 0}
              onChange={() => applyReinforce(`weapon`, 1)}
            />
            <Text small>강화+1</Text>

            <Checkbox
              disabled={equips.weapon === 0}
              onChange={() => applyReinforce(`weapon`, 2)}
            />
            <Text small>강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select max={200} name={HELMETS[equips.helmet]} width={SELECT_WIDTH}>
            <Option
              selected={HELMETS[equips.helmet]}
              values={HELMETS}
              onSelect={selectHelmet}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.helmet === 0}
              onChange={() => applyReinforce(`helmet`, 1)}
            />
            <Text small>강화+1</Text>

            <Checkbox
              disabled={equips.helmet === 0}
              onChange={() => applyReinforce(`helmet`, 2)}
            />
            <Text small>강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} center row>
          <Select max={200} name={ARMORS[equips.armor]} width={SELECT_WIDTH}>
            <Option
              selected={ARMORS[equips.armor]}
              values={ARMORS}
              onSelect={selectArmor}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.armor === 0}
              onChange={() => applyReinforce(`armor`, 1)}
            />
            <Text small>강화+1</Text>

            <Checkbox
              disabled={equips.armor === 0}
              onChange={() => applyReinforce(`armor`, 2)}
            />
            <Text small>강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select name={GLOVES[equips.leftGlove]} width={SELECT_WIDTH}>
            <Option
              selected={GLOVES[equips.leftGlove]}
              values={GLOVES}
              onSelect={selectLeftGlove}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.leftGlove === 0}
              onChange={() => applyReinforce(`leftGlove`, 1)}
            />
            <Text small>강화+1</Text>

            <Checkbox
              disabled={equips.leftGlove === 0}
              onChange={() => applyReinforce(`leftGlove`, 2)}
            />
            <Text small>강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select name={GLOVES[equips.rightGlove]} width={SELECT_WIDTH}>
            <Option
              selected={GLOVES[equips.rightGlove]}
              values={GLOVES}
              onSelect={selectRightGlove}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.rightGlove === 0}
              onChange={() => applyReinforce(`rightGlove`, 1)}
            />
            <Text small>강화+1</Text>

            <Checkbox
              disabled={equips.rightGlove === 0}
              onChange={() => applyReinforce(`rightGlove`, 2)}
            />
            <Text small>강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select name={SHIELDS[equips.shield]} width={SELECT_WIDTH}>
            <Option
              selected={SHIELDS[equips.shield]}
              values={SHIELDS}
              onSelect={selectShield}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.shield === 0}
              onChange={() => applyReinforce(`shield`, 1)}
            />
            <Text small>강화+1</Text>
          </FlexView>
        </FlexView>

        <Select name={NECKLACES[equips.necklace]} width={SELECT_WIDTH}>
          <Option
            selected={NECKLACES[equips.necklace]}
            values={NECKLACES}
            onSelect={selectNecklace}
          />
        </Select>

        <Select name={FACES[equips.face]} width={SELECT_WIDTH}>
          <Option
            selected={FACES[equips.face]}
            values={FACES}
            onSelect={selectFace}
          />
        </Select>

        <Select name={CLOTHES[equips.clothes]} width={SELECT_WIDTH}>
          <Option
            selected={CLOTHES[equips.clothes]}
            values={CLOTHES}
            onSelect={selectClothes}
          />
        </Select>
      </FlexView>

      <Text semiBold>환수장비 전투력: {petEquipPower}</Text>
    </FlexView>
  );
};
