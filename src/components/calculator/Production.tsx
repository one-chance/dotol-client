import { useEffect, useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Select, Option } from '@components/select';
import DATA from '@data/production-item.json';

type ProductionProps = {
  type: '채집' | '제작' | '상태이상';
};

export default ({ type }: ProductionProps) => {
  const SKILLS = [
    `종류`,
    `직조술`,
    `발목슬`,
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
  const [quantity, setQuantity] = useState(1);

  const selectSkill = (idx: number) => {
    setSelectedSkill(idx);
  };

  const selectGrade = (idx: number) => {
    setSelectedGrade(idx);
  };

  const selectItem = (idx: number) => {
    setSelectedItem(DATA[selectedSkill][selectedGrade][idx]);
    // 아이템 저장
  };

  const inputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = Number(e.target.value.replace(/[^0-9]/g, ``));

    if (temp < 1) setQuantity(1);
    else if (temp < 101) setQuantity(temp);
    // 100 이상은 입력 못하게
    // 1 고정이라 1의 자리수가 안되는 버그 수정
  };

  useEffect(() => {
    setSelectedGrade(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkill]);

  useEffect(() => {
    setSelectedItem(`품목`);
  }, [selectedGrade]);

  return (
    <FlexView>
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

        <Select disabled={selectedGrade === 0} name={selectedItem} width={170}>
          <Option
            selected={selectedItem}
            values={ITEM_LIST[selectedSkill][selectedGrade]}
            onSelect={selectItem}
          />
        </Select>
      </FlexView>

      <FlexView items="center" row>
        <Text>수량</Text>
        <Input value={quantity} width={40} center onChange={inputQuantity} />
      </FlexView>
    </FlexView>
  );
};
