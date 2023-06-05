import { useEffect, useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import DATA from '@data/production-item.json';
import { itemState } from '@states/production';
import { Colors } from '@styles/system';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default () => {
  const SKILLS = [
    `종류`,
    `직조술`,
    `벌목술`,
    `채광술`,
    `조제술`,
    `재봉술`,
    `목공술`,
    `대장술`,
    `강화술`,
  ];

  const GRADES = [
    `단계`,
    `왕초보`,
    `초보`,
    `견습`,
    `도제`,
    `숙련`,
    `전문`,
    `장인`,
    `명장인`,
    `대장인`,
    `절대장인`,
    `전설장인`,
  ];

  const ITEM_LIST = DATA;
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(0);
  const [selectedItem, setSelectedItem] = useState(`품목`);
  const [quantity, setQuantity] = useState(0);

  const setRecipe = useSetRecoilState(itemState);

  const selectSkill = (idx: number) => {
    setSelectedSkill(idx);
  };

  const selectGrade = (idx: number) => {
    setSelectedGrade(idx);
  };

  const selectItem = (idx: number) => {
    setSelectedItem(DATA[selectedSkill][selectedGrade][idx]);
  };

  const inputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === ``) {
      setQuantity(0);
      return;
    }

    const temp = Number(e.target.value.replace(/[^0-9]/g, ``));
    if (temp < 101) setQuantity(temp);
  };

  const changeRecipe = () => {
    setRecipe({ name: selectedItem, amount: quantity });
  };

  useEffect(() => {
    setSelectedGrade(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkill]);

  useEffect(() => {
    setSelectedItem(`품목`);
    setRecipe({ name: ``, amount: 0 });
    setQuantity(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGrade]);

  useEffect(() => {
    if (selectedItem !== `품목`) {
      setQuantity(1);
      setRecipe({ name: selectedItem, amount: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <FlexView gap={40} items="center" row>
      <FlexView gap={16} items="center" row>
        <Select name={SKILLS[selectedSkill]} width={90}>
          <Option
            selected={SKILLS[selectedSkill]}
            values={SKILLS}
            onSelect={selectSkill}
          />
        </Select>

        <Select
          disabled={selectedSkill === 0}
          name={GRADES[selectedGrade]}
          width={100}
        >
          <Option
            selected={GRADES[selectedGrade]}
            values={GRADES}
            onSelect={selectGrade}
          />
        </Select>

        <Select disabled={selectedGrade === 0} name={selectedItem} width={185}>
          <Option
            selected={selectedItem}
            values={ITEM_LIST[selectedSkill][selectedGrade]}
            onSelect={selectItem}
          />
        </Select>
      </FlexView>

      <FlexView gap={4} items="center" row>
        <Input
          css={{ height: `40px` }}
          placeholder="수량"
          value={quantity || ``}
          width={60}
          center
          onChange={inputQuantity}
        />

        <Button
          color="blue"
          css={{ width: `60px`, height: `40px`, borderRadius: `4px` }}
          disabled={quantity === 0}
          onClick={changeRecipe}
        >
          <Text color={Colors.white}>변경</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
