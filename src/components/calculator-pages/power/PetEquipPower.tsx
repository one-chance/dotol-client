import { useState, useEffect } from 'react';

import {
  Checkbox,
  FlexView,
  Input,
  Select,
  Option,
  Text,
} from '@components/common';
import {
  PET_GRADES,
  PET_EQUIP_NECKLACES,
  PET_EQUIP_WEAPONS,
  PET_EQUIP_FACES,
  PET_EQUIP_ARMORS,
  PET_EQUIP_HELMETS,
  PET_EQUIP_GLOVES,
  PET_EQUIP_SHIELDS,
  PET_EQUIP_CLOTHES,
  PET_EQUIP_POWER,
} from '@constants/index';

export default function PetEquipPower() {
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
    else setReinforce({ ...reinforce, [key]: value });
  };

  useEffect(() => {
    const petPower =
      equips.grade === 0 || equips.level === 0
        ? 0
        : 200 * equips.grade + 2 * equips.level;

    const power =
      petPower +
      PET_EQUIP_POWER[PET_EQUIP_WEAPONS[equips.weapon]] +
      PET_EQUIP_POWER[PET_EQUIP_ARMORS[equips.armor]] +
      PET_EQUIP_POWER[PET_EQUIP_HELMETS[equips.helmet]] +
      PET_EQUIP_POWER[PET_EQUIP_NECKLACES[equips.necklace]] +
      PET_EQUIP_POWER[PET_EQUIP_FACES[equips.face]] +
      PET_EQUIP_POWER[PET_EQUIP_SHIELDS[equips.shield]] +
      PET_EQUIP_POWER[PET_EQUIP_GLOVES[equips.leftGlove]] +
      PET_EQUIP_POWER[PET_EQUIP_GLOVES[equips.rightGlove]] +
      PET_EQUIP_POWER[PET_EQUIP_CLOTHES[equips.clothes]] +
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
      border="lightgray"
      css={{
        minWidth: `300px`,
        width: `100%`,
        padding: `20px`,
      }}
      gap={16}
      items="center"
      radius={4}
    >
      <FlexView gap={16}>
        <FlexView gap={20} center row>
          <Select label={PET_GRADES[equips.grade]} width={SELECT_WIDTH}>
            <Option
              selected={PET_GRADES[equips.weapon]}
              values={PET_GRADES}
              onSelect={selectGrade}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Input
              aria-label="환수 레벨"
              height={40}
              placeholder="환수 레벨"
              value={equips.level || ``}
              center
              onChange={inputLevel}
            />
          </FlexView>
        </FlexView>

        <FlexView gap={20} center row>
          <Select label={PET_EQUIP_WEAPONS[equips.weapon]} width={SELECT_WIDTH}>
            <Option
              selected={PET_EQUIP_WEAPONS[equips.weapon]}
              values={PET_EQUIP_WEAPONS}
              onSelect={selectWeapon}
            />
          </Select>

          <FlexView
            content="between"
            css={{ width: `140px` }}
            items="center"
            row
          >
            <FlexView gap={4} items="center" row>
              <Checkbox
                checked={reinforce.weapon === 1}
                disabled={equips.weapon === 0}
                onChange={() => applyReinforce(`weapon`, 1)}
              />
              <Text size="small">강화+1</Text>
            </FlexView>

            <FlexView gap={4} items="center" row>
              <Checkbox
                checked={reinforce.weapon === 2}
                disabled={equips.weapon === 0}
                onChange={() => applyReinforce(`weapon`, 2)}
              />
              <Text size="small">강화+2</Text>
            </FlexView>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select label={PET_EQUIP_HELMETS[equips.helmet]} width={SELECT_WIDTH}>
            <Option
              selected={PET_EQUIP_HELMETS[equips.helmet]}
              values={PET_EQUIP_HELMETS}
              onSelect={selectHelmet}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.helmet === 0}
              onChange={() => applyReinforce(`helmet`, 1)}
            />
            <Text size="small">강화+1</Text>

            <Checkbox
              disabled={equips.helmet === 0}
              onChange={() => applyReinforce(`helmet`, 2)}
            />
            <Text size="small">강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} center row>
          <Select label={PET_EQUIP_ARMORS[equips.armor]} width={SELECT_WIDTH}>
            <Option
              selected={PET_EQUIP_ARMORS[equips.armor]}
              values={PET_EQUIP_ARMORS}
              onSelect={selectArmor}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.armor === 0}
              onChange={() => applyReinforce(`armor`, 1)}
            />
            <Text size="small">강화+1</Text>

            <Checkbox
              disabled={equips.armor === 0}
              onChange={() => applyReinforce(`armor`, 2)}
            />
            <Text size="small">강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select
            label={PET_EQUIP_GLOVES[equips.leftGlove]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={PET_EQUIP_GLOVES[equips.leftGlove]}
              values={PET_EQUIP_GLOVES}
              onSelect={selectLeftGlove}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.leftGlove === 0}
              onChange={() => applyReinforce(`leftGlove`, 1)}
            />
            <Text size="small">강화+1</Text>

            <Checkbox
              disabled={equips.leftGlove === 0}
              onChange={() => applyReinforce(`leftGlove`, 2)}
            />
            <Text size="small">강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select
            label={PET_EQUIP_GLOVES[equips.rightGlove]}
            width={SELECT_WIDTH}
          >
            <Option
              selected={PET_EQUIP_GLOVES[equips.rightGlove]}
              values={PET_EQUIP_GLOVES}
              onSelect={selectRightGlove}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.rightGlove === 0}
              onChange={() => applyReinforce(`rightGlove`, 1)}
            />
            <Text size="small">강화+1</Text>

            <Checkbox
              disabled={equips.rightGlove === 0}
              onChange={() => applyReinforce(`rightGlove`, 2)}
            />
            <Text size="small">강화+2</Text>
          </FlexView>
        </FlexView>

        <FlexView gap={20} items="center" row>
          <Select label={PET_EQUIP_SHIELDS[equips.shield]} width={SELECT_WIDTH}>
            <Option
              selected={PET_EQUIP_SHIELDS[equips.shield]}
              values={PET_EQUIP_SHIELDS}
              onSelect={selectShield}
            />
          </Select>

          <FlexView css={{ width: `140px` }} gap={4} items="center" row>
            <Checkbox
              disabled={equips.shield === 0}
              onChange={() => applyReinforce(`shield`, 1)}
            />
            <Text size="small">강화+1</Text>
          </FlexView>
        </FlexView>

        <Select
          label={PET_EQUIP_NECKLACES[equips.necklace]}
          width={SELECT_WIDTH}
        >
          <Option
            selected={PET_EQUIP_NECKLACES[equips.necklace]}
            values={PET_EQUIP_NECKLACES}
            onSelect={selectNecklace}
          />
        </Select>

        <Select label={PET_EQUIP_FACES[equips.face]} width={SELECT_WIDTH}>
          <Option
            selected={PET_EQUIP_FACES[equips.face]}
            values={PET_EQUIP_FACES}
            onSelect={selectFace}
          />
        </Select>

        <Select label={PET_EQUIP_CLOTHES[equips.clothes]} width={SELECT_WIDTH}>
          <Option
            selected={PET_EQUIP_CLOTHES[equips.clothes]}
            values={PET_EQUIP_CLOTHES}
            onSelect={selectClothes}
          />
        </Select>
      </FlexView>

      <Text weight="semiBold">환수장비 전투력: {petEquipPower}</Text>
    </FlexView>
  );
}
