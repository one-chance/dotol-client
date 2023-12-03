import { useState } from 'react';

import { Button, FlexView, Input, Text } from '@components/common';
import { Colors } from '@styles/index';

type LookbookListProps = {
  isMobile?: boolean;
  applyPreview: (list: string) => void;
};

const EQUIP_PARTS = [
  `목/어깨장식`,
  `투구`,
  `얼굴장식`,
  `무기`,
  `갑옷/겉옷`,
  `방패/보조무기`,
  `망토`,
  `신발`,
  `장신구`,
  `세트옷`,
];

const INPUT_WIDTH = 180;

export default function LookbookList({
  isMobile,
  applyPreview,
}: LookbookListProps) {
  const [itemList, setItemList] = useState<string[]>([
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
  ]);

  const inputEquipName = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    itemList[id] = e.target.value;
    setItemList([...itemList]);
  };

  const initItemList = () => {
    setItemList([``, ``, ``, ``, ``, ``, ``, ``, ``, ``]);
  };

  const applyLookbook = () => {
    const list = itemList.filter(equip => equip !== ``).join(`|`);
    applyPreview(list);
  };

  return (
    <FlexView
      content="between"
      css={{
        maxWidth: `720px`,
        border: `1px solid lightgray`,
        padding: isMobile ? `20px` : `20px 40px`,
      }}
      gap={20}
    >
      <FlexView content="between" gap={20} row wrap>
        {EQUIP_PARTS.map((part, index) => (
          <FlexView key={part} items="center" row>
            <Text css={{ minWidth: `120px` }}>{part}</Text>

            <Input
              aria-label="장비"
              value={itemList[index] || ``}
              width={INPUT_WIDTH}
              onChange={e => inputEquipName(e, index)}
              onKeyDown={e => {
                if (e.key === `Enter`) applyLookbook();
              }}
            />
          </FlexView>
        ))}
      </FlexView>

      <FlexView
        content={isMobile ? `center` : `end`}
        gap={20}
        items="center"
        row
      >
        <Button
          aria-label="초기화"
          border={Colors.red}
          css={{
            width: `120px`,
            height: `36px`,
          }}
          radius={4}
          onClick={initItemList}
        >
          <Text color={Colors.red}>초기화</Text>
        </Button>

        <Button
          aria-label="적용"
          border={Colors.primary}
          css={{
            width: `120px`,
            height: `36px`,
            border: `1px solid ${Colors.primary}`,
          }}
          radius={4}
          onClick={applyLookbook}
        >
          <Text color={Colors.primary}>적용</Text>
        </Button>
      </FlexView>
    </FlexView>
  );
}
