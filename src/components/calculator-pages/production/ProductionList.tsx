import { useEffect, useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { getProductionItems } from '@apis/index';
import {
  Button,
  FlexView,
  Input,
  Text,
  Select,
  Option,
} from '@components/common';
import { useResponsive } from '@hooks/index';
import { itemState } from '@states/index';
import { Colors } from '@styles/system';

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

export default () => {
  const isMobile = useResponsive(560);
  const setRecipe = useSetRecoilState(itemState);

  const [itemList, setItemList] = useState([[[]]]);
  const [skill, setSkill] = useState(0);
  const [grade, setGrade] = useState(0);
  const [selectedItem, setSelectedItem] = useState(`품목`);
  const [quantity, setQuantity] = useState(0);

  const selectSkill = (idx: number) => {
    setSkill(idx);
    setGrade(0);
    setSelectedItem(`품목`);
  };

  const selectGrade = (idx: number) => {
    setGrade(idx);

    setSelectedItem(`품목`);
    setRecipe({ name: ``, amount: 0 });
    setQuantity(0);
  };

  const selectItem = (idx: number) => {
    setSelectedItem(itemList[skill][grade][idx]);

    setQuantity(1);
    setRecipe({ name: itemList[skill][grade][idx], amount: 1 });
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
    getProductionItems().then(res => {
      setItemList(res);
    });
  }, []);

  return (
    <FlexView content="between" gap={16} items="center" row wrap>
      <FlexView gap={8} items="center" row>
        <Select isMobile={isMobile} label={SKILLS[skill]} width={80}>
          <Option
            selected={SKILLS[skill]}
            values={SKILLS}
            onSelect={selectSkill}
          />
        </Select>

        <Select
          disabled={skill === 0}
          isMobile={isMobile}
          label={GRADES[grade]}
          width={isMobile ? 90 : 100}
        >
          <Option
            selected={GRADES[grade]}
            values={GRADES}
            onSelect={selectGrade}
          />
        </Select>

        <Select
          disabled={grade === 0}
          isMobile={isMobile}
          label={selectedItem}
          width={isMobile ? 155 : 185}
        >
          <Option
            selected={selectedItem}
            values={itemList[skill][grade]}
            onSelect={selectItem}
          />
        </Select>
      </FlexView>

      <FlexView items="center" row>
        <Input
          aria-label="수량"
          css={{ height: `40px`, borderRadius: `4px 0 0  4px`, borderRight: 0 }}
          placeholder="수량"
          value={quantity || ``}
          width={60}
          center
          onChange={inputQuantity}
        />

        <Button
          aria-label="변경"
          color="blue"
          css={{
            width: `60px`,
            height: `40px`,
            borderRadius: `0 4px 4px 0`,
          }}
          disabled={quantity === 0}
          onClick={changeRecipe}
        >
          <Text color={Colors.white}>변경</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
};
